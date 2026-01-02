'use server';

import { z } from 'zod';

// This file is no longer used for the contact form,
// but can be kept for future server actions.

type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}
