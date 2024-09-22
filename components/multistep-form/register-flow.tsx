'use client';

import { FC, FormEvent, useEffect, useState, useTransition } from 'react';
import { userRegisterAction } from '@/actions/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';

import {
  UserRegisterActionResponse,
  UserRegisterSchemaKeys,
  UserRegisterSchemaValues,
} from '@/types/register';
import { REGISTRATION_STEPS, TOAST_DURATION } from '@/config/registration';
import { userRegisterSchema } from '@/lib/schemas';
import { objectToFormData } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Form } from '@/components/ui/form';
import Navigation from '@/components/multistep-form/navigation';
import StepProfile from '@/components/multistep-form/step-profile';
import StepVehicle from '@/components/multistep-form/step-vehicle';

const defaultValues: UserRegisterSchemaValues = {
  name: 'test',
  zip: '12312',
  email: 'sss@sss.sss',
  phone: '1231231',
  receiveSms: false,
  model: '',
};

const initialUserRegisterActionResponse: UserRegisterActionResponse = {
  success: true,
  data: undefined,
};

const RegisterFlow: FC = () => {
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
    toast({
      ...(!userRegisterActionResponse.success && { variant: 'destructive' }),
      duration: TOAST_DURATION,
      title: 'Received new userRegisterActionResponse',
      description: (
        <pre>{JSON.stringify(userRegisterActionResponse, null, 2)}</pre>
      ),
    });
  }, [toast, userRegisterActionResponse]);

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
    const { isSubmitted } = form.formState;

    let progress = 0;

    switch (true) {
      case currentStep === 0 && !isValidStepProfile:
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
    <section className="flex-1 flex flex-col">
      <Form {...form}>
        <div className="container flex-1 flex flex-col justify-center">
          <form action={userRegisterFormAction} onSubmit={handleSubmit}>
            {currentStep === 0 && <StepProfile form={form} />}
            {currentStep === 1 && (
              <StepVehicle form={form} isPending={isPending} />
            )}
          </form>
        </div>

        <div className="border-t border-border">
          <div className="p-4 mx-auto max-w-screen-2xl">
            <Navigation
              onNext={handleNextStep}
              onBack={handlePrevStep}
              currentStep={currentStep}
              progress={progress}
              isValidStepProfile={isValidStepProfile}
            />
          </div>
        </div>
      </Form>
    </section>
  );
};

export default RegisterFlow;
