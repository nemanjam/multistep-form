import { FC } from 'react';
import { Zap } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { UserRegisterSchemaValues } from '@/types/registration';
import { Button } from '@/components/ui/button';
import { REGISTRATION_STEPS } from '@/constants/registration';

import FormProfile from './form-profile';

interface Props {
  form: UseFormReturn<UserRegisterSchemaValues>;
  onNext: () => void;
  currentStep: number;
  isValidStepProfile: boolean;
}

const StepProfile: FC<Props> = ({
  form,
  onNext,
  currentStep,
  isValidStepProfile,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center gap-4 lg:flex-row lg:justify-evenly">
      <div className="w-full lg:flex-1 lg:max-w-lg">
        <div className="lg:max-w-xs mx-auto space-y-6">
          <Button
            type="button"
            className="uppercase rounded-xl text-lime-300 dark:text-primary-foreground text-xs"
          >
            <Zap className="mr-2 size-4" />
            Profile Info
          </Button>
          <h2 className="text-2xl font-bold">
            Welcome! Let&apos;s get started.
          </h2>
          <p className="hidden lg:block">
            We&apos;ll use this information to send you your free health check
            and find service providers in your area.
          </p>
        </div>
      </div>

      <div className="w-full lg:flex-1 lg:max-w-lg">
        <FormProfile form={form} />
      </div>

      {currentStep < REGISTRATION_STEPS.length - 1 && (
        <div className="w-full flex-1 flex flex-col justify-end  py-8 sm:justify-start sm:pt-2 lg:hidden">
          <Button
            type="button"
            className="rounded-full w-full"
            onClick={onNext}
            disabled={!isValidStepProfile}
          >
            Continue
          </Button>
        </div>
      )}
    </div>
  );
};

export default StepProfile;
