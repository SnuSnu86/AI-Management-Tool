import React from 'react';
import { Link } from 'react-router-dom';
import { LoginCredentials } from '../../../types/auth';
import { FormField } from '../common/FormField';
import { Mail, Lock } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface LoginFormFieldsProps {
  credentials: LoginCredentials;
  onChange: (credentials: LoginCredentials) => void;
}

export const LoginFormFields: React.FC<LoginFormFieldsProps> = ({
  credentials,
  onChange
}) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="rounded-md shadow-sm -space-y-px">
        <FormField
          icon={<Mail />}
          type="email"
          id="email"
          placeholder={t('Email')}
          value={credentials.email}
          onChange={(e) => onChange({ ...credentials, email: e.target.value })}
          required
          autoComplete="email"
          className="rounded-t-md"
        />

        <FormField
          icon={<Lock />}
          type="password"
          id="password"
          placeholder={t('Password')}
          value={credentials.password}
          onChange={(e) => onChange({ ...credentials, password: e.target.value })}
          required
          autoComplete="current-password"
          className="rounded-b-md"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={credentials.rememberMe}
            onChange={(e) => onChange({ ...credentials, rememberMe: e.target.checked })}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            {t('auth.rememberMe')}
          </label>
        </div>

        <div className="text-sm">
          <Link to="/reset-password" className="font-medium text-indigo-600 hover:text-indigo-500">
            {t('Forgot Password')}
          </Link>
        </div>
      </div>
    </>
  );
};