import { useState } from 'react';
import { LoginCredentials } from '../../../types/auth';

export const useLoginForm = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
    rememberMe: false
  });

  return {
    credentials,
    setCredentials
  };
};