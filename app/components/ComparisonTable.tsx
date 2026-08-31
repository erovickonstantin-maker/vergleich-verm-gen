"use client";

import { INVESTMENTS } from "@/lib/data";
import { YearlyData } from "@/lib/calculations";

interface ComparisonTableProps {
  data: YearlyData[];
  productName: string;
  productValue: number;
}

export default function ComparisonTable({
  data,
  productName,
  productValue,
}: ComparisonTableProps) {
  const year1 = data[1];
  const year5 = data[5];
  const year10 = data[10];

  const getInvestmentName = (symbol: string) => {
    return INVESTMENTS.find((i) => i.symbol === symbol)?.name || symbol;
  };

  const formatCurrency = (value: number) => {
    return `€${Math.round(value).toLocaleString()}`;
  };

  const getGainLoss = (value: number, initial: number) => {
    const gain = value - initial;
    const percent = ((gain / initial) * 100).toFixed(1);
    return {
      gain: formatCurrency(gain),
      percent: `${gain >= 0 ? "+" : ""}${percent}%`,
      color: gain >= 0 ? "text-green-600" : "text-red-600",
    };
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4">📊 Investment Comparison</h3>

        {/* 1 Year */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">After 1 Year</h4>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border border-gray-300">Asset</th>
                <th className="text-right p-2 border border-gray-300">Value</th>
                <th className="text-right p-2 border border-gray-300">Gain/Loss</th>
                <th className="text-right p-2 border border-gray-300">Return</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-2 border border-gray-300 font-semibold">
                  {productName}
                </td>
                <td className="text-right p-2 border border-gray-300">
                  {formatCurrency(year1.productValue)}
                </td>
                <td className={`text-right p-2 border border-gray-300 ${getGainLoss(year1.productValue, productValue).color}`}>
                  {getGainLoss(year1.productValue, productValue).gain}
                </td>
                <td className={`text-right p-2 border border-gray-300 font-semibold ${getGainLoss(year1.productValue, productValue).color}`}>
                  {getGainLoss(year1.productValue, productValue).percent}
                </td>
              </tr>
              {INVESTMENTS.map((inv) => {
                const gainLoss = getGainLoss(year1[inv.symbol], productValue);
                return (
                  <tr key={inv.symbol} className="hover:bg-gray-50">
                    <td className="p-2 border border-gray-300 font-semibold">
                      {inv.emoji} {inv.name}
                    </td>
                    <td className="text-right p-2 border border-gray-300">
                      {formatCurrency(year1[inv.symbol])}
                    </td>
                    <td className={`text-right p-2 border border-gray-300 ${gainLoss.color}`}>
                      {gainLoss.gain}
                    </td>
                    <td className={`text-right p-2 border border-gray-300 font-semibold ${gainLoss.color}`}>
                      {gainLoss.percent}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 5 Years */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">After 5 Years</h4>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border border-gray-300">Asset</th>
                <th className="text-right p-2 border border-gray-300">Value</th>
                <th className="text-right p-2 border border-gray-300">Gain/Loss</th>
                <th className="text-right p-2 border border-gray-300">Return</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-2 border border-gray-300 font-semibold">
                  {productName}
                </td>
                <td className="text-right p-2 border border-gray-300">
                  {formatCurrency(year5.productValue)}
                </td>
                <td className={`text-right p-2 border border-gray-300 ${getGainLoss(year5.productValue, productValue).color}`}>
                  {getGainLoss(year5.productValue, productValue).gain}
                </td>
                <td className={`text-right p-2 border border-gray-300 font-semibold ${getGainLoss(year5.productValue, productValue).color}`}>
                  {getGainLoss(year5.productValue, productValue).percent}
                </td>
              </tr>
              {INVESTMENTS.map((inv) => {
                const gainLoss = getGainLoss(year5[inv.symbol], productValue);
                return (
                  <tr key={inv.symbol} className="hover:bg-gray-50">
                    <td className="p-2 border border-gray-300 font-semibold">
                      {inv.emoji} {inv.name}
                    </td>
                    <td className="text-right p-2 border border-gray-300">
                      {formatCurrency(year5[inv.symbol])}
                    </td>
                    <td className={`text-right p-2 border border-gray-300 ${gainLoss.color}`}>
                      {gainLoss.gain}
                    </td>
                    <td className={`text-right p-2 border border-gray-300 font-semibold ${gainLoss.color}`}>
                      {gainLoss.percent}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 10 Years */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">After 10 Years</h4>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border border-gray-300">Asset</th>
                <th className="text-right p-2 border border-gray-300">Value</th>
                <th className="text-right p-2 border border-gray-300">Gain/Loss</th>
                <th className="text-right p-2 border border-gray-300">Return</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-2 border border-gray-300 font-semibold">
                  {productName}
                </td>
                <td className="text-right p-2 border border-gray-300">
                  {formatCurrency(year10.productValue)}
                </td>
                <td className={`text-right p-2 border border-gray-300 ${getGainLoss(year10.productValue, productValue).color}`}>
                  {getGainLoss(year10.productValue, productValue).gain}
                </td>
                <td className={`text-right p-2 border border-gray-300 font-semibold ${getGainLoss(year10.productValue, productValue).color}`}>
                  {getGainLoss(year10.productValue, productValue).percent}
                </td>
              </tr>
              {INVESTMENTS.map((inv) => {
                const gainLoss = getGainLoss(year10[inv.symbol], productValue);
                return (
                  <tr key={inv.symbol} className="hover:bg-gray-50">
                    <td className="p-2 border border-gray-300 font-semibold">
                      {inv.emoji} {inv.name}
                    </td>
                    <td className="text-right p-2 border border-gray-300">
                      {formatCurrency(year10[inv.symbol])}
                    </td>
                    <td className={`text-right p-2 border border-gray-300 ${gainLoss.color}`}>
                      {gainLoss.gain}
                    </td>
                    <td className={`text-right p-2 border border-gray-300 font-semibold ${gainLoss.color}`}>
                      {gainLoss.percent}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
