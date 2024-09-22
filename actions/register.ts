'use server';

import { RegisterActionResponse } from '@/types/register';
import { registerSchema } from '@/lib/schemas';

export async function registerAction(
  prevState: RegisterActionResponse,
  data: FormData
): Promise<RegisterActionResponse> {
  console.log('registerAction called');

  const parsedData = registerSchema.safeParse(data);

  let response: RegisterActionResponse = {
    success: false,
    error: 'Unknown error.',
  };

  if (parsedData.success) {
    response = { success: true, data: parsedData.data };
  }

  if (parsedData.error) {
    response = {
      success: false,
      error: JSON.stringify(parsedData.error.format(), null, 2),
    };
  }

  if (response.success)
    console.log('registerAction success, response:', response);
  else console.error('registerAction error, response:', response);

  return response;
}
