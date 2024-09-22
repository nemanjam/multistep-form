import { FC } from 'react';
import { CarFront } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { RegisterSchemaValues } from '@/lib/schemas';
import { Button } from '@/components/ui/button';

import FormVehicle from './form-vehicle';

interface Props {
  form: UseFormReturn<RegisterSchemaValues>;
}

const StepVehicle: FC<Props> = ({ form }) => {
  return (
    <div className="flex justify-evenly items-center gap-4">
      <div className="space-y-6 basis-1/3 grow lg:max-w-lg">
        <div className="lg:max-w-xs mx-auto space-y-6">
          <Button
            type="button"
            className="uppercase rounded-xl text-lime-300 text-xs"
          >
            <CarFront className="mr-2 size-4" />
            Vehicle
          </Button>
          <h2 className="text-2xl font-bold">
            Select a vehicle for your free health check.
          </h2>
        </div>
      </div>

      <div className="basis-1/3 grow lg:max-w-lg">
        <FormVehicle form={form} />
      </div>
    </div>
  );
};

export default StepVehicle;
