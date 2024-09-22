/** in milliseconds */
export const SERVER_ACTION_DELAY = 2000;

/** in milliseconds */
export const TOAST_DURATION = 2000;

/**
 * This comes from the server. Vehicles buttons to submit the registration flow.
 * Used in components/multistep-form/form-vehicle.tsx
 */
export const VEHICLES = [
  {
    name: '2015 Tesla Model S',
    id: '7YJSA1H4FF063636',
  },
  {
    name: '2021 Tesla Model Y',
    id: '5YJSA1H4FF02727',
  },
];

/** Form steps in the registration flow. */
export const REGISTRATION_STEPS = [
  {
    id: 'Step 1',
    name: 'Welcome',
    fields: ['name', 'zip', 'email', 'phone', 'receiveSms'],
  },
  {
    id: 'Step 2',
    name: 'Select vehicle',
    fields: ['model'],
  },
];
