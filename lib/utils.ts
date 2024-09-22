import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const zodErrorToString = (error: z.ZodError): string => {
  return error.errors
    .map((err: z.ZodIssue) => `${err.path.join('.')}: ${err.message}`)
    .join(', ');
};

export const objectToFormData = (obj: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });

  return formData;
};

export const wait = async (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
