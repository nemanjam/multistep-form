import { z } from 'zod';

export const userRegisterSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .regex(/^[A-Za-z]+$/, 'Name must contain only letters'),
  zip: z.string().regex(/^\d{5}$/, 'ZIP code must be exactly 5 digits'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^\d{6,10}$/, 'Phone number must be between 6 and 10 digits'),
  receiveSms: z.coerce.boolean(),
  model: z.string().min(1, 'Vehicle model is required'),
});
