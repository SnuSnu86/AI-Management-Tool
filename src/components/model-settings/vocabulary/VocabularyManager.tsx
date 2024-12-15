import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { WordList } from '../common/WordList';
import { WordInput } from '../common/WordInput';
import { SectionHeader } from '../common/SectionHeader';
import { useWordManager } from '../hooks/useWordManager';

export const VocabularyManager = () => {
  const {
    words,
    inputValue,
    setInputValue,
    handleAdd,
    handleDelete
  } = useWordManager();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <SectionHeader 
        title="Custom Vocabulary Management" 
        count={words.length}
        countLabel="words"
      />
      
      <WordInput
        value={inputValue}
        onChange={setInputValue}
        onAdd={handleAdd}
        placeholder="Enter custom vocabulary word"
        buttonText="Add Word"
      />

      <WordList 
        words={words}
        onDelete={handleDelete}
      />
    </div>
  );
};