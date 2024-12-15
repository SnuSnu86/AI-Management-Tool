import React from 'react';
import TimeRangeSelector from './TimeRangeSelector';
import MetricsCard from './MetricsCard';
import { ChangeHistoryCard } from './changes/ChangeHistoryCard';
import { useChangeHistory } from '../../hooks/useChangeHistory';
import { useLanguage } from '../../context/LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();
  const { changes, isLoading, refresh } = useChangeHistory(5);

  const callMetrics = {
    chartData: { primary: 75, secondary: 25 },
    kpis: [
      { label: t('Minutes Used'), value: '1,234' },
      { label: t('avg Duration'), value: '3:45' }
    ]
  };

  const actionMetrics = {
    chartData: { primary: 60, secondary: 40 },
    kpis: [
      { label: t('total Actions'), value: '856' },
      { label: t('appointments'), value: '123' }
    ]
  };

  const analysisMetrics = {
    chartData: { primary: 85, secondary: 15 },
    kpis: [
      { label: t('Goal Rate'), value: '85%' },
      { label: t('Drop-Off'), value: '12%' }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">{t('nav.dashboard')}</h1>
        <TimeRangeSelector />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <MetricsCard title={t('Calls')} {...callMetrics} />
        <MetricsCard title={t('Actions')} {...actionMetrics} />
        <MetricsCard title={t('Analysis')} {...analysisMetrics} />
      </div>

      <div className="mt-6">
        <ChangeHistoryCard 
          changes={changes} 
          isLoading={isLoading} 
          onRefresh={refresh}
        />
      </div>
    </div>
  );
};

export default Dashboard;