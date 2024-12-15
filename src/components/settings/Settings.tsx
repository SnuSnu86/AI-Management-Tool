import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSettings } from './language/LanguageSettings';
import { TwoFactorAuth } from './security/TwoFactorAuth';
import { AutoLogout } from './security/AutoLogout';
import { NotificationSettings } from './notifications/NotificationSettings';
import { AlertSettings } from './alerts/AlertSettings';

const Settings = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">{t('nav.settings')}</h1>
      
      <div className="space-y-6">
        <LanguageSettings />
        <TwoFactorAuth />
        <AutoLogout />
        <NotificationSettings />
        <AlertSettings />
      </div>
    </div>
  );
};

export default Settings;