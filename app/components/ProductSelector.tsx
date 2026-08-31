"use client";

import { PRODUCTS } from "@/lib/data";
import { useState } from "react";

interface ProductSelectorProps {
  onSelect: (product: typeof PRODUCTS[0]) => void;
}

export default function ProductSelector({ onSelect }: ProductSelectorProps) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<typeof PRODUCTS[0] | null>(null);

  const filtered = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

  const handleSelect = (product: typeof PRODUCTS[0]) => {
    setSelected(product);
    onSelect(product);
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search for a Luxury Product
        </label>
        <input
          type="text"
          placeholder="e.g., Rolex, iPhone, Hermès..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {search && filtered.length > 0 && (
        <div className="space-y-2 mb-6">
          <p className="text-sm font-medium text-gray-700">Search Results:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {filtered.map((product) => (
              <button
                key={product.name}
                onClick={() => handleSelect(product)}
                className={`p-3 text-left rounded-lg border-2 transition ${
                  selected?.name === product.name
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="font-semibold text-sm">{product.name}</div>
                <div className="text-xs text-gray-600">
                  €{product.estimatedPrice.toLocaleString()} • {product.category}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {!search && (
        <div>
          <p className="text-sm font-medium text-gray-700 mb-4">
            Browse by Category:
          </p>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {PRODUCTS.filter((p) => p.category === category).map(
                    (product) => (
                      <button
                        key={product.name}
                        onClick={() => handleSelect(product)}
                        className={`p-3 text-left rounded-lg border-2 transition ${
                          selected?.name === product.name
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-semibold text-sm">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          €{product.estimatedPrice.toLocaleString()}
                        </div>
                      </button>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
