import React from 'react';
import { VocabularyManager } from './vocabulary/VocabularyManager';
import { FilterWordsManager } from './filter-words/FilterWordsManager';
import { TransferConfig } from './transfer/TransferConfig';

const ModelSettings = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Model Settings</h1>
      
      <div className="space-y-6">
        <VocabularyManager />
        <FilterWordsManager />
        <TransferConfig />
      </div>
    </div>
  );
};

export default ModelSettings;