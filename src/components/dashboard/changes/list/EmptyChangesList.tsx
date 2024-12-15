import React from 'react'
import { useLanguage } from '../../../../context/LanguageContext'

export const EmptyChangesList: React.FC = () => {
  const { t } = useLanguage()

  return (
    <p className="text-center text-gray-500 py-4">
      {t('dashboard.noChanges')}
    </p>
  )
}