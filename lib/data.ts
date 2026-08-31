export interface Product {
  name: string;
  category: string;
  estimatedPrice: number;
  annualAppreciation: number;
  description: string;
}

export interface Investment {
  name: string;
  symbol: string;
  description: string;
  cagr: number;
  volatility: number;
  bullScenario: number;
  bearScenario: number;
  riskLevel: "low" | "medium" | "high";
  emoji: string;
}

export const PRODUCTS: Product[] = [
  {
    name: "Rolex Submariner",
    category: "Watches",
    estimatedPrice: 9000,
    annualAppreciation: 0.05,
    description: "Luxury sports watch",
  },
  {
    name: "iPhone 16 Pro Max",
    category: "Electronics",
    estimatedPrice: 1599,
    annualAppreciation: -0.15,
    description: "Latest Apple smartphone",
  },
  {
    name: "Hermès Birkin",
    category: "Fashion",
    estimatedPrice: 8000,
    annualAppreciation: 0.08,
    description: "Iconic luxury handbag",
  },
  {
    name: "Air Jordan 1 Retro",
    category: "Sneakers",
    estimatedPrice: 1200,
    annualAppreciation: 0.12,
    description: "Collectible sneaker",
  },
  {
    name: "Porsche 911 Carrera",
    category: "Cars",
    estimatedPrice: 120000,
    annualAppreciation: -0.08,
    description: "Sports car",
  },
  {
    name: "Vintage Patek Philippe",
    category: "Watches",
    estimatedPrice: 25000,
    annualAppreciation: 0.07,
    description: "Luxury watch collectible",
  },
  {
    name: "PlayStation 5",
    category: "Gaming",
    estimatedPrice: 500,
    annualAppreciation: -0.12,
    description: "Gaming console",
  },
  {
    name: "MacBook Pro M4",
    category: "Electronics",
    estimatedPrice: 3499,
    annualAppreciation: -0.10,
    description: "Professional laptop",
  },
  {
    name: "Louis Vuitton Monogram Bag",
    category: "Fashion",
    estimatedPrice: 2500,
    annualAppreciation: 0.04,
    description: "Designer handbag",
  },
  {
    name: "Omega Speedmaster",
    category: "Watches",
    estimatedPrice: 6000,
    annualAppreciation: 0.04,
    description: "Moon watch replica",
  },
];

export const INVESTMENTS: Investment[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    description: "Cryptocurrency",
    cagr: 0.85,
    volatility: 0.75,
    bullScenario: 1.20,
    bearScenario: -0.40,
    riskLevel: "high",
    emoji: "₿",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    description: "Smart contract blockchain",
    cagr: 0.45,
    volatility: 0.70,
    bullScenario: 1.15,
    bearScenario: -0.50,
    riskLevel: "high",
    emoji: "◆",
  },
  {
    name: "NVIDIA",
    symbol: "NVDA",
    description: "AI chip leader",
    cagr: 0.35,
    volatility: 0.45,
    bullScenario: 0.45,
    bearScenario: -0.25,
    riskLevel: "high",
    emoji: "🖥️",
  },
  {
    name: "Apple",
    symbol: "AAPL",
    description: "Tech giant",
    cagr: 0.28,
    volatility: 0.30,
    bullScenario: 0.35,
    bearScenario: -0.20,
    riskLevel: "medium",
    emoji: "🍎",
  },
  {
    name: "Tesla",
    symbol: "TSLA",
    description: "Electric vehicles",
    cagr: 0.32,
    volatility: 0.55,
    bullScenario: 0.50,
    bearScenario: -0.35,
    riskLevel: "high",
    emoji: "⚡",
  },
  {
    name: "MSCI World",
    symbol: "MSCI",
    description: "Global stock index",
    cagr: 0.09,
    volatility: 0.15,
    bullScenario: 0.15,
    bearScenario: -0.15,
    riskLevel: "medium",
    emoji: "🌍",
  },
  {
    name: "S&P 500",
    symbol: "SPY",
    description: "US stock index",
    cagr: 0.10,
    volatility: 0.18,
    bullScenario: 0.18,
    bearScenario: -0.18,
    riskLevel: "medium",
    emoji: "📈",
  },
  {
    name: "FTSE 100",
    symbol: "FTSE",
    description: "UK stock index",
    cagr: 0.07,
    volatility: 0.16,
    bullScenario: 0.12,
    bearScenario: -0.12,
    riskLevel: "medium",
    emoji: "🇬🇧",
  },
  {
    name: "Savings Account",
    symbol: "SAVE",
    description: "Safe savings (5% p.a.)",
    cagr: 0.05,
    volatility: 0.0,
    bullScenario: 0.05,
    bearScenario: 0.05,
    riskLevel: "low",
    emoji: "💰",
  },
  {
    name: "Real Estate (AT)",
    symbol: "REAL",
    description: "Vienna property (rental yield)",
    cagr: 0.04,
    volatility: 0.08,
    bullScenario: 0.08,
    bearScenario: -0.05,
    riskLevel: "low",
    emoji: "🏠",
  },
];
