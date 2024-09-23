import { z } from 'zod';

import { userRegisterSchema } from '@/lib/schemas';

export type UserRegisterSchemaValues = z.output<typeof userRegisterSchema>;

export type UserRegisterSchemaKeys = keyof UserRegisterSchemaValues;

export type Status = 'success' | 'error' | 'initial';

export interface UserRegisterActionResponse {
  status: Status;
  data?: UserRegisterSchemaValues;
  error?: string;
}
