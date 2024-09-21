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
    <div className="flex justify-between gap-4">
      <div className="basis-1/2">
        <Button type="button" className="uppercase rounded-xl">
          <Zap className="mr-2 size-4" />
          Profile Info
        </Button>
        <h2>Welcome! Let&apos;s get started.</h2>
        <p>
          We&apos;ll use this information to send your free health check and
          find service providers in your area.
        </p>
      </div>
      <div className="basis-1/2">
        <FormProfile form={form} />
      </div>
    </div>
  );
};

export default StepProfile;
