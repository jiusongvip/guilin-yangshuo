"use client";

import { useState } from "react";

const COSTS = {
  budget: { hotel: 12, meals: 8, transport: 5, activities: 10, label: "Budget", desc: "Hostels, street food, buses" },
  mid: { hotel: 45, meals: 20, transport: 15, activities: 30, label: "Mid-Range", desc: "Comfortable hotels, local restaurants, taxis" },
  luxury: { hotel: 175, meals: 60, transport: 60, activities: 90, label: "Luxury", desc: "Resorts, fine dining, private driver" },
};

const ACTIVITIES = [
  { id: "li-river", name: "Li River cruise", cost: 50, tier: "mid" },
  { id: "bamboo", name: "Yulong bamboo raft", cost: 25, tier: "mid" },
  { id: "longji", name: "Longji Rice Terraces day trip", cost: 40, tier: "mid" },
  { id: "cooking", name: "Cooking class", cost: 22, tier: "mid" },
  { id: "climbing", name: "Rock climbing (half day, guided)", cost: 55, tier: "luxury" },
  { id: "show", name: "Impression Sanjie Liu show", cost: 28, tier: "mid" },
];

export default function CostCalculator() {
  const [days, setDays] = useState(3);
  const [tier, setTier] = useState<keyof typeof COSTS>("mid");
  const [selected, setSelected] = useState<string[]>(["li-river", "bamboo"]);

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]);
  };

  const base = COSTS[tier];
  const dailyBase = base.hotel + base.meals + base.transport + base.activities;
  const activityCost = selected.reduce((sum, id) => {
    return sum + (ACTIVITIES.find((a) => a.id === id)?.cost ?? 0);
  }, 0);
  const total = dailyBase * days + activityCost;
  const perDay = Math.round(total / days);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-stone-700 block mb-2">Number of days</label>
          <div className="flex gap-2">
            {[2, 3, 4, 5].map((d) => (
              <button key={d} onClick={() => setDays(d)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                  days === d ? "border-accent bg-accent/10 text-accent" : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                }`}>{d}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-stone-700 block mb-2">Travel style</label>
          <div className="space-y-2">
            {(Object.entries(COSTS) as [string, typeof COSTS[keyof typeof COSTS]][]).map(([key, val]) => (
              <button key={key} onClick={() => setTier(key as keyof typeof COSTS)}
                className={`w-full rounded-lg border px-4 py-3 text-left transition-all ${
                  tier === key ? "border-accent bg-accent/10 ring-1 ring-accent/30" : "border-stone-200 bg-white hover:border-stone-300"
                }`}>
                <span className="text-sm font-semibold text-stone-900">{val.label}</span>
                <span className="ml-2 text-xs text-stone-400">{val.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-stone-700 mb-3">Activities (select what you'll do):</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {ACTIVITIES.map((act) => (
            <button key={act.id} onClick={() => toggle(act.id)}
              className={`flex items-center gap-3 rounded-lg border p-3 text-left text-sm transition-all ${
                selected.includes(act.id) ? "border-accent bg-accent/5" : "border-stone-200 bg-white hover:border-stone-300"
              }`}>
              <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-bold ${
                selected.includes(act.id) ? "border-accent bg-accent text-white" : "border-stone-300"
              }`}>{selected.includes(act.id) ? "✓" : ""}</span>
              <span className="text-stone-700">{act.name}</span>
              <span className="ml-auto text-xs font-medium text-stone-400">~${act.cost}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border-2 border-accent/20 bg-accent/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent/70 mb-1">Estimated Total</p>
        <p className="text-4xl font-bold text-accent">${total}</p>
        <p className="mt-1 text-sm text-stone-500">${perDay}/day per person · {days} days · {COSTS[tier].label} style</p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-white p-3">
            <span className="text-stone-400">Hotel</span>
            <p className="font-semibold text-stone-700">${base.hotel}/night</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <span className="text-stone-400">Meals</span>
            <p className="font-semibold text-stone-700">${base.meals}/day</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <span className="text-stone-400">Transport</span>
            <p className="font-semibold text-stone-700">${base.transport}/day</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <span className="text-stone-400">Activities</span>
            <p className="font-semibold text-stone-700">${activityCost} total</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-stone-400">Prices in USD at 2026 rates. Excludes flights, visa fee ($140), and VPN subscription ($5-15). See our <a href="/guilin-yangshuo-trip-cost" class="text-accent underline">full cost guide</a> for detailed breakdowns.</p>
      </div>
    </div>
  );
}
