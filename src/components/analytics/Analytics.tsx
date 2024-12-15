import React, { useState } from 'react';
import { DateRangePicker } from './DateRangePicker';
import { CallStatistics } from './CallStatistics';
import { ActionMetrics } from './ActionMetrics';
import { PerformanceAnalysis } from './PerformanceAnalysis';
import { ExportButton } from './ExportButton';
import { useAnalytics } from './hooks/useAnalytics';

const Analytics = () => {
  const {
    data,
    dateRange,
    setDateRange,
    isLoading,
    exportData
  } = useAnalytics();

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <div className="flex items-center space-x-4">
          <DateRangePicker value={dateRange} onChange={setDateRange} />
          <ExportButton onExport={exportData} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CallStatistics data={data.callStats} isLoading={isLoading} />
        <ActionMetrics data={data.actionMetrics} isLoading={isLoading} />
        <PerformanceAnalysis data={data.performanceMetrics} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Analytics;