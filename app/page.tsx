"use client";

import { useState } from "react";
import { PRODUCTS, INVESTMENTS } from "@/lib/data";
import { analyzeInvestment, calculateRiskReward } from "@/lib/calculations";
import ProductSelector from "./components/ProductSelector";
import { CapitalGrowthChart, RiskRewardChart } from "./components/Charts";
import ComparisonTable from "./components/ComparisonTable";
import Recommendation from "./components/Recommendation";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [analysis, setAnalysis] = useState<ReturnType<typeof analyzeInvestment> | null>(null);

  const handleProductSelect = (product: typeof PRODUCTS[0]) => {
    setSelectedProduct(product);
    const result = analyzeInvestment(product, INVESTMENTS, product.estimatedPrice);
    setAnalysis(result);
  };

  const riskRewardData = selectedProduct && analysis ? calculateRiskReward(INVESTMENTS, selectedProduct.estimatedPrice) : [];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">💎 Investment Opportunity Cost Analyzer</h1>
          <p className="text-blue-100">
            Compare the true cost of luxury purchases against investment alternatives
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
              <h2 className="text-xl font-bold mb-4">🛍️ Select a Product</h2>
              <ProductSelector onSelect={handleProductSelect} />

              {selectedProduct && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-600 mb-2">Selected:</p>
                  <p className="font-bold text-lg text-blue-900">{selectedProduct.name}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    €{selectedProduct.estimatedPrice.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Annual Appreciation: {(selectedProduct.annualAppreciation * 100).toFixed(1)}%
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Analysis */}
          <div className="lg:col-span-2 space-y-8">
            {selectedProduct && analysis ? (
              <>
                {/* Capital Growth Chart */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">📈 Capital Growth Over Time</h2>
                  <CapitalGrowthChart data={analysis.yearlyData} productName={selectedProduct.name} />
                  <p className="text-xs text-gray-600 mt-2">
                    Shows how €{selectedProduct.estimatedPrice.toLocaleString()} would grow if invested in various assets over 10 years.
                  </p>
                </div>

                {/* Risk-Reward Chart */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4">⚖️ Risk vs Reward Profile</h2>
                  <RiskRewardChart data={riskRewardData} />
                  <p className="text-xs text-gray-600 mt-2">
                    Higher risk investments (right) offer higher potential returns (top), but with more volatility.
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <ComparisonTable
                    data={analysis.yearlyData}
                    productName={selectedProduct.name}
                    productValue={selectedProduct.estimatedPrice}
                  />
                </div>

                {/* Recommendation */}
                <Recommendation
                  product={selectedProduct}
                  analysis={analysis}
                  allInvestments={INVESTMENTS}
                />
              </>
            ) : (
              <div className="bg-white p-12 rounded-lg shadow-lg text-center">
                <p className="text-gray-500 text-lg">
                  👈 Select a product from the left to start your analysis
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-gray-300 py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            💡 This tool is for educational purposes only. Past performance does not guarantee future results.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Investment data based on historical averages (CAGR). Volatility and scenarios are estimated.
          </p>
        </div>
      </div>
    </main>
  );
}
