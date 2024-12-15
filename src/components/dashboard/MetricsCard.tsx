import React from 'react';
import { Phone, MousePointer, TrendingUp, Clock, Calendar, Target, TrendingDown } from 'lucide-react';
import { CircularProgress } from './CircularProgress';
import { KPIGrid } from './KPIGrid';

interface MetricsCardProps {
  title: string;
  chartData: {
    primary: number;
    secondary: number;
  };
  kpis: {
    label: string;
    value: string | number;
  }[];
}

const getMetricIcon = (title: string) => {
  switch (title) {
    case 'Calls':
      return <Phone className="h-5 w-5 text-blue-500" />;
    case 'Actions':
      return <MousePointer className="h-5 w-5 text-green-500" />;
    case 'Analysis':
      return <TrendingUp className="h-5 w-5 text-purple-500" />;
    default:
      return null;
  }
};

const getKPIIcon = (label: string) => {
  switch (label) {
    case 'Minutes Used':
      return <Clock className="h-4 w-4 text-gray-400" />;
    case 'Appointments':
      return <Calendar className="h-4 w-4 text-gray-400" />;
    case 'Goal Rate':
      return <Target className="h-4 w-4 text-gray-400" />;
    case 'Drop-Off':
      return <TrendingDown className="h-4 w-4 text-gray-400" />;
    default:
      return null;
  }
};

const MetricsCard: React.FC<MetricsCardProps> = ({ title, chartData, kpis }) => {
  const total = chartData.primary + chartData.secondary;
  const primaryPercentage = (chartData.primary / total) * 100;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        {getMetricIcon(title)}
        <h3 className="text-lg font-semibold text-gray-900 ml-2">{title}</h3>
      </div>
      <div className="flex items-center justify-between mb-6">
        <CircularProgress percentage={primaryPercentage} />
        <KPIGrid kpis={kpis.map(kpi => ({
          ...kpi,
          icon: getKPIIcon(kpi.label)
        }))} />
      </div>
    </div>
  );
};

export default MetricsCard;