import React from 'react';
import { Settings, Database } from 'lucide-react';
import { ChangeRecord } from '../../../types/changes';
import { useLanguage } from '../../../context/LanguageContext';
import { formatDistanceToNow } from '../../../utils/dateUtils';

interface ChangeHistoryItemProps {
  change: ChangeRecord;
}

export const ChangeHistoryItem: React.FC<ChangeHistoryItemProps> = ({ change }) => {
  const { t } = useLanguage();

  const getIcon = () => {
    return change.category === 'settings' 
      ? <Settings className="h-4 w-4 text-indigo-500" />
      : <Database className="h-4 w-4 text-blue-500" />;
  };

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <img
        src={change.userAvatar}
        alt={change.userName}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-gray-900">
              {change.userName}
            </p>
            {getIcon()}
          </div>
          <span className="text-sm text-gray-500">
            {formatDistanceToNow(change.timestamp)}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {t(`changes.${change.category}.${change.component}`, {
            details: change.description
          })}
        </p>
      </div>
    </div>
  );
};