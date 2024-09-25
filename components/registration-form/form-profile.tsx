import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { UserRegisterSchemaValues } from '@/types/registration';
import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface Props {
  form: UseFormReturn<UserRegisterSchemaValues>;
}
// xs bg-slate, md bg-white, lg mg-slate
const FormProfile: FC<Props> = ({ form }) => {
  return (
    <div className="space-y-2 rounded-2xl lg:p-8 lg:bg-card">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="uppercase">Name</FormLabel>
            <FormControl>
              <Input placeholder="Percy Cox" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="zip"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Zip code</FormLabel>
            <FormControl>
              <Input placeholder="00000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Contact email</FormLabel>
            <FormControl>
              <Input placeholder="percycox@sacredheart.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Phone number</FormLabel>
            <FormControl>
              <Input placeholder="123 456 7890" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="receiveSms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-2 space-y-0 !mt-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel variant="checkbox">
              receive SMS updates about health checks
            </FormLabel>
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormProfile;
