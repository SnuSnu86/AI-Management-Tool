import React, { ReactNode } from 'react';
import { useLanguage } from '../../../context/LanguageContext';

interface SettingsCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const SettingsCard: React.FC<SettingsCardProps> = ({
  title,
  icon,
  children,
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <span className="text-gray-500">{icon}</span>
        <h2 className="text-lg font-semibold text-gray-900 ml-2">{t(title)}</h2>
      </div>
      {children}
    </div>
  );
};