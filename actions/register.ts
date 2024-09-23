'use server';

import { UserRegisterActionResponse } from '@/types/registration';
import { SERVER_ACTION_DELAY } from '@/config/env';
import { userRegisterSchema } from '@/lib/schemas';
import { wait, zodErrorToString } from '@/lib/utils';

export const userRegisterAction = async (
  prevState: UserRegisterActionResponse,
  formData: FormData
): Promise<UserRegisterActionResponse> => {
  const objectData = Object.fromEntries(formData);
  const parsedData = userRegisterSchema.safeParse(objectData);

  let response: UserRegisterActionResponse = {
    status: 'error',
    error: 'Unknown error.',
  };

  if (parsedData.success) {
    response = { status: 'success', data: parsedData.data };
  }

  if (parsedData.error) {
    response = {
      status: 'error',
      error: zodErrorToString(parsedData.error),
    };
  }

  switch (response.status) {
    case 'success':
      console.log('userRegisterAction success, response:', response);
      break;
    case 'error':
      console.error('userRegisterAction error, response:', response);
      break;

    default:
      console.log('userRegisterAction initial, response:', response);
      break;
  }

  await wait(SERVER_ACTION_DELAY);

  return response;
};
