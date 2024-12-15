import React from 'react';
import { TrendingUp } from 'lucide-react';
import { MetricCard } from './common/MetricCard';
import { BarChart } from './charts/BarChart';
import { PerformanceMetrics } from '../../types/analytics';

interface PerformanceAnalysisProps {
  data: PerformanceMetrics;
  isLoading: boolean;
}

export const PerformanceAnalysis: React.FC<PerformanceAnalysisProps> = ({ data, isLoading }) => {
  const barData = [
    { label: 'Script Adherence', value: data.scriptAdherence },
    { label: 'Goal Achievement', value: data.goalAchievement },
    { label: 'Sentiment Score', value: data.sentimentScore }
  ];

  return (
    <MetricCard
      title="Performance Analysis"
      icon={<TrendingUp className="h-5 w-5" />}
      isLoading={isLoading}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Drop-off Rate</p>
            <p className="text-2xl font-semibold">{data.dropOffRate}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Error Rate</p>
            <p className="text-2xl font-semibold">{data.errorRate}%</p>
          </div>
        </div>

        <div className="h-48">
          <BarChart data={barData} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Common Errors</span>
            <span className="text-sm font-medium">{data.commonErrors[0]}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Drop-off Points</span>
            <span className="text-sm font-medium">{data.dropOffPoints[0]}</span>
          </div>
        </div>
      </div>
    </MetricCard>
  );
};