import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  zip: z.string().regex(/^\d{5}$/, 'ZIP code must be exactly 5 digits'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'hone number code must be exactly 10 digits'),
  receiveSms: z.boolean(),
  model: z.string().min(1, 'Vehicle model is required'),
});

export type RegisterSchemaValues = z.output<typeof registerSchema>;
