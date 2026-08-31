"use client";

import { useState } from "react";
import { Product } from "@/lib/data";

interface PriceEditorProps {
  product: Product;
  value: number;
  onChange: (value: number) => void;
}

export default function PriceEditor({
  product,
  value,
  onChange,
}: PriceEditorProps) {
  const [inputValue, setInputValue] = useState(String(value));
  const [lastValue, setLastValue] = useState(value);

  if (value !== lastValue) {
    setLastValue(value);
    setInputValue(String(value));
  }

  const min = Math.max(1, Math.round(product.estimatedPrice * 0.1));
  const max = Math.round(product.estimatedPrice * 5);

  const commit = (raw: string) => {
    const parsed = Math.max(1, Math.round(Number(raw.replace(/[^0-9.]/g, ""))));
    if (!Number.isFinite(parsed) || parsed <= 0) {
      setInputValue(String(value));
      return;
    }
    onChange(parsed);
  };

  return (
    <div className="mt-6 p-4 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent)]/30 animate-fade-in-up">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xl">{product.emoji}</span>
        <p className="font-bold text-[var(--foreground)] truncate">
          {product.name}
        </p>
      </div>
      <p className="text-xs text-[var(--muted)] mb-4">{product.category}</p>

      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
        Eigener Wert
      </label>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[var(--muted)] text-sm">€</span>
        <input
          type="text"
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") commit((e.target as HTMLInputElement).value);
          }}
          className="w-full px-3 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm font-semibold focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition"
        />
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={Math.max(1, Math.round((max - min) / 200))}
        value={Math.min(Math.max(value, min), max)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-[10px] text-[var(--muted)] mt-1.5">
        <span>€{min.toLocaleString()}</span>
        <span>€{max.toLocaleString()}</span>
      </div>

      {value !== product.estimatedPrice && (
        <button
          onClick={() => onChange(product.estimatedPrice)}
          className="mt-3 text-xs font-medium text-[var(--accent)] hover:underline"
        >
          Auf Richtwert zurücksetzen (€{product.estimatedPrice.toLocaleString()})
        </button>
      )}

      <p className="text-[11px] text-[var(--muted)] mt-3">
        Jährliche Wertänderung des Objekts:{" "}
        <span
          className={
            product.annualAppreciation >= 0
              ? "text-[var(--success)] font-semibold"
              : "text-[var(--danger)] font-semibold"
          }
        >
          {(product.annualAppreciation * 100).toFixed(1)}%
        </span>
      </p>
    </div>
  );
}
