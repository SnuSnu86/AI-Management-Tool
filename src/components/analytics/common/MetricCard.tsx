import React, { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface MetricCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  isLoading: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  icon,
  children,
  isLoading
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <span className="text-gray-500">{icon}</span>
        <h2 className="text-lg font-semibold text-gray-900 ml-2">{title}</h2>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-48">
          <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
        </div>
      ) : (
        children
      )}
    </div>
  );
};