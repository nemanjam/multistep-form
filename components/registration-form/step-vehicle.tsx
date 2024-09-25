import { FC } from 'react';
import { CarFront } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { UserRegisterSchemaValues } from '@/types/registration';
import { Button } from '@/components/ui/button';
import FormVehicle from '@/components/registration-form/form-vehicle';

interface Props {
  form: UseFormReturn<UserRegisterSchemaValues>;
  isPending: boolean;
}

const StepVehicle: FC<Props> = ({ form, isPending }) => {
  return (
    <div className="flex-1 flex flex-col items-center gap-4 lg:flex-row lg:justify-evenly">
      <div className="w-full lg:flex-1 lg:max-w-lg">
        <div className="lg:max-w-xs mx-auto space-y-6">
          <Button
            type="button"
            className="uppercase rounded-xl text-lime-300 dark:text-primary-foreground text-xs"
          >
            <CarFront className="mr-2 size-4" />
            Vehicle
          </Button>
          <h2 className="text-2xl font-bold lg:pr-16">
            Select a vehicle for your free health check.
          </h2>
        </div>
      </div>

      <div className="w-full lg:flex-1 lg:max-w-lg">
        <FormVehicle form={form} isPending={isPending} />
      </div>
    </div>
  );
};

export default StepVehicle;
