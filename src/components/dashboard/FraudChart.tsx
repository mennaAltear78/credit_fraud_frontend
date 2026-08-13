import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import Card from '../common/Card';

interface FraudChartProps {
  safeCount: number;
  fraudCount: number;
}

export const FraudChart: React.FC<FraudChartProps> = ({
  safeCount,
  fraudCount,
}) => {
  const total = safeCount + fraudCount;

  const fraudRate =
    total > 0
      ? ((fraudCount / total) * 100).toFixed(1)
      : '0.0';

  const safeRate =
    total > 0
      ? ((safeCount / total) * 100).toFixed(1)
      : '0.0';

  const data = [
    {
      name: 'Safe Transactions',
      value: safeCount,
      color: '#10b981',
    },
    {
      name: 'Fraud Detected',
      value: fraudCount,
      color: '#f43f5e',
    },
  ];

  return (
    <Card
      className="h-[320px] flex flex-col justify-between"
      glow="none"
    >
      {/* Header */}
      <div>
        <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
          Classification Share
        </h4>

        <p className="text-xs text-gray-500 mt-0.5">
          Proportion of legitimate vs. fraudulent transactions analyzed
        </p>
      </div>

      {/* Chart */}
      <div className="relative flex-1 flex items-center justify-center">

        {/* Center */}
        <div className="absolute z-10 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-gray-150">
            {fraudRate}%
          </span>

          <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">
            Fraud Rate
          </span>
        </div>

        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="#111827"
                  strokeWidth={1}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-around text-xs mt-2">

        {/* Safe */}
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: '#10b981',
            }}
          />

          <span className="text-gray-400 font-medium">
            Safe:{' '}

            <span className="text-gray-200 font-bold">
              {safeCount.toLocaleString()}
            </span>

            <span className="text-gray-500 ml-1">
              ({safeRate}%)
            </span>
          </span>
        </div>

        {/* Fraud */}
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: '#f43f5e',
            }}
          />

          <span className="text-gray-400 font-medium">
            Fraud:{' '}

            <span className="text-gray-200 font-bold">
              {fraudCount.toLocaleString()}
            </span>

            <span className="text-gray-500 ml-1">
              ({fraudRate}%)
            </span>
          </span>
        </div>

      </div>
    </Card>
  );
};

export default FraudChart;