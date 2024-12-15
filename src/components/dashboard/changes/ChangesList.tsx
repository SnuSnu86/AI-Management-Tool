import React from 'react';
import { ChangeRecord } from '../../../types/changes';
import { useLanguage } from '../../../context/LanguageContext';
import { ChangeHistoryItem } from './ChangeHistoryItem';
import LoadingSpinner from '../../common/LoadingSpinner';

interface ChangesListProps {
  changes: ChangeRecord[];
  isLoading: boolean;
}

export const ChangesList: React.FC<ChangesListProps> = ({ changes, isLoading }) => {
  const { t } = useLanguage();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (changes.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4">
        {t('No Changes')}
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {changes.map((change) => (
        <ChangeHistoryItem key={change.id} change={change} />
      ))}
    </div>
  );
};