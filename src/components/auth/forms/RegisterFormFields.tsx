import React from 'react';
import { UserRegistration } from '../../../types/auth';
import { FormField } from '../common/FormField';
import { User, Mail, Lock } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface RegisterFormFieldsProps {
  formData: UserRegistration;
  onChange: (data: Partial<UserRegistration>) => void;
  errors: Record<string, string>;
}

export const RegisterFormFields: React.FC<RegisterFormFieldsProps> = ({
  formData,
  onChange,
  errors,
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div>
        <FormField
          icon={<User />}
          type="text"
          id="name"
          placeholder={t('auth.fullName')}
          value={formData.name}
          onChange={(e) => onChange({ name: e.target.value })}
          required
          autoComplete="name"
          error={errors.name}
        />
      </div>

      <div>
        <FormField
          icon={<Mail />}
          type="email"
          id="email"
          placeholder={t('Email')}
          value={formData.email}
          onChange={(e) => onChange({ email: e.target.value })}
          required
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <div>
        <FormField
          icon={<Lock />}
          type="password"
          id="password"
          placeholder={t('Password')}
          value={formData.password}
          onChange={(e) => onChange({ password: e.target.value })}
          required
          autoComplete="new-password"
          error={errors.password}
        />
      </div>
    </div>
  );
};