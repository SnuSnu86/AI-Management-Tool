import React from 'react';
import { ReactNode } from 'react';

interface KPI {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

interface KPIGridProps {
  kpis: KPI[];
}

export const KPIGrid: React.FC<KPIGridProps> = ({ kpis }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {kpis.map((kpi, index) => (
        <div key={index} className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-1">
            {kpi.icon}
            <p className="text-sm text-gray-500">{kpi.label}</p>
          </div>
          <p className="text-lg font-semibold text-gray-900">{kpi.value}</p>
        </div>
      ))}
    </div>
  );
};