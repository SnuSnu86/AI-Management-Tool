import React from 'react';

interface SectionHeaderProps {
  title: string;
  count: number;
  countLabel: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  count,
  countLabel,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <span className="text-sm text-gray-500">
        {count} {countLabel}
      </span>
    </div>
  );
};