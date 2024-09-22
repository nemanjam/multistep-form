import { FC } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { UserRegisterSchemaValues } from '@/types/register';
import { Button } from '@/components/ui/button';

interface Props {
  form: UseFormReturn<UserRegisterSchemaValues>;
}

const FormVehicle: FC<Props> = ({ form }) => {
  return (
    <div className="space-y-2 rounded-lg p-8 bg-card">
      <Button
        type="submit"
        name="model"
        value="tesla 1"
        variant="outline"
        className="w-full h-auto flex items-center justify-between gap-4 p-4 bg-card"
      >
        <div className="text-start">
          <p className="text-lg font-medium">2015 Tesla Model S</p>
          <p className="text-xs uppercase font-light text-slate-500">
            7YJSA1H4FF063636
          </p>
        </div>
        <ArrowRight />
      </Button>
      <Button
        type="submit"
        name="model"
        value="tesla 1"
        variant="outline"
        className="w-full h-auto flex items-center justify-between gap-4 p-4 bg-card"
      >
        {/* <ArrowRight /> */}
        <div className="text-start">
          <p className="text-lg font-medium">2021 Tesla Model Y</p>
          <p className="text-xs uppercase font-light text-slate-500">
            5YJSA1H4FF02727
          </p>
        </div>

        <Loader2 className="animate-spin" />
      </Button>
    </div>
  );
};

export default FormVehicle;
