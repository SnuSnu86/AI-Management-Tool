import React from 'react';
import { ClipboardList } from 'lucide-react';
import { MetricCard } from './common/MetricCard';
import { PieChart } from './charts/PieChart';
import { ActionMetricsData } from '../../types/analytics';

interface ActionMetricsProps {
  data: ActionMetricsData;
  isLoading: boolean;
}

export const ActionMetrics: React.FC<ActionMetricsProps> = ({ data, isLoading }) => {
  const pieData = [
    { label: 'Appointments', value: data.appointments },
    { label: 'Live Transfers', value: data.liveTransfers },
    { label: 'SMS Sent', value: data.smsSent },
    { label: 'Custom Actions', value: data.customActions }
  ];

  return (
    <MetricCard
      title="Action Metrics"
      icon={<ClipboardList className="h-5 w-5" />}
      isLoading={isLoading}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Total Actions</p>
            <p className="text-2xl font-semibold">{data.totalActions}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Success Rate</p>
            <p className="text-2xl font-semibold">{data.successRate}%</p>
          </div>
        </div>

        <div className="h-48">
          <PieChart data={pieData} />
        </div>

        <div className="space-y-2">
          {pieData.map((item) => (
            <div key={item.label} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </MetricCard>
  );
};