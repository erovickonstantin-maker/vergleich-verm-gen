"use client";

import { INVESTMENTS } from "@/lib/data";
import { YearlyData } from "@/lib/calculations";
import { useState } from "react";

interface ComparisonTableProps {
  data: YearlyData[];
  productName: string;
  productValue: number;
}

const PERIODS = [
  { label: "1 Jahr", year: 1 },
  { label: "5 Jahre", year: 5 },
  { label: "10 Jahre", year: 10 },
];

export default function ComparisonTable({
  data,
  productName,
  productValue,
}: ComparisonTableProps) {
  const [activePeriod, setActivePeriod] = useState(10);
  const yearData = data[activePeriod];

  const formatCurrency = (value: number) => {
    return `€${Math.round(value).toLocaleString()}`;
  };

  const getGainLoss = (value: number, initial: number) => {
    const gain = value - initial;
    const percent = ((gain / initial) * 100).toFixed(1);
    return {
      gain: formatCurrency(gain),
      percent: `${gain >= 0 ? "+" : ""}${percent}%`,
      color: gain >= 0 ? "text-[var(--success)]" : "text-[var(--danger)]",
    };
  };

  const rows = [
    {
      key: "product",
      name: productName,
      emoji: "🏷️",
      value: yearData.productValue,
    },
    ...INVESTMENTS.map((inv) => ({
      key: inv.symbol,
      name: inv.name,
      emoji: inv.emoji,
      value: yearData[inv.symbol],
    })),
  ].sort((a, b) => b.value - a.value);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <h3 className="text-lg font-bold">📊 Investmentvergleich</h3>
        <div className="flex gap-1.5 bg-[var(--background)] p-1 rounded-lg border border-[var(--border)]">
          {PERIODS.map((p) => (
            <button
              key={p.year}
              onClick={() => setActivePeriod(p.year)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                activePeriod === p.year
                  ? "bg-[var(--accent)] text-white"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-sm border-collapse min-w-[520px]">
          <thead>
            <tr className="bg-[var(--background)]">
              <th className="text-left p-3 font-semibold text-[var(--muted)] text-xs uppercase tracking-wider">
                Anlage
              </th>
              <th className="text-right p-3 font-semibold text-[var(--muted)] text-xs uppercase tracking-wider">
                Wert
              </th>
              <th className="text-right p-3 font-semibold text-[var(--muted)] text-xs uppercase tracking-wider">
                Gewinn/Verlust
              </th>
              <th className="text-right p-3 font-semibold text-[var(--muted)] text-xs uppercase tracking-wider">
                Rendite
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const gainLoss = getGainLoss(row.value, productValue);
              const isProduct = row.key === "product";
              return (
                <tr
                  key={row.key}
                  className={`border-t border-[var(--border)] hover:bg-[var(--surface-hover)] transition ${
                    isProduct ? "bg-[var(--accent-soft)]" : ""
                  }`}
                >
                  <td className="p-3 font-medium">
                    <span className="mr-1.5">{row.emoji}</span>
                    {row.name}
                    {isProduct && (
                      <span className="ml-2 text-[10px] font-semibold text-[var(--accent)] uppercase tracking-wide">
                        Objekt
                      </span>
                    )}
                  </td>
                  <td className="text-right p-3">{formatCurrency(row.value)}</td>
                  <td className={`text-right p-3 ${gainLoss.color}`}>
                    {gainLoss.gain}
                  </td>
                  <td className={`text-right p-3 font-semibold ${gainLoss.color}`}>
                    {gainLoss.percent}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
