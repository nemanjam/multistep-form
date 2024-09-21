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
    <div className="flex justify-between gap-4">
      <div className="basis-1/2">
        <Button type="button" className="uppercase rounded-xl">
          <CarFront className="mr-2 size-4" />
          Vehicle
        </Button>
        <h2>Select a vehicle for your free health check.</h2>
      </div>
      <div className="basis-1/2">
        <FormVehicle form={form} />
      </div>
    </div>
  );
};

export default StepVehicle;
