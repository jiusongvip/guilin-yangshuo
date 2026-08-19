"use client";

import { useState } from "react";

const CITIES = [
  { id: "beijing", name: "Beijing", days: "3", highlights: "Great Wall, Forbidden City, hutongs" },
  { id: "xian", name: "Xi'an", days: "2", highlights: "Terracotta Warriors, city walls, Muslim Quarter" },
  { id: "guilin", name: "Guilin / Yangshuo", days: "3", highlights: "Li River, karst peaks, countryside biking" },
  { id: "shanghai", name: "Shanghai", days: "2", highlights: "The Bund, French Concession, skyline" },
  { id: "chengdu", name: "Chengdu", days: "2", highlights: "Pandas, Sichuan food, teahouses" },
  { id: "hongkong", name: "Hong Kong", days: "2", highlights: "Victoria Peak, dim sum, street markets" },
  { id: "zhangjiajie", name: "Zhangjiajie", days: "3", highlights: "Avatar mountains, glass bridge" },
  { id: "lijiang", name: "Lijiang / Yunnan", days: "4", highlights: "Old town, Tiger Leaping Gorge, Shangri-La" },
];

export default function TripBuilder() {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const totalDays = selected.reduce((sum, id) => {
    const city = CITIES.find((c) => c.id === id);
    return sum + (city ? parseInt(city.days) : 0);
  }, 0);

  const generate = () => {
    if (selected.length === 0) return;
    const route = selected.map((id) => CITIES.find((c) => c.id === id)!);
    const lines = route.map((city, i) => {
      const prev = i > 0 ? route[i - 1].name + " to " : "Arrive in ";
      const daysText = parseInt(city.days) === 1 ? "1 day" : city.days + " days";
      return `Day ${route.slice(0, i).reduce((s, c) => s + parseInt(c.days), 0) + 1}-${route.slice(0, i + 1).reduce((s, c) => s + parseInt(c.days), 0)}: ${prev}${city.name} (${daysText}) — ${city.highlights}`;
    });
    setResult(lines.join("\n"));
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold text-stone-700 mb-3">Pick your cities (in order):</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => toggle(city.id)}
              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                selected.includes(city.id)
                  ? "border-accent bg-accent/5 ring-1 ring-accent/30"
                  : "border-stone-200 bg-white hover:border-stone-300"
              }`}
            >
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs font-bold transition-colors ${
                selected.includes(city.id) ? "border-accent bg-accent text-white" : "border-stone-300 text-stone-400"
              }`}>
                {selected.includes(city.id) ? "✓" : selected.indexOf(city.id) === -1 ? "" : selected.indexOf(city.id) + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-stone-900">{city.name}</p>
                <p className="mt-0.5 text-xs text-stone-500">{city.highlights}</p>
                <p className="mt-1 text-xs font-medium text-stone-400">~{city.days} days</p>
              </div>
            </button>
          ))}
        </div>
        {selected.length > 0 && (
          <p className="mt-4 text-sm text-stone-500">
            <strong>Total: ~{totalDays} days</strong> across {selected.length} {selected.length === 1 ? "city" : "cities"}
          </p>
        )}
      </div>

      <button
        onClick={generate}
        disabled={selected.length === 0}
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Generate Route
      </button>

      {result && (
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">Your Route</p>
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-stone-700 font-sans">{result}</pre>
          <p className="mt-4 text-xs text-stone-400">
            This is a suggested route. Adjust based on your actual flight times and preferences.
            Check our <a href="/guilin-in-your-china-trip/" className="text-accent underline">multi-city guide</a> for detailed connections.
          </p>
        </div>
      )}
    </div>
  );
}
