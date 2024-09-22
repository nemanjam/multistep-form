'use server';

import { UserRegisterActionResponse } from '@/types/register';
import { userRegisterSchema } from '@/lib/schemas';

export const userRegisterAction = async (
  prevState: UserRegisterActionResponse,
  data: FormData
): Promise<UserRegisterActionResponse> => {
  console.log('userRegisterAction called');

  const parsedData = userRegisterSchema.safeParse(data);

  let response: UserRegisterActionResponse = {
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
    console.log('userRegisterAction success, response:', response);
  else console.error('userRegisterAction error, response:', response);

  return response;
};
