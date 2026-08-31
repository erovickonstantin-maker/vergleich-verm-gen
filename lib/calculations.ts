import { Investment, Product } from "./data";

export interface YearlyData {
  year: number;
  productValue: number;
  [key: string]: number;
}

export interface ComparisonData {
  yearlyData: YearlyData[];
  summary: {
    investment: string;
    value1Year: number;
    value5Year: number;
    value10Year: number;
    bestAtYear: string;
    recommendation: string;
  };
}

export const calculateProjection = (
  initialAmount: number,
  annualRate: number,
  years: number
): number => {
  return initialAmount * Math.pow(1 + annualRate, years);
};

export const analyzeInvestment = (
  product: Product,
  investments: Investment[],
  initialAmount: number = product.estimatedPrice
): ComparisonData => {
  const yearlyData: YearlyData[] = [];

  for (let year = 0; year <= 10; year++) {
    const data: YearlyData = {
      year,
      productValue: calculateProjection(
        initialAmount,
        product.annualAppreciation,
        year
      ),
    };

    investments.forEach((inv) => {
      data[inv.symbol] = calculateProjection(initialAmount, inv.cagr, year);
    });

    yearlyData.push(data);
  }

  const value1Year = yearlyData[1];
  const value5Year = yearlyData[5];
  const value10Year = yearlyData[10];

  const bestInvestment = investments.reduce((best, inv) => {
    return value10Year[inv.symbol] > value10Year[best.symbol] ? inv : best;
  });

  const productValue10 = value10Year.productValue;
  const bestValue10 = value10Year[bestInvestment.symbol];
  const difference = bestValue10 - productValue10;
  const percentDifference = ((difference / productValue10) * 100).toFixed(1);

  let recommendation = "";
  if (difference > initialAmount * 0.5) {
    recommendation = `💡 Invest! In 10 years, ${bestInvestment.name} outperforms buying ${product.name} by €${Math.round(difference).toLocaleString()} (${percentDifference}%)`;
  } else if (difference > 0) {
    recommendation = `⚖️ Close Call. Both options are viable, but ${bestInvestment.name} edges ahead by €${Math.round(difference).toLocaleString()}.`;
  } else {
    recommendation = `🎯 Buy the ${product.name}! It outperforms investments in your case.`;
  }

  return {
    yearlyData,
    summary: {
      investment: bestInvestment.name,
      value1Year: value1Year[bestInvestment.symbol],
      value5Year: value5Year[bestInvestment.symbol],
      value10Year: value10Year[bestInvestment.symbol],
      bestAtYear: bestInvestment.symbol,
      recommendation,
    },
  };
};

export const calculateRiskReward = (
  investments: Investment[],
  initialAmount: number
) => {
  return investments.map((inv) => ({
    name: inv.name,
    symbol: inv.symbol,
    risk: inv.volatility * 100,
    reward: inv.cagr * 100,
    value10Year: calculateProjection(initialAmount, inv.cagr, 10),
    emoji: inv.emoji,
  }));
};

export const getRecommendedAllocations = (investments: Investment[]) => {
  const conservative = [
    investments.find((i) => i.symbol === "SAVE"),
    investments.find((i) => i.symbol === "REAL"),
    investments.find((i) => i.symbol === "MSCI"),
  ].filter(Boolean);

  const balanced = [
    investments.find((i) => i.symbol === "SPY"),
    investments.find((i) => i.symbol === "MSCI"),
    investments.find((i) => i.symbol === "AAPL"),
    investments.find((i) => i.symbol === "REAL"),
  ].filter(Boolean);

  const aggressive = [
    investments.find((i) => i.symbol === "NVDA"),
    investments.find((i) => i.symbol === "TSLA"),
    investments.find((i) => i.symbol === "ETH"),
    investments.find((i) => i.symbol === "BTC"),
  ].filter(Boolean);

  return {
    conservative: conservative as Investment[],
    balanced: balanced as Investment[],
    aggressive: aggressive as Investment[],
  };
};
