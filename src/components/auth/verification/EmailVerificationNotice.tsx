import React from 'react';
import { Mail, RefreshCw } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useLanguage } from '../../../context/LanguageContext';

export const EmailVerificationNotice = () => {
  const { user, resendVerificationEmail, error } = useAuth();
  const { t } = useLanguage();

  const handleResend = async () => {
    try {
      await resendVerificationEmail();
    } catch (error) {
      // Error handled by AuthContext
    }
  };

  if (!user || user.emailVerified) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Mail className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            {t('auth.verifyEmail')}
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              {t('auth.verifyEmailMessage', { email: user.email })}
            </p>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleResend}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('auth.resendVerification')}
            </button>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};