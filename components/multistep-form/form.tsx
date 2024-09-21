'use client';

import { useState } from 'react';

import Navigation from '@/components/multistep-form//navigation';
import Step1 from '@/components/multistep-form/step1';
import Step2 from '@/components/multistep-form/step2';

const steps = [
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

export default function IndexPage() {
  const [currentStep, setCurrentStep] = useState(0);

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
        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 />}
      </form>
      <Navigation onNext={handleNextStep} onBack={handlePrevStep} />
    </>
  );
}
