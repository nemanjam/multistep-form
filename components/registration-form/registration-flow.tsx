'use client';

import { FC, FormEvent, useEffect, useState, useTransition } from 'react';
import { userRegisterAction } from '@/actions/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';

import {
  UserRegisterActionResponse,
  UserRegisterSchemaValues,
} from '@/types/registration';
import { FORM_RESET_DELAY, TOAST_DURATION } from '@/config/env';
import { userRegisterSchema } from '@/lib/schemas';
import { objectToFormData, wait } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Form } from '@/components/ui/form';
import Navigation from '@/components/registration-form/navigation';
import { RegistrationHeader } from '@/components/registration-form/registration-header';
import StepProfile from '@/components/registration-form/step-profile';
import StepVehicle from '@/components/registration-form/step-vehicle';
import { REGISTRATION_STEPS } from '@/constants/registration';

const defaultValues: UserRegisterSchemaValues = {
  name: 'asd',
  zip: '12345',
  email: 'asd@asd.asd',
  phone: '1231231',
  receiveSms: false,
  model: '',
};

const defaultValues1: UserRegisterSchemaValues = {
  name: '',
  zip: '',
  email: '',
  phone: '',
  receiveSms: false,
  model: '',
};

const initialUserRegisterActionResponse: UserRegisterActionResponse = {
  status: 'initial',
  data: undefined,
};

const RegistrationFlow: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isValidStepProfile, setIsValidStepProfile] = useState(true);

  const form = useForm<UserRegisterSchemaValues>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const [userRegisterActionResponse, userRegisterFormAction] = useFormState(
    userRegisterAction,
    initialUserRegisterActionResponse
  );
  const [isPending, startTransition] = useTransition();

  const { toast } = useToast();

  useEffect(() => {
    if (!['success', 'error'].includes(userRegisterActionResponse.status))
      return;

    toast({
      ...(userRegisterActionResponse.status === 'error' && {
        variant: 'destructive',
      }),
      duration: TOAST_DURATION,
      title: 'Received new userRegisterActionResponse',
      description: (
        <pre>{JSON.stringify(userRegisterActionResponse, null, 2)}</pre>
      ),
    });

    wait(TOAST_DURATION).then(() => {
      setCurrentStep(0);
      wait(FORM_RESET_DELAY).then(() => form.reset());
    });
  }, [toast, userRegisterActionResponse, form]);

  const onSubmit = (data: UserRegisterSchemaValues) => {
    console.log('data', data);

    const formData = objectToFormData(data);
    startTransition(() => userRegisterFormAction(formData));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit(onSubmit)(event);
  };

  const handleNextStep = async () => {
    if (currentStep >= REGISTRATION_STEPS.length - 1) return;

    // validate profile step
    if (currentStep === 0) {
      const isValid = await form.trigger(REGISTRATION_STEPS[0].fields, {
        shouldFocus: true,
      });

      if (!isValid) return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (currentStep <= 0) return;

    setCurrentStep((prev) => prev - 1);
  };

  useEffect(() => {
    const isValid = REGISTRATION_STEPS[0].fields.reduce(
      (acc, field) => acc && !Boolean(form.formState.errors[field]?.message),
      true
    );

    setIsValidStepProfile(isValid);
  }, [form.formState]);

  const getProgress = (): number => {
    const { isSubmitted, isDirty } = form.formState;

    let progress = 0;

    switch (true) {
      case currentStep === 0 && !isValidStepProfile:
      case currentStep === 0 && !isDirty:
        progress = 25;
        break;
      case currentStep === 0 && isValidStepProfile:
      case currentStep === 1 && !isPending && !isSubmitted:
        progress = 50;
        break;
      case currentStep === 1 && isPending:
        progress = 75;
        break;
      case currentStep === 1 && isSubmitted:
        progress = 100;
        break;

      default:
        progress = 0;
        break;
    }

    return progress;
  };

  const progress = getProgress();

  return (
    <div className="flex-1 flex flex-col">
      <RegistrationHeader />

      <Form {...form}>
        <main className="container flex-1 flex flex-col justify-center">
          <form action={userRegisterFormAction} onSubmit={handleSubmit}>
            {currentStep === 0 && <StepProfile form={form} />}
            {currentStep === 1 && (
              <StepVehicle form={form} isPending={isPending} />
            )}
          </form>
        </main>

        <footer className="border-t border-border">
          <div className="p-4 mx-auto max-w-screen-2xl">
            <Navigation
              onNext={handleNextStep}
              onBack={handlePrevStep}
              currentStep={currentStep}
              progress={progress}
              isValidStepProfile={isValidStepProfile}
            />
          </div>
        </footer>
      </Form>
    </div>
  );
};

export default RegistrationFlow;
