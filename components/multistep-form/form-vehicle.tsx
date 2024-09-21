import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { RegisterSchemaValues } from '@/lib/schemas';

interface Props {
  form: UseFormReturn<RegisterSchemaValues>;
}

const FormVehicle: FC<Props> = ({ form }) => {
  return <div className="flex justify-between gap-4"></div>;
};

export default FormVehicle;
