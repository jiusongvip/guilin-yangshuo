"use client";

import { useState } from "react";

const SEASONS = {
  spring: { label: "Spring (Mar-May)", temp: "15-25°C", note: "Light jacket for evenings, rain gear" },
  summer: { label: "Summer (Jun-Aug)", temp: "25-35°C", note: "Hot and humid, afternoon storms" },
  autumn: { label: "Autumn (Sep-Nov)", temp: "15-28°C", note: "Best weather, cool evenings" },
  winter: { label: "Winter (Dec-Feb)", temp: "5-12°C", note: "Cold, misty, indoor heating not guaranteed" },
};

const ACTIVITIES = [
  { id: "hiking", name: "Hiking", items: ["Sturdy walking shoes", "Daypack", "Water bottle", "Sun hat"] },
  { id: "cycling", name: "Cycling", items: ["Comfortable shorts/leggings", "Sunglasses", "Sunscreen SPF 50+", "Small backpack"] },
  { id: "rafting", name: "Bamboo rafting", items: ["Sandals or water shoes", "Dry bag for phone", "Quick-dry shorts", "Sunscreen"] },
  { id: "photography", name: "Photography", items: ["Tripod", "Polarizing filter", "Rain cover for camera", "Extra memory cards"] },
  { id: "climbing", name: "Rock climbing", items: ["Climbing shoes (or rent)", "Chalk bag", "Tape for fingers", "Approach shoes"] },
];

const ESSENTIALS = [
  "Passport (valid 6+ months, 2+ blank pages)",
  "Printed visa (if not using TWOV)",
  "Travel insurance documents",
  "Cash (at least 500 RMB in small bills)",
  "Power bank (20,000 mAh max for flights)",
  "Universal power adapter (China uses Type A/C/I)",
  "VPN installed and tested on all devices",
  "Offline maps downloaded",
  "Translation app with Chinese downloaded offline",
  "Photocopies of passport and visa",
  "Basic first aid: plasters, painkillers, antihistamine",
  "Hand sanitizer and wet wipes",
];

const EXTRAS: Record<string, string[]> = {
  spring: ["Light rain jacket", "Lightweight scarf", "Layers for evenings"],
  summer: ["Mosquito repellent", "Lightweight rain poncho", "Extra t-shirts (you'll sweat through them)"],
  autumn: ["Light jacket for evenings", "Comfortable long pants"],
  winter: ["Warm coat", "Thermal base layers", "Warm hat and gloves", "Thick socks"],
};

export default function PackingList() {
  const [season, setSeason] = useState<string>("spring");
  const [selected, setSelected] = useState<string[]>(["hiking", "cycling"]);

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]);
  };

  const seasonInfo = SEASONS[season as keyof typeof SEASONS];
  const activityItems = selected.flatMap((id) => ACTIVITIES.find((a) => a.id === id)?.items ?? []);
  const seasonExtras = EXTRAS[season] ?? [];
  const allItems = [...new Set([...activityItems, ...seasonExtras])];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold text-stone-700 mb-3">When are you going?</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {Object.entries(SEASONS).map(([key, val]) => (
            <button key={key} onClick={() => setSeason(key)}
              className={`rounded-lg border px-4 py-3 text-left transition-all ${
                season === key ? "border-accent bg-accent/10 ring-1 ring-accent/30" : "border-stone-200 bg-white hover:border-stone-300"
              }`}>
              <span className="text-sm font-semibold text-stone-900">{val.label}</span>
              <span className="block mt-1 text-xs text-stone-400">{val.temp} · {val.note}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-stone-700 mb-3">What will you do?</p>
        <div className="flex flex-wrap gap-2">
          {ACTIVITIES.map((act) => (
            <button key={act.id} onClick={() => toggle(act.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                selected.includes(act.id) ? "border-accent bg-accent/10 text-accent" : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
              }`}>{act.name}</button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">Your Packing List</p>
        <p className="text-sm font-medium text-stone-700 mb-3">Essentials (always pack these):</p>
        <ul className="space-y-1.5 text-sm text-stone-600">
          {ESSENTIALS.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-stone-300 text-accent accent-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {allItems.length > 0 && (
          <>
            <p className="text-sm font-medium text-stone-700 mt-6 mb-3">Activity & season-specific:</p>
            <ul className="space-y-1.5 text-sm text-stone-600">
              {allItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-stone-300 text-accent accent-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
