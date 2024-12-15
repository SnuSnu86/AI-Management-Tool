import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { MetricCard } from './common/MetricCard';
import { LineChart } from './charts/LineChart';
import { CallStats } from '../../types/analytics';
import { formatDuration } from './utils/formatters';

interface CallStatisticsProps {
  data: CallStats;
  isLoading: boolean;
}

export const CallStatistics: React.FC<CallStatisticsProps> = ({ data, isLoading }) => {
  return (
    <MetricCard
      title="Call Statistics"
      icon={<Phone className="h-5 w-5" />}
      isLoading={isLoading}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Total Calls</p>
            <p className="text-2xl font-semibold">{data.totalCalls}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Minutes Used</p>
            <p className="text-2xl font-semibold">{formatDuration(data.minutesUsed)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Avg Duration</p>
            <p className="text-2xl font-semibold">{formatDuration(data.avgDuration)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Peak Time</p>
            <p className="text-2xl font-semibold">{data.peakTime}</p>
          </div>
        </div>

        <div className="h-48">
          <LineChart
            data={data.volumeTrend}
            xKey="time"
            yKey="calls"
            color="#4F46E5"
          />
        </div>
      </div>
    </MetricCard>
  );
};