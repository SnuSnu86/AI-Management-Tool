import React from 'react';
import { Switch } from '../common/Switch';
import { WordList } from '../common/WordList';
import { WordInput } from '../common/WordInput';
import { SectionHeader } from '../common/SectionHeader';
import { useWordManager } from '../hooks/useWordManager';
import { useToggle } from '../hooks/useToggle';

export const FilterWordsManager = () => {
  const {
    words,
    inputValue,
    setInputValue,
    handleAdd,
    handleDelete
  } = useWordManager();

  const [isEnabled, toggle] = useToggle(true);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <SectionHeader 
          title="Filter Words Management" 
          count={words.length}
          countLabel="filters"
        />
        <Switch 
          enabled={isEnabled}
          onChange={toggle}
          label="Filter System"
        />
      </div>

      <WordInput
        value={inputValue}
        onChange={setInputValue}
        onAdd={handleAdd}
        placeholder="Add filter word"
        buttonText="Add Filter"
      />

      <WordList 
        words={words}
        onDelete={handleDelete}
      />
    </div>
  );
};