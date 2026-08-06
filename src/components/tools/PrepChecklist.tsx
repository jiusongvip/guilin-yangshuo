"use client";

import { useState, useEffect } from "react";

interface Task {
  id: string;
  phase: string;
  label: string;
  detail: string;
  link?: string;
  linkLabel?: string;
}

const TASKS: Task[] = [
  // 4 weeks out
  { id: "visa", phase: "4weeks", label: "Apply for China visa", detail: "Tourist (L) visa for most nationalities. US citizens: $140 for 10-year multi-entry. Processing takes 4-7 business days. Check if you qualify for 144-hour transit without visa (53 countries).", link: "/china-visa/", linkLabel: "Visa guide" },
  { id: "flights", phase: "4weeks", label: "Book flights to Guilin (KWL)", detail: "Direct flights from Beijing (3h), Shanghai (2.5h), Guangzhou (1h), Hong Kong (1.5h). Book 3-4 weeks ahead for best prices. Consider flying into Hong Kong or Shenzhen and taking the high-speed train for cheaper fares.", link: "/guilin-yangshuo-itinerary-3-day/", linkLabel: "Trip planning" },
  { id: "hotels", phase: "4weeks", label: "Book hotels", detail: "1 night in Guilin (near the lakes), 2-3 nights in Yangshuo (countryside guesthouse or West Street). Use Trip.com or Booking.com. Book directly with countryside guesthouses on WeChat for the best rates.", link: "/where-to-stay-in-yangshuo/", linkLabel: "Yangshuo areas" },
  { id: "travel-insurance", phase: "4weeks", label: "Buy travel insurance", detail: "Strongly recommended. $30-60 for a week. Make sure it covers medical evacuation. China's healthcare system is excellent but cash-up-front for foreigners without insurance." },
  { id: "train-tickets", phase: "4weeks", label: "Book high-speed train tickets", detail: "If connecting from other Chinese cities. Tickets open 15 days in advance on 12306.cn. Use Trip.com for an English interface (small service fee). Guangzhou South to Guilin: 2.5h, ~170 RMB.", link: "/how-to-book-china-trains/", linkLabel: "Train booking guide" },
  { id: "vpn", phase: "4weeks", label: "Get a VPN that works in China", detail: "Install and test BEFORE you leave. LetsVPN and Astrill work in 2026. Free VPNs don't work. Set up on all devices. Install a backup option — VPNs get blocked unpredictably.", link: "/china-internet-vpn/", linkLabel: "VPN guide" },

  // 1 week out
  { id: "alipay", phase: "1week", label: "Set up Alipay with foreign card", detail: "Download Alipay app. Link your foreign Visa/Mastercard. Complete identity verification (takes 1-2 days with passport scan). Test with a small transaction. Alipay is essential — most places don't take cash or foreign cards.", link: "/alipay-wechat-setup/", linkLabel: "Setup guide" },
  { id: "esim", phase: "1week", label: "Buy travel eSIM or SIM", detail: "Travel eSIMs route through Hong Kong — no VPN needed for Instagram/WhatsApp. $5-15 for 7-day plans (3HK, Holafly, Airalo). Or get a local SIM at the airport (but you'll need VPN).", link: "/china-internet-guide/", linkLabel: "Internet guide" },
  { id: "offline-maps", phase: "1week", label: "Download offline maps & translation", detail: "Baidu Maps offline pack for Guilin. Google Translate offline Chinese pack. Save screenshots of hotel addresses in Chinese (for taxi drivers). Download photos of dishes you want to order." },
  { id: "cash", phase: "1week", label: "Get Chinese cash (RMB)", detail: "Order 500-1,000 RMB from your bank or exchange at airport. Many rural vendors, bamboo raft operators, and small restaurants are cash-only. ATMs at Bank of China accept foreign cards but may run out of cash on weekends." },
  { id: "pack", phase: "1week", label: "Start packing", detail: "Use our interactive packing list generator to build a customized checklist based on your season and activities. Key items: comfortable walking shoes, rain jacket, sunscreen, toilet paper, power bank, passport photos (for visa extensions).", link: "/china-packing-list/", linkLabel: "Packing list" },
  { id: "mandarin", phase: "1week", label: "Learn 5 survival phrases", detail: "Ni hao (hello), Xie xie (thank you), Zhe ge (this one), Bu yao (I don't want it — most useful phrase), Mai dan (check, please). Download the phrases as audio on your phone.", link: "/survival-chinese-phrases/", linkLabel: "Phrases guide" },
  { id: "li-river", phase: "1week", label: "Book Li River cruise ticket", detail: "Book at least 1 day ahead. Yangdi-to-Jiuma bamboo raft: ~120 RMB. Full cruise: ~360 RMB. Book through your hotel or Trip.com. Don't buy from touts at the pier — they'll upsell you.", link: "/li-river-cruise/", linkLabel: "Cruise guide" },

  // 1 day out
  { id: "docs", phase: "1day", label: "Prepare documents", detail: "Print flight/hotel confirmations. Screenshot Alipay QR code. Save passport scan on your phone. Print visa copy. Write down your hotel address in Chinese characters. Screenshot the VPN connection method in case you need to reinstall." },
  { id: "notify", phase: "1day", label: "Notify bank & carrier", detail: "Call your bank — tell them you're traveling to China. Many cards get auto-blocked on first China transaction. Set travel notice on your mobile carrier or confirm international roaming." },

  // On arrival
  { id: "mobile", phase: "arrival", label: "Activate data & test VPN", detail: "Turn on travel eSIM or insert local SIM. Test VPN immediately — if it doesn't work, try your backup. Download Baidu Maps if you haven't. Test Alipay with a small purchase (buy a bottle of water).", link: "/china-internet-guide/", linkLabel: "Connectivity tips" },
  { id: "airport-transfer", phase: "arrival", label: "Get from airport to hotel", detail: "Guilin airport to city: taxi ~100 RMB, airport bus ~20 RMB. Don't take unlicensed taxis — use the official queue or Didi app. The 30 km drive takes about 45 minutes. Have your hotel address in Chinese ready to show the driver.", link: "/guilin-travel-guide/", linkLabel: "Guilin transport" },
  { id: "hotel-check", phase: "arrival", label: "Check in & confirm bookings", detail: "Hotels in China need to register you with the police (standard procedure). Hotels that say 'foreigner-friendly' have the license for this. Confirm your Li River cruise booking and departure time. Ask hotel to write tomorrow's pier address in Chinese." },
  { id: "first-meal", phase: "arrival", label: "First meal: Guilin rice noodles", detail: "You made it. Walk to any rice noodle shop (they're everywhere). Point at the menu, pay 10-15 RMB, and eat your first bowl of Guilin mifen. You've earned it.", link: "/guilin-food/", linkLabel: "Food guide" },
];

