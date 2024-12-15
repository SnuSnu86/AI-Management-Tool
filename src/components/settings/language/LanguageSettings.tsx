import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { SettingsCard } from '../common/SettingsCard';

export const LanguageSettings = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <SettingsCard
      title={t('settings.language')}
      icon={<Globe className="h-5 w-5" />}
    >
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          {t('settings.language.select')}
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'de')}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="en">{t('settings.language.en')}</option>
          <option value="de">{t('settings.language.de')}</option>
        </select>
      </div>
    </SettingsCard>
  );
};