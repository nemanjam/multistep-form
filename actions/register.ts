'use server';

import { UserRegisterActionResponse } from '@/types/register';
import { SERVER_ACTION_DELAY } from '@/config/registration';
import { userRegisterSchema } from '@/lib/schemas';
import { wait, zodErrorToString } from '@/lib/utils';

export const userRegisterAction = async (
  prevState: UserRegisterActionResponse,
  formData: FormData
): Promise<UserRegisterActionResponse> => {
  const objectData = Object.fromEntries(formData);
  const parsedData = userRegisterSchema.safeParse(objectData);

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
      error: zodErrorToString(parsedData.error),
    };
  }

  if (response.success)
    console.log('userRegisterAction success, response:', response);
  else console.error('userRegisterAction error, response:', response);

  await wait(SERVER_ACTION_DELAY);

  return response;
};