const PHASES = [
  { key: "4weeks", label: "4 Weeks Before", icon: "calendar" },
  { key: "1week", label: "1 Week Before", icon: "checklist" },
  { key: "1day", label: "Day Before", icon: "clock" },
  { key: "arrival", label: "On Arrival", icon: "plane" },
] as const;

export default function PrepChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem("china-prep-checklist");
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("china-prep-checklist", JSON.stringify(checked));
  }, [checked]);

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const totalTasks = TASKS.length;
  const done = TASKS.filter((t) => checked[t.id]).length;
  const pct = Math.round((done / totalTasks) * 100);

  return (
    <div className="space-y-10">
      {/* Progress bar */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-stone-900">Progress</p>
          <p className="text-sm font-medium text-stone-500">{done}/{totalTasks} done</p>
        </div>
        <div className="h-3 w-full rounded-full bg-stone-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <p className="mt-3 text-sm font-medium text-accent">All set — you're ready for China!</p>
        )}
      </div>

      {/* Reset button */}
      <div className="flex justify-end">
        <button
          onClick={() => { setChecked({}); localStorage.removeItem("china-prep-checklist"); }}
          className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-400 transition-colors hover:text-stone-600 hover:border-stone-300"
        >
          Reset all
        </button>
      </div>

      {/* Phases */}
      {PHASES.map((phase) => {
        const phaseTasks = TASKS.filter((t) => t.phase === phase.key);
        const phaseDone = phaseTasks.filter((t) => checked[t.id]).length;
        return (
          <div key={phase.key}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-bold">
                {phaseDone === phaseTasks.length && phaseTasks.length > 0 ? "✓" : phase.phase === "4weeks" ? "30" : phase.phase === "1week" ? "7" : phase.phase === "1day" ? "1" : "✈"}
              </div>
              <p className="text-lg font-semibold text-stone-900">{phase.label}</p>
              <span className="text-xs text-stone-400">{phaseDone}/{phaseTasks.length}</span>
            </div>
            <div className="space-y-3">
              {phaseTasks.map((task) => (
                <div
                  key={task.id}
                  className={`rounded-xl border p-4 transition-all cursor-pointer ${
                    checked[task.id]
                      ? "border-accent/30 bg-accent/5"
                      : "border-stone-200 bg-white hover:border-stone-300"
                  }`}
                  onClick={() => toggle(task.id)}
                >
                  <div className="flex items-start gap-3">
                    <button
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs font-bold transition-colors ${
                        checked[task.id]
                          ? "border-accent bg-accent text-white"
                          : "border-stone-300 text-transparent hover:border-stone-400"
                      }`}
                    >
                      {checked[task.id] ? "✓" : ""}
                    </button>
                    <div>
                      <p className={`text-sm font-semibold ${checked[task.id] ? "text-accent line-through" : "text-stone-900"}`}>
                        {task.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-stone-500">{task.detail}</p>
                      {task.link && task.linkLabel && (
                        <a
                          href={task.link}
                          className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {task.linkLabel} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
