import { UserRegisterSchemaKeys } from '@/types/registration';

/** Form steps in the registration flow. */
export const REGISTRATION_STEPS = [
  {
    id: 'Step 1',
    name: 'Welcome',
    fields: [
      'name',
      'zip',
      'email',
      'phone',
      'receiveSms',
    ] as UserRegisterSchemaKeys[],
  },
  {
    id: 'Step 2',
    name: 'Select vehicle',
    fields: ['model'] as UserRegisterSchemaKeys[],
  },
];
