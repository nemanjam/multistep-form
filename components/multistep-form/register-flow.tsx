'use client';

import { FC, FormEvent, useEffect, useState } from 'react';
import { userRegisterAction } from '@/actions/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';

import {
  UserRegisterActionResponse,
  UserRegisterSchemaKeys,
  UserRegisterSchemaValues,
} from '@/types/register';
import { userRegisterSchema } from '@/lib/schemas';
import { useToast } from '@/hooks/use-toast';
import { Form } from '@/components/ui/form';
import Navigation from '@/components/multistep-form/navigation';
import StepProfile from '@/components/multistep-form/step-profile';
import StepVehicle from '@/components/multistep-form/step-vehicle';

export const steps = [
  {
    id: 'Step 1',
    name: 'Welcome',
    fields: ['name', 'zip', 'email', 'phone', 'receiveSms'],
  },
  {
    id: 'Step 2',
    name: 'Select vehicle',
    fields: ['model'],
  },
];

const defaultValues: UserRegisterSchemaValues = {
  name: '',
  zip: '',
  email: '',
  phone: '',
  receiveSms: false,
  model: '',
};

const initialUserRegisterActionResponse: UserRegisterActionResponse = {
  success: true,
  data: undefined,
};

const RegisterFlow: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<UserRegisterSchemaValues>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues,
  });

  const [userRegisterActionResponse, userRegisterFormAction] = useFormState(
    userRegisterAction,
    initialUserRegisterActionResponse
  );

  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: 'Received new userRegisterActionResponse',
      description: JSON.stringify(userRegisterActionResponse, null, 2),
    });
  }, [toast, userRegisterActionResponse]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('handleSubmit');

    const onSubmit = () => {
      const formElement = event.currentTarget;
      const formData = new FormData(formElement);
      userRegisterFormAction(formData);
    };

    form.handleSubmit(onSubmit)(event);
  };

  const handleNextStep = async () => {
    if (currentStep >= steps.length - 1) return;

    // validate first step
    const fields = steps[currentStep].fields as UserRegisterSchemaKeys[];
    const isValid = await form.trigger(fields, { shouldFocus: true });
    if (!isValid) return;

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (currentStep <= 0) return;

    setCurrentStep((prev) => prev - 1);
  };

  return (
    <section className="flex-1 flex flex-col">
      <Form {...form}>
        <div className="container flex-1 flex flex-col justify-center">
          <form action={userRegisterFormAction} onSubmit={handleSubmit}>
            {currentStep === 0 && <StepProfile form={form} />}
            {currentStep === 1 && <StepVehicle form={form} />}
          </form>
        </div>

        <div className="border-t border-border">
          <div className="p-4 mx-auto max-w-screen-2xl">
            <Navigation
              onNext={handleNextStep}
              onBack={handlePrevStep}
              currentStep={currentStep}
            />
          </div>
        </div>
      </Form>
    </section>
  );
};

export default RegisterFlow;
