import { useState } from 'react';
import { UserRegistration, userSchema } from '../../../types/auth';
import { z } from 'zod';

export const useRegistrationForm = () => {
  const [formData, setFormData] = useState<UserRegistration>({
    name: '',
    email: '',
    password: ''
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateField = (field: keyof UserRegistration, value: any): boolean => {
    try {
      const schema = userSchema.shape[field];
      schema.parse(value);
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidationErrors(prev => ({
          ...prev,
          [field]: error.errors[0].message
        }));
        return false;
      }
      return false;
    }
  };

  const updateFormData = (newData: Partial<UserRegistration>) => {
    setFormData(prev => {
      const updated = { ...prev, ...newData };
      // Validate the updated fields
      Object.keys(newData).forEach(key => {
        validateField(key as keyof UserRegistration, updated[key as keyof UserRegistration]);
      });
      return updated;
    });
  };

  return {
    formData,
    setFormData: updateFormData,
    validationErrors,
    validateField,
  };
};