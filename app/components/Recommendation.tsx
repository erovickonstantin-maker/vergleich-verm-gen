"use client";

import { Product, Investment } from "@/lib/data";
import { ComparisonData } from "@/lib/calculations";

interface RecommendationProps {
  product: Product;
  analysis: ComparisonData;
  allInvestments: Investment[];
}

export default function Recommendation({
  product,
  analysis,
  allInvestments,
}: RecommendationProps) {
  const bestInvestment = allInvestments.find(
    (i) => i.symbol === analysis.summary.bestAtYear
  );

  if (!bestInvestment) return null;

  const year10 = analysis.yearlyData[10];
  const productValue10 = year10.productValue;
  const bestValue10 = year10[bestInvestment.symbol];
  const difference = bestValue10 - productValue10;

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        💼 Investment Recommendation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Product Info */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-gray-700 mb-2">
            Option 1: Buy {product.name}
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-600">Initial Cost:</span>
              <span className="font-semibold float-right">
                €{product.estimatedPrice.toLocaleString()}
              </span>
            </p>
            <p>
              <span className="text-gray-600">Annual Appreciation:</span>
              <span className="font-semibold float-right">
                {(product.annualAppreciation * 100).toFixed(1)}%
              </span>
            </p>
            <p>
              <span className="text-gray-600">Value after 10 years:</span>
              <span className="font-semibold float-right text-blue-600">
                €{Math.round(productValue10).toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        {/* Investment Info */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-gray-700 mb-2">
            Option 2: Invest in {bestInvestment.emoji} {bestInvestment.name}
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-600">Initial Investment:</span>
              <span className="font-semibold float-right">
                €{product.estimatedPrice.toLocaleString()}
              </span>
            </p>
            <p>
              <span className="text-gray-600">Average Annual Return (CAGR):</span>
              <span className="font-semibold float-right">
                {(bestInvestment.cagr * 100).toFixed(1)}%
              </span>
            </p>
            <p>
              <span className="text-gray-600">Value after 10 years:</span>
              <span className="font-semibold float-right text-green-600">
                €{Math.round(bestValue10).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 border-l-4 border-blue-500">
        <p className="text-lg font-semibold text-gray-800 mb-2">
          {analysis.summary.recommendation}
        </p>
        <div className="text-sm text-gray-600">
          <p>
            <strong>Difference after 10 years:</strong> €
            {Math.round(difference).toLocaleString()}
          </p>
          <p className="mt-2">
            <strong>Your opportunity cost:</strong> By choosing to buy the{" "}
            {product.name} instead of investing in{" "}
            {bestInvestment.name.toLowerCase()}, you are{" "}
            <span className="font-semibold text-red-600">
              foregoing €{Math.round(difference).toLocaleString()}
            </span>{" "}
            in potential gains.
          </p>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-gray-700 mb-3">📊 Risk Assessment</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Risk Level:</p>
            <p className="text-sm font-semibold">
              {bestInvestment.riskLevel === "low" && "🟢 Low"}
              {bestInvestment.riskLevel === "medium" && "🟡 Medium"}
              {bestInvestment.riskLevel === "high" && "🔴 High"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Volatility:</p>
            <p className="text-sm font-semibold">
              {(bestInvestment.volatility * 100).toFixed(0)}%
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Bull Scenario (10 yrs):</p>
            <p className="text-sm font-semibold text-green-600">
              +{(bestInvestment.bullScenario * 100).toFixed(0)}%
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Bear Scenario (10 yrs):</p>
            <p className="text-sm font-semibold text-red-600">
              {(bestInvestment.bearScenario * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
