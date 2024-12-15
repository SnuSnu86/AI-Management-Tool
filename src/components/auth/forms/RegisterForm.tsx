import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { RegisterFormFields } from './RegisterFormFields';
import { FormError } from '../common/FormError';
import { SubmitButton } from '../common/SubmitButton';
import { useRegistrationForm } from '../hooks/useRegistrationForm';

export const RegisterForm = () => {
  const { register, error, isLoading } = useAuth();
  const { formData, setFormData, validationErrors } = useRegistrationForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(formData);
    } catch (error) {
      // Error is handled by AuthContext
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <FormError message={error} />}

          <RegisterFormFields
            formData={formData}
            onChange={setFormData}
            errors={validationErrors}
          />

          <div>
            <SubmitButton
              isLoading={isLoading}
              text="Create account"
              loadingText="Creating account..."
            />
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};