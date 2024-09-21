import { CarFront } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Props {}

const StepVehicle: React.FC<Props> = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="basis-1/2">
        <Button type="button" className="uppercase rounded-xl">
          <CarFront className="mr-2 size-4" />
          Vehicle
        </Button>
        <h2>Select a vehicle for your free health check.</h2>
      </div>
      <div className="basis-1/2 border border-blue-500">vehicle form</div>
    </div>
  );
};

export default StepVehicle;
