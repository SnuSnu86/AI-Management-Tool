import React from 'react';
import { CategoryIcon } from '../icons/CategoryIcon';
import { ChangeRecord } from '../../../../types/changes';
import { useLanguage } from '../../../../context/LanguageContext';
import { formatDistanceToNow } from '../../../../utils/dateUtils';

interface ChangeInfoProps {
  change: ChangeRecord;
}

export const ChangeInfo: React.FC<ChangeInfoProps> = ({ change }) => {
  const { t } = useLanguage();

  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-gray-900">
            {change.userName}
          </p>
          <CategoryIcon 
            category={change.category}
            component={change.component}
            className="h-4 w-4"
          />
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
  );
};