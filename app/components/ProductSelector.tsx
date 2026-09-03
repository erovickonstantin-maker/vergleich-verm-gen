"use client";

import { PRODUCTS } from "@/lib/data";
import { useMemo, useState } from "react";

interface ProductSelectorProps {
  selected: (typeof PRODUCTS)[0] | null;
  onSelect: (product: (typeof PRODUCTS)[0]) => void;
}

const PAGE_SIZE = 60;

export default function ProductSelector({
  selected,
  onSelect,
}: ProductSelectorProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lastFilterKey, setLastFilterKey] = useState(`${search}:${activeCategory}`);

  const categories = useMemo(
    () => Array.from(new Set(PRODUCTS.map((p) => p.category))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);
      const matchesCategory = !activeCategory || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  // Reset pagination whenever the filters change.
  const filterKey = `${search}:${activeCategory}`;
  if (filterKey !== lastFilterKey) {
    setLastFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visible.length;

  return (
    <div className="w-full">
      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
        Suche
      </label>
      <input
        type="text"
        placeholder="z.B. Rolex, iPhone, Hermès..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition"
      />

      <div className="flex flex-wrap gap-2 mt-4 mb-3">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
            activeCategory === null
              ? "bg-[var(--accent)] border-[var(--accent)] text-white"
              : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
          }`}
        >
          Alle
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c === activeCategory ? null : c)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
              activeCategory === c
                ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="text-xs text-[var(--muted)] mb-2">
        {filtered.length.toLocaleString()} Objekte gefunden
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
        {visible.map((product) => {
          const isSelected = selected?.name === product.name;
          return (
            <button
              key={product.name}
              onClick={() => onSelect(product)}
              className={`p-3.5 text-left rounded-xl border transition group ${
                isSelected
                  ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                  : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)]/60 hover:bg-[var(--surface-hover)]"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <span className="text-xl leading-none mt-0.5">
                  {product.emoji}
                </span>
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">
                    {product.name}
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-0.5">
                    €{product.estimatedPrice.toLocaleString()} ·{" "}
                    {product.category}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
        {filtered.length === 0 && (
          <p className="col-span-2 text-sm text-[var(--muted)] py-6 text-center">
            Keine Treffer gefunden.
          </p>
        )}
      </div>

      {hasMore && (
        <button
          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          className="w-full mt-3 py-2.5 rounded-xl border border-[var(--border)] text-sm font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)] transition"
        >
          Mehr laden ({(filtered.length - visible.length).toLocaleString()} weitere)
        </button>
      )}
    </div>
  );
}
