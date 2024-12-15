import React from 'react';
import { Calendar } from 'lucide-react';
import { DateRange } from '../../types/analytics';

interface DateRangePickerProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <Calendar className="h-5 w-5 text-gray-400" />
      <input
        type="date"
        value={value.start.toISOString().split('T')[0]}
        onChange={(e) => onChange({ ...value, start: new Date(e.target.value) })}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
      />
      <span className="text-gray-500">to</span>
      <input
        type="date"
        value={value.end.toISOString().split('T')[0]}
        onChange={(e) => onChange({ ...value, end: new Date(e.target.value) })}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
      />
    </div>
  );
};