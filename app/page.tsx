"use client";

import { useMemo, useState } from "react";
import { PRODUCTS, INVESTMENTS } from "@/lib/data";
import { analyzeInvestment, calculateRiskReward } from "@/lib/calculations";
import ProductSelector from "./components/ProductSelector";
import PriceEditor from "./components/PriceEditor";
import { CapitalGrowthChart, RiskRewardChart } from "./components/Charts";
import ComparisonTable from "./components/ComparisonTable";
import Recommendation from "./components/Recommendation";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof PRODUCTS)[0] | null
  >(null);
  const [customValue, setCustomValue] = useState<number>(0);

  const handleProductSelect = (product: (typeof PRODUCTS)[0]) => {
    setSelectedProduct(product);
    setCustomValue(product.estimatedPrice);
  };

  const analysis = useMemo(() => {
    if (!selectedProduct || !customValue) return null;
    return analyzeInvestment(selectedProduct, INVESTMENTS, customValue);
  }, [selectedProduct, customValue]);

  const riskRewardData = useMemo(() => {
    if (!customValue) return [];
    return calculateRiskReward(INVESTMENTS, customValue);
  }, [customValue]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--background-elevated)]/80 backdrop-blur">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-xs font-semibold text-[var(--accent)] mb-4">
            💎 Opportunitätskosten-Rechner
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-[var(--foreground)] to-[var(--muted)] bg-clip-text text-transparent">
            Kaufen oder investieren?
          </h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl text-sm sm:text-base">
            Vergleiche die wahren Kosten von Luxusgütern mit Investment-Alternativen
            wie Aktien, Krypto, Gold oder Immobilien – mit frei einstellbarem Wert.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Product Selection */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--surface)] border border-[var(--border)] p-5 sm:p-6 rounded-2xl shadow-xl sticky top-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                🛍️ Vermögensgegenstand wählen
              </h2>
              <ProductSelector
                selected={selectedProduct}
                onSelect={handleProductSelect}
              />

              {selectedProduct && (
                <PriceEditor
                  product={selectedProduct}
                  value={customValue}
                  onChange={setCustomValue}
                />
              )}
            </div>
          </div>

          {/* Right Column - Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {selectedProduct && analysis ? (
              <>
                {/* Capital Growth Chart */}
                <div className="bg-[var(--surface)] border border-[var(--border)] p-5 sm:p-6 rounded-2xl shadow-xl animate-fade-in-up">
                  <h2 className="text-lg font-bold mb-4">
                    📈 Wertentwicklung über die Zeit
                  </h2>
                  <CapitalGrowthChart
                    data={analysis.yearlyData}
                    productName={selectedProduct.name}
                  />
                  <p className="text-xs text-[var(--muted)] mt-2">
                    Zeigt, wie sich €{customValue.toLocaleString()} über 10 Jahre
                    in verschiedenen Anlageklassen entwickeln würden.
                  </p>
                </div>

                {/* Risk-Reward Chart */}
                <div className="bg-[var(--surface)] border border-[var(--border)] p-5 sm:p-6 rounded-2xl shadow-xl animate-fade-in-up">
                  <h2 className="text-lg font-bold mb-4">
                    ⚖️ Risiko-Rendite-Profil
                  </h2>
                  <RiskRewardChart data={riskRewardData} />
                  <p className="text-xs text-[var(--muted)] mt-2">
                    Höheres Risiko (rechts) bedeutet oft höheres Renditepotenzial
                    (oben) – aber auch mehr Schwankung.
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-[var(--surface)] border border-[var(--border)] p-5 sm:p-6 rounded-2xl shadow-xl animate-fade-in-up">
                  <ComparisonTable
                    data={analysis.yearlyData}
                    productName={selectedProduct.name}
                    productValue={customValue}
                  />
                </div>

                {/* Recommendation */}
                <Recommendation
                  product={selectedProduct}
                  analysis={analysis}
                  allInvestments={INVESTMENTS}
                  customValue={customValue}
                />
              </>
            ) : (
              <div className="bg-[var(--surface)] border border-[var(--border)] p-16 rounded-2xl shadow-xl text-center">
                <p className="text-4xl mb-4">👈</p>
                <p className="text-[var(--muted)] text-lg">
                  Wähle links einen Vermögensgegenstand, um die Analyse zu starten
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--border)] py-8 px-4 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-[var(--muted)]">
            💡 Dieses Tool dient nur zu Bildungszwecken. Vergangene Wertentwicklungen
            sind kein Indikator für zukünftige Ergebnisse.
          </p>
          <p className="text-xs text-[var(--muted)]/70 mt-2">
            Investmentdaten basieren auf historischen Durchschnittswerten (CAGR).
            Volatilität und Szenarien sind Schätzungen.
          </p>
        </div>
      </div>
    </main>
  );
}
