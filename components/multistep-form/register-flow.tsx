'use client';

import { FC, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { registerSchema, RegisterSchemaType } from '@/lib/schemas';
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

const defaultValues = {
  name: '',
  zip: '',
  email: '',
  phone: '',
  receiveSms: false,
  model: '',
};

const RegisterFlow: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  const handleNextStep = () => {
    if (currentStep >= steps.length - 1) return;

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (currentStep <= 0) return;

    setCurrentStep((prev) => prev - 1);
  };

  return (
    <>
      <form>
        {currentStep === 0 && <StepProfile />}
        {currentStep === 1 && <StepVehicle />}
      </form>
      <Navigation
        onNext={handleNextStep}
        onBack={handlePrevStep}
        currentStep={currentStep}
      />
    </>
  );
};

export default RegisterFlow;
