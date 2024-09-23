import { FC } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { UserRegisterSchemaValues } from '@/types/registration';
import { Button } from '@/components/ui/button';
import { VEHICLES } from '@/data/registration';

interface Props {
  form: UseFormReturn<UserRegisterSchemaValues>;
  isPending: boolean;
}

const FormVehicle: FC<Props> = ({ form, isPending }) => {
  const activeButtonId = form.getValues('model');

  return (
    <div className="space-y-3 rounded-2xl lg:bg-card lg:p-8">
      {VEHICLES.map(({ name, id }) => (
        <div key={id}>
          <Button
            {...form.register('model')}
            name="model"
            onClick={() => form.setValue('model', id)}
            type="submit"
            value={id}
            variant="outline"
            className="w-full h-auto flex items-center justify-between gap-4 p-3 rounded-lg bg-card"
          >
            <div className="text-start">
              <p className="text-lg font-medium">{name}</p>
              <p className="text-xs uppercase font-light text-slate-500">
                {id}
              </p>
            </div>
            {isPending && id === activeButtonId ? (
              <Loader2 className="animate-spin" />
            ) : (
              <ArrowRight />
            )}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default FormVehicle;
