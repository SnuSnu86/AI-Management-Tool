import React from 'react';

interface TimeRangePickerProps {
  startTime: string;
  endTime: string;
  onStartChange: (time: string) => void;
  onEndChange: (time: string) => void;
}

export const TimeRangePicker: React.FC<TimeRangePickerProps> = ({
  startTime,
  endTime,
  onStartChange,
  onEndChange,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <label htmlFor="startTime" className="block text-sm text-gray-500">
          Start
        </label>
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={(e) => onStartChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
      <div>
        <label htmlFor="endTime" className="block text-sm text-gray-500">
          End
        </label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={(e) => onEndChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
    </div>
  );
};