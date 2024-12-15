import React from 'react';

interface BarChartProps {
  data: Array<{ label: string; value: number }>;
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = 100 / (data.length * 2);

  return (
    <div className="w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * 80;
          const x = index * (barWidth * 2) + barWidth / 2;
          
          return (
            <rect
              key={item.label}
              x={x}
              y={100 - height}
              width={barWidth}
              height={height}
              fill="#4F46E5"
              rx="2"
            />
          );
        })}
      </svg>
    </div>
  );
};