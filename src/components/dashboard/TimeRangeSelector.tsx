import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const TimeRangeSelector = () => {
  return (
    <div className="flex items-center space-x-2">
      <Calendar className="h-5 w-5 text-gray-400" />
      <select className="form-select rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8">
        <option>Today</option>
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
        <option>This Month</option>
        <option>Last Quarter</option>
      </select>
      <ChevronDown className="h-4 w-4 text-gray-400 -ml-6 pointer-events-none" />
    </div>
  );
};

export default TimeRangeSelector;