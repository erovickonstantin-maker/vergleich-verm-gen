"use client";

import { Product, Investment } from "@/lib/data";
import { ComparisonData } from "@/lib/calculations";

interface RecommendationProps {
  product: Product;
  analysis: ComparisonData;
  allInvestments: Investment[];
  customValue: number;
}

export default function Recommendation({
  product,
  analysis,
  allInvestments,
  customValue,
}: RecommendationProps) {
  const bestInvestment = allInvestments.find(
    (i) => i.symbol === analysis.summary.bestAtYear
  );

  if (!bestInvestment) return null;

  const year10 = analysis.yearlyData[10];
  const productValue10 = year10.productValue;
  const bestValue10 = year10[bestInvestment.symbol];
  const difference = bestValue10 - productValue10;

  const riskBadge = {
    low: { label: "🟢 Niedrig", color: "text-[var(--success)]" },
    medium: { label: "🟡 Mittel", color: "text-yellow-400" },
    high: { label: "🔴 Hoch", color: "text-[var(--danger)]" },
  }[bestInvestment.riskLevel];

  return (
    <div className="w-full bg-gradient-to-br from-[var(--accent-soft)] to-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--accent)]/30 shadow-xl animate-fade-in-up">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
        💼 Investment-Empfehlung
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Product Info */}
        <div className="bg-[var(--background)] p-4 rounded-xl border border-[var(--border)]">
          <h3 className="font-semibold text-[var(--muted)] mb-3 text-sm">
            Option 1: {product.name} kaufen
          </h3>
          <div className="space-y-2.5 text-sm">
            <p className="flex justify-between">
              <span className="text-[var(--muted)]">Startwert:</span>
              <span className="font-semibold">
                €{customValue.toLocaleString()}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-[var(--muted)]">Jährl. Wertänderung:</span>
              <span className="font-semibold">
                {(product.annualAppreciation * 100).toFixed(1)}%
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-[var(--muted)]">Wert nach 10 Jahren:</span>
              <span className="font-semibold text-[var(--accent)]">
                €{Math.round(productValue10).toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        {/* Investment Info */}
        <div className="bg-[var(--background)] p-4 rounded-xl border border-[var(--border)]">
          <h3 className="font-semibold text-[var(--muted)] mb-3 text-sm">
            Option 2: {bestInvestment.emoji} {bestInvestment.name}
          </h3>
          <div className="space-y-2.5 text-sm">
            <p className="flex justify-between">
              <span className="text-[var(--muted)]">Anlagebetrag:</span>
              <span className="font-semibold">
                €{customValue.toLocaleString()}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-[var(--muted)]">Ø jährl. Rendite (CAGR):</span>
              <span className="font-semibold">
                {(bestInvestment.cagr * 100).toFixed(1)}%
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-[var(--muted)]">Wert nach 10 Jahren:</span>
              <span className="font-semibold text-[var(--success)]">
                €{Math.round(bestValue10).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-[var(--background)] p-5 sm:p-6 rounded-xl border-l-4 border-[var(--accent)] mb-6">
        <p className="text-base sm:text-lg font-semibold mb-3">
          {analysis.summary.recommendation}
        </p>
        <div className="text-sm text-[var(--muted)] space-y-1.5">
          <p>
            <strong className="text-[var(--foreground)]">
              Differenz nach 10 Jahren:
            </strong>{" "}
            €{Math.round(difference).toLocaleString()}
          </p>
          <p>
            <strong className="text-[var(--foreground)]">
              Deine Opportunitätskosten:
            </strong>{" "}
            Durch den Kauf von {product.name} statt einer Investition in{" "}
            {bestInvestment.name}, verzichtest du auf{" "}
            <span className="font-semibold text-[var(--danger)]">
              €{Math.round(difference).toLocaleString()}
            </span>{" "}
            potenziellen Gewinn.
          </p>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-[var(--background)] p-5 sm:p-6 rounded-xl border border-[var(--border)]">
        <h3 className="font-semibold mb-4 text-sm">📊 Risikobewertung</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-[var(--muted)] mb-1">Risikolevel:</p>
            <p className={`text-sm font-semibold ${riskBadge.color}`}>
              {riskBadge.label}
            </p>
          </div>
          <div>
            <p className="text-xs text-[var(--muted)] mb-1">Volatilität:</p>
            <p className="text-sm font-semibold">
              {(bestInvestment.volatility * 100).toFixed(0)}%
            </p>
          </div>
          <div>
            <p className="text-xs text-[var(--muted)] mb-1">
              Bull-Szenario (10 J.):
            </p>
            <p className="text-sm font-semibold text-[var(--success)]">
              +{(bestInvestment.bullScenario * 100).toFixed(0)}%
            </p>
          </div>
          <div>
            <p className="text-xs text-[var(--muted)] mb-1">
              Bear-Szenario (10 J.):
            </p>
            <p className="text-sm font-semibold text-[var(--danger)]">
              {(bestInvestment.bearScenario * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
