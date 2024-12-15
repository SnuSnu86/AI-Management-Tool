import React from 'react'
import { History, Clock, RefreshCw } from 'lucide-react'
import { useLanguage } from '../../../../context/LanguageContext'

interface ChangeHistoryHeaderProps {
  onRefresh: () => void
}

export const ChangeHistoryHeader: React.FC<ChangeHistoryHeaderProps> = ({ onRefresh }) => {
  const { t } = useLanguage()

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <History className="h-5 w-5 text-indigo-600" />
        <h2 className="ml-2 text-lg font-semibold text-gray-900">
          {t('Recent Changes')}
        </h2>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <Clock className="h-4 w-4" />
        <span>{t('Last Updated', { time: new Date().toLocaleTimeString() })}</span>
        <RefreshCw 
          className="h-4 w-4 ml-2 cursor-pointer hover:text-indigo-600 transition-colors" 
          onClick={onRefresh}
        />
      </div>
    </div>
  )
}