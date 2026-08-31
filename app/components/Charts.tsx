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
import { INVESTMENTS } from "@/lib/data";
import { YearlyData } from "@/lib/calculations";

const COLORS = [
  "#6d8dff",
  "#fb7185",
  "#34d399",
  "#fbbf24",
  "#a78bfa",
  "#f472b6",
  "#22d3ee",
  "#fb923c",
  "#818cf8",
  "#2dd4bf",
  "#facc15",
];

const GRID_COLOR = "#263252";
const AXIS_COLOR = "#8a93b3";

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
          <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
          <XAxis
            dataKey="year"
            stroke={AXIS_COLOR}
            tick={{ fill: AXIS_COLOR, fontSize: 12 }}
            label={{
              value: "Jahre",
              position: "right",
              offset: -5,
              fill: AXIS_COLOR,
            }}
          />
          <YAxis
            stroke={AXIS_COLOR}
            tick={{ fill: AXIS_COLOR, fontSize: 12 }}
            label={{
              value: "Wert (€)",
              angle: -90,
              position: "insideLeft",
              fill: AXIS_COLOR,
            }}
          />
          <Tooltip
            contentStyle={{
              background: "#151c33",
              border: "1px solid #263252",
              borderRadius: 10,
              color: "#e8ecf7",
            }}
            formatter={(value) =>
              typeof value === "number"
                ? `€${Math.round(value).toLocaleString()}`
                : value
            }
          />
          <Legend wrapperStyle={{ fontSize: 12, color: AXIS_COLOR }} />
          <Line
            type="monotone"
            dataKey="productValue"
            stroke={COLORS[0]}
            strokeWidth={3}
            name={productName}
            isAnimationActive={false}
          />
          {investmentSymbols.map((symbol, idx) => (
            <Line
              key={symbol}
              type="monotone"
              dataKey={symbol}
              stroke={COLORS[(idx + 1) % COLORS.length]}
              strokeWidth={1.5}
              dot={false}
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
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
          <XAxis
            type="number"
            dataKey="x"
            name="Risiko (Volatilität %)"
            stroke={AXIS_COLOR}
            tick={{ fill: AXIS_COLOR, fontSize: 12 }}
            label={{
              value: "Risiko (Volatilität %)",
              position: "bottom",
              offset: 5,
              fill: AXIS_COLOR,
            }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Rendite (Jährlich %)"
            stroke={AXIS_COLOR}
            tick={{ fill: AXIS_COLOR, fontSize: 12 }}
            label={{
              value: "Rendite (Jährlich %)",
              angle: -90,
              position: "insideLeft",
              fill: AXIS_COLOR,
            }}
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3", stroke: GRID_COLOR }}
            content={({ active, payload }) => {
              if (active && payload && payload[0]) {
                const d = payload[0].payload;
                return (
                  <div className="bg-[#151c33] p-3 rounded-lg shadow-lg border border-[var(--border)]">
                    <p className="font-semibold">
                      {d.emoji} {d.name}
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      Risiko: {d.x.toFixed(1)}%
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      Rendite: {d.y.toFixed(1)}%
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Scatter name="Investments" data={chartData} fill="#6d8dff" shape="circle" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
