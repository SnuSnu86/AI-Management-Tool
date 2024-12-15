import React from 'react';

interface PieChartProps {
  data: Array<{ label: string; value: number }>;
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = 35; // Reduced from 40
  const viewBoxSize = 100;
  const centerPoint = viewBoxSize / 2;
  const colors = ['#4F46E5', '#F59E0B', '#EC4899', '#10B981'];

  const createArcPath = (startAngle: number, endAngle: number): string => {
    const start = {
      x: centerPoint + radius * Math.cos((startAngle * Math.PI) / 180),
      y: centerPoint + radius * Math.sin((startAngle * Math.PI) / 180)
    };
    const end = {
      x: centerPoint + radius * Math.cos((endAngle * Math.PI) / 180),
      y: centerPoint + radius * Math.sin((endAngle * Math.PI) / 180)
    };
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M ${centerPoint} ${centerPoint}
      L ${start.x} ${start.y}
      A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}
      Z
    `;
  };

  let currentAngle = -90; // Start from top

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full max-w-[180px] max-h-[180px] mx-auto">
        <svg 
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="w-full h-full"
        >
          <g transform={`translate(0, 0)`}>
            {data.map((item, index) => {
              const angle = (item.value / total) * 360;
              const path = createArcPath(currentAngle, currentAngle + angle);
              const segment = (
                <path
                  key={item.label}
                  d={path}
                  fill={colors[index % colors.length]}
                  className="transition-all duration-300 hover:opacity-80"
                />
              );
              currentAngle += angle;
              return segment;
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};