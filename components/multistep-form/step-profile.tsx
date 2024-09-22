import { FC } from 'react';
import { Zap } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { RegisterSchemaValues } from '@/lib/schemas';
import { Button } from '@/components/ui/button';

import FormProfile from './form-profile';

interface Props {
  form: UseFormReturn<RegisterSchemaValues>;
}

const StepProfile: FC<Props> = ({ form }) => {
  return (
    <div className="flex justify-evenly items-center gap-4">
      <div className="space-y-6 basis-1/3 grow lg:max-w-lg">
        <Button type="button" className="uppercase rounded-xl text-lime-300">
          <Zap className="mr-2 size-4" />
          Profile Info
        </Button>
        <h2 className="text-2xl font-bold">Welcome! Let&apos;s get started.</h2>
        <p>
          We&apos;ll use this information to send your free health check and
          find service providers in your area.
        </p>
      </div>

      <div className="basis-1/3 grow lg:max-w-lg">
        <FormProfile form={form} />
      </div>
    </div>
  );
};

export default StepProfile;
