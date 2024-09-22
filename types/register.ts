import { z } from 'zod';

import { registerSchema } from '@/lib/schemas';

export type RegisterSchemaValues = z.output<typeof registerSchema>;

export type RegisterSchemaKeys = keyof RegisterSchemaValues;

export interface RegisterActionResponse {
  success: boolean;
  data?: RegisterSchemaValues;
  error?: string;
}
