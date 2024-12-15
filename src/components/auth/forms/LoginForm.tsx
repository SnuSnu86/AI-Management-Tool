import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { LoginCredentials } from '../../../types/auth';
import { LoginHeader } from './LoginHeader';
import { LoginFormFields } from './LoginFormFields';
import { FormError } from '../common/FormError';
import { SubmitButton } from '../common/SubmitButton';

export const LoginForm = () => {
  const { login, error, isLoading } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    emailOrUsername: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(credentials);
    } catch (error) {
      // Error is handled by AuthContext
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <LoginHeader />

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <FormError message={error} />}

          <LoginFormFields
            credentials={credentials}
            onChange={setCredentials}
          />

          <div>
            <SubmitButton
              isLoading={isLoading}
              text="Sign in"
              loadingText="Signing in..."
            />
          </div>

          <div className="text-center">
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};