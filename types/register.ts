import { z } from 'zod';

import { userRegisterSchema } from '@/lib/schemas';

export type UserRegisterSchemaValues = z.output<typeof userRegisterSchema>;

export type UserRegisterSchemaKeys = keyof UserRegisterSchemaValues;

export interface UserRegisterActionResponse {
  success: boolean;
  data?: UserRegisterSchemaValues;
  error?: string;
}
