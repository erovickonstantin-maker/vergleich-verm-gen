"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";
import { Investment, INVESTMENTS } from "@/lib/data";
import { YearlyData, ComparisonData } from "@/lib/calculations";

const COLORS = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
  "#6366f1",
  "#06b6d4",
];

interface CapitalGrowthChartProps {
  data: YearlyData[];
  productName: string;
}

export function CapitalGrowthChart({
  data,
  productName,
}: CapitalGrowthChartProps) {
  const investmentSymbols = INVESTMENTS.map((i) => i.symbol);

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Years", position: "right", offset: -5 }} />
          <YAxis
            label={{
              value: "Value (€)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip
            formatter={(value) =>
              typeof value === "number"
                ? `€${Math.round(value).toLocaleString()}`
                : value
            }
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="productValue"
            stroke={COLORS[0]}
            name={productName}
            isAnimationActive={false}
          />
          {investmentSymbols.map((symbol, idx) => (
            <Line
              key={symbol}
              type="monotone"
              dataKey={symbol}
              stroke={COLORS[(idx + 1) % COLORS.length]}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

interface RiskRewardChartProps {
  data: Array<{
    name: string;
    symbol: string;
    risk: number;
    reward: number;
    value10Year: number;
    emoji: string;
  }>;
}

export function RiskRewardChart({ data }: RiskRewardChartProps) {
  const chartData = data.map((item) => ({
    x: item.risk,
    y: item.reward * 100,
    name: item.name,
    symbol: item.symbol,
    emoji: item.emoji,
  }));

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="x"
            name="Risk (Volatility %)"
            label={{ value: "Risk (Volatility %)", position: "bottom", offset: 5 }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Return (Annual %)"
            label={{
              value: "Return (Annual %)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={({ active, payload }) => {
              if (active && payload && payload[0]) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-3 rounded shadow-lg border border-gray-200">
                    <p className="font-semibold">{data.name}</p>
                    <p className="text-sm">
                      Risk: {data.x.toFixed(1)}%
                    </p>
                    <p className="text-sm">
                      Return: {data.y.toFixed(1)}%
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Scatter
            name="Investments"
            data={chartData}
            fill="#3b82f6"
            shape="circle"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
