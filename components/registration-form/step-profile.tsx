import { FC } from 'react';
import { Zap } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { UserRegisterSchemaValues } from '@/types/registration';
import { Button } from '@/components/ui/button';

import FormProfile from './form-profile';

interface Props {
  form: UseFormReturn<UserRegisterSchemaValues>;
}

const StepProfile: FC<Props> = ({ form }) => {
  return (
    <div className="flex justify-evenly items-center gap-4">
      <div className="basis-1/3 grow lg:max-w-lg">
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
          <p>
            We&apos;ll use this information to send you your free health check
            and find service providers in your area.
          </p>
        </div>
      </div>

      <div className="basis-1/3 grow lg:max-w-lg">
        <FormProfile form={form} />
      </div>
    </div>
  );
};

export default StepProfile;
