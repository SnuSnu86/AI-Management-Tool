import React from 'react';

interface LineChartProps {
  data: Array<{ time: string; calls: number }>;
  xKey: string;
  yKey: string;
  color: string;
}

export const LineChart: React.FC<LineChartProps> = ({ data, color }) => {
  const maxValue = Math.max(...data.map(d => d.calls));
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 100 - (d.calls / maxValue) * 100
  }));

  const pathData = points
    .map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`))
    .join(' ');

  return (
    <div className="w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={pathData}
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};