---
keyword: guilin yangshuo
created: 2026-08-06
type: content travel guide
status: planning
---

# guilin yangshuo - Jian Zhan Kuang Jia (Site Building Framework)

---

## Phase 1: Keyword Competition Analysis

### 1.1 Deep Search Intent Analysis

#### Who searches "guilin yangshuo"?

This is an **English-language search**, meaning the searcher is almost certainly not a Chinese domestic tourist. The searcher is most likely:

- A traveler from the US, UK, Europe, Australia, or Southeast Asia
- Planning their 1st or 2nd trip to China
- Has seen photos of karst mountains / Li River somewhere (Instagram, Pinterest, travel magazine, friend)
- Currently comparing destinations: "Should I include Guilin/Yangshuo in my China trip?"

#### The real question behind the search

When someone types "guilin yangshuo" into Google, the unspoken question is:

> "I've heard about these two places. Are they the same thing or separate? How do they fit together? Is it worth going there, and if so, what does a trip actually look like?"

They are essentially asking: **"Tell me the story of these two places — and help me decide if they belong in my China trip."**

#### The 5-layer user need

| Layer | The real question | What they actually need |
|-------|-------------------|------------------------|
| **Clarification** | Are Guilin and Yangshuo the same place? Two cities? | A clear mental model of the geography and relationship |
| **Validation** | Is it as beautiful as the photos? Is it worth the detour? | Visual proof + honest assessment (not marketing fluff) |
| **Logistics** | How do I physically get there and move between them? | Transportation options, timing, costs — step by step |
| **Design** | What does a trip here look like day by day? | Complete itinerary templates they can copy |
| **Confidence** | Can I pull this off as a foreigner with no Chinese? | China-specific friction: visa, payments, language, internet |

#### The China-specific anxiety layer

This is what separates "guilin yangshuo" from, say, "paris travel guide":

| Pain point | Anxiety level | Site opportunity |
|------------|---------------|------------------|
| Visa (do I need one? how to apply?) | High | Dedicated China visa guide page |
| Mobile payments (Alipay/WeChat setup) | High | Step-by-step foreigner setup guide |
| Internet (VPN needed? which one works?) | Medium-High | Recommended VPNs that work in China |
| Language barrier (no English signs?) | Medium | Survival Chinese phrases, translation app guide |
| Train/flight booking (12306 without Chinese?) | Medium | How to book transport as a foreigner |
| Food safety / dietary restrictions | Medium | How to eat safely, vegetarian options |
| Getting lost / safety | Low-Medium | Navigation app guide (Baidu Maps vs Google Maps) |

#### User journey: from search to action

```
See photo on Instagram
    ↓
Search "guilin yangshuo" → finds our site
    ↓
[10 seconds] Scan hero image + H1 → "Yes, this is the place from the photo"
    ↓
[30 seconds] Read Guilin vs Yangshuo comparison → "OK, I get it now — two places, 1.5h apart"
    ↓
[2 minutes] Scan things to do + photos → "Wow, I want to do the bamboo raft and the bike ride"
    ↓
[5 minutes] Read a sample itinerary → "3 days is doable, I can fit this into my trip"
    ↓
[Decision] "I'm going. Now how do I actually make this happen?"
    ↓
[Next searches] "guilin yangshuo itinerary 3 days", "li river cruise tickets",
                "yangshuo hotels", "china visa for US citizens"
```

**Intent type**: Informational (80%) → Commercial (20%). The commercial intent only kicks in after the user has decided to go. The site's primary job is to drive that decision.

#### What the searcher does NOT want

- A tour company sales pitch disguised as a guide
- A list of 50 attractions with no context or priority
- Outdated pricing from 2018
- Generic advice like "Guilin is beautiful, you should visit" (they already suspect that)
- AI-generated filler paragraphs that say nothing

### 1.2 Google SERP Top 10 Analysis

| Rank | Site | Type | Est. DA | Page Style | Weakness |
|------|------|------|---------|------------|----------|
| 1 | TripAdvisor | OTA aggregator | 90+ | Attraction lists + reviews | Shallow content, no systematic guide, heavy ads |
| 2 | China Highlights | Tour agency | 60+ | Keyword-stuffed long article | Obvious tour sales pitch, template feel |
| 3 | Travel China Guide | Tour agency | 55+ | Encyclopedia-style article | Outdated design, poor visual appeal |
| 4 | Wikipedia | Encyclopedia | 95+ | Objective info | Not useful for trip planning, no practical tips |
| 5 | Lonely Planet | Travel media | 80+ | Compact guide | Informative but lacks local groundedness |
| 6-10 | Various travel blogs | Individual/small team | 30-50 | Mixed travelogue + guide | Short, fragmented, rarely updated |

**Key finding**: None of the top 10 is a truly independent, focused, in-depth travel guide site. Big sites are list-heavy, tour sites are sales-driven, and personal blogs lack professionalism.

### 1.3 Competition Verdict

| Dimension | Assessment |
|-----------|-----------|
| Competition level | Moderate-High (DA 80+ sites present, but smaller sites still rank) |
| Content depth | Low - existing content is generally shallow and outdated |
| User experience | Low - most sites have dated designs, poor mobile experience |
| **Beatable?** | **Yes - big gaps in content depth and UX to exploit** |

This is NOT a blue ocean, but it is a **mature market with weak content quality and outdated UX**. A better site can break into page one.

---

## Phase 2: Site Structure

### 2.1 Site Type: Content/Information Site (Deep Travel Guide)

Rationale: Search intent is information-gathering + trip decision-making, not a single tool need. Tour agency and OTA sites have poor info quality, creating an opening for an independent content site. Can continuously produce long-tail content to build topical authority.

### 2.2 Site Architecture

**Design principle**: No list pages. No blog index. No category archives. The homepage is the only hub — everything else is a standalone deep-dive detail page.

```
Homepage (the only hub)
  ├── anchor: "Must-Do Experiences" → links to individual attraction pages
  ├── anchor: "China Travel Essentials" → links to individual friction pages
  ├── anchor: "Trip Planning" → links to itinerary / transport / hotels pages
  └── anchor: "Quick Guides" → links to overview pages
```

| Page | URL | Target Keyword | Priority |
|------|-----|---------------|----------|
| Homepage | `/` | guilin yangshuo | P0 |
| Li River Cruise | `/li-river-cruise/` | li river cruise | P0 |
| Guilin to Yangshuo | `/guilin-to-yangshuo/` | guilin to yangshuo transport | P0 |
| 3-Day Itinerary | `/guilin-yangshuo-itinerary-3-day/` | guilin yangshuo itinerary 3 days | P0 |
| 2-Day Express Itinerary | `/guilin-yangshuo-itinerary-2-day/` | guilin yangshuo itinerary 2 days | P2 |
| 5-Day Deep Dive Itinerary | `/guilin-yangshuo-itinerary-5-day/` | guilin yangshuo itinerary 5 days | P3 |
| Yangshuo Travel Guide | `/yangshuo-travel-guide/` | yangshuo travel guide | P1 |
| Guilin Travel Guide | `/guilin-travel-guide/` | guilin travel guide | P1 |
| Where to Stay in Yangshuo | `/where-to-stay-in-yangshuo/` | where to stay in yangshuo | P1 |
| Best Time to Visit | `/best-time-to-visit-guilin/` | best time to visit guilin | P1 |
| China Visa Guide | `/china-visa/` | china visa for foreigners | P1 |
| Moon Hill | `/moon-hill/` | moon hill yangshuo | P2 |
| Yulong River Bamboo Raft | `/yulong-river-bamboo-raft/` | yulong river bamboo raft | P2 |
| Ten Mile Gallery | `/ten-mile-gallery/` | ten mile gallery yangshuo | P2 |
| Xingping Ancient Town | `/xingping-ancient-town/` | xingping ancient town | P2 |
| Longji Rice Terraces | `/longji-rice-terraces/` | longji rice terraces | P2 |
| Guilin Food | `/guilin-food/` | guilin food / guilin rice noodles | P2 |
| Guilin Trip Cost | `/guilin-yangshuo-trip-cost/` | how much does a guilin trip cost | P1 |
| Is Guilin Worth It | `/is-guilin-worth-visiting/` | is guilin worth visiting | P2 |
| Photo Spots Guide | `/guilin-yangshuo-photo-spots/` | guilin photo spots / yangshuo photography | P2 |
| China Internet & eSIM | `/china-internet-guide/` | china esim for tourists / china internet guide | P2 |
| Mistakes to Avoid | `/guilin-travel-mistakes/` | guilin travel mistakes / guilin travel tips | P2 |
| Multi-City Trip Planning | `/guilin-in-your-china-trip/` | how to fit guilin into china trip itinerary | P2 |
| Yangshuo Rock Climbing | `/yangshuo-rock-climbing/` | yangshuo rock climbing | P3 |
| Where to Stay in Guilin | `/where-to-stay-in-guilin/` | where to stay in guilin | P3 |
| Alipay & WeChat Setup | `/alipay-wechat-setup/` | alipay for foreigners | P2 |
| VPN & Internet in China | `/china-internet-vpn/` | best vpn for china | P3 |
| Survival Chinese | `/survival-chinese-phrases/` | basic chinese for travelers | P3 |
| How to Book Trains | `/how-to-book-china-trains/` | book china train tickets foreigner | P3 |
| About | `/about/` | — | P1 |

### 2.3 Adjacent Content & Tools

The searcher is a foreigner planning a China trip. Addressing their non-destination pain points creates stickiness and builds topical authority beyond just "travel guide":

| Category | Page / Tool Idea | Why |
|----------|-----------------|-----|
| China Trip Builder | Interactive tool: "Build your China itinerary" | Users don't just visit Guilin — they piece together a multi-city trip. Help them plan Beijing→Xi'an→Guilin→Shanghai. |
| Cost Calculator | "How much does a Guilin trip cost?" | Foreigners have no frame of reference for China prices. A transparent cost breakdown builds trust. |
| Packing Checklist | "China packing list for every season" | Practical, shareable, Pinterest gold. |
| China Trip vs Japan/Thailand | Comparison landing pages | Many travelers are choosing between Asian destinations. Help them decide. |
| Guilin + [City] combos | Guilin + Zhangjiajie, Guilin + Hong Kong, Guilin + Chengdu | Capture users searching multi-city itineraries. |

### 2.4 Interactive Tools (Phase 2 differentiators)

These are not pages — they're embedded tools that create competitive moats. Each lives on its own page but is an interactive experience, not just text.

| Tool | Page | Description |
|------|------|-------------|
| Trip Builder | `/china-trip-builder/` | Select cities + days + interests → auto-generate multi-city itinerary with Guilin/Yangshuo slotted in. Captures users searching "china trip plan" / "china itinerary builder". |
| Cost Calculator | `/guilin-trip-cost-calculator/` | Select days + hotel tier + activities → real-time cost estimate in USD. Transparent pricing builds immediate trust. |
| Packing List Generator | `/china-packing-list/` | Select season + activities → downloadable checklist. Pinterest-ready shareable asset. |

These are Phase 2 because they need frontend work beyond static content, but they're the pages that get backlinks and social shares.

### 2.5 Horizontal Expansion (Post-Launch)

Every new page is a standalone detail page. No list pages, no blog feed. Add pages one at a time:

- **Attraction pages**: Elephant Trunk Hill, Reed Flute Cave, West Street, Xianggong Mountain viewpoint
- **Activity pages**: yangshuo bike tour routes, yangshuo cooking class, guilin photography tour
- **Audience pages**: guilin with kids, yangshuo for solo travelers, guilin honeymoon
- **Comparison pages**: yangshuo vs zhangjiajie, guilin vs kunming, li river vs yangtze, china vs japan trip
- **China friction pages**: how to use didi in china, best translation app for china, china toilet guide
- **Question pages**: is yangshuo safe, how many days in guilin, what to pack for china

---

## Phase 3: Core Page SEO Plans

### 3.1 Homepage - `/` (The Only Hub)

The homepage must be **self-contained**. A first-time visitor should be able to make a decision without clicking anything. Detail pages exist for those who want to go deeper. Think of it as a magazine feature, not a table of contents.

```
URL:                 /
Title:              Guilin & Yangshuo Travel Guide 2026 - Best Things to Do, Itineraries & Tips
Meta Description:   Plan your perfect trip to Guilin and Yangshuo. Expert guide with
                     a ready-to-use 3-day itinerary, Li River cruise tips, where to stay,
                     visa advice, and honest local insights. No tour sales, no fluff.
H1:                 Guilin & Yangshuo Travel Guide
Schema:             TravelGuide + FAQ + Organization + BreadcrumbList

Content Modules (all inline, no "click to see more" lists):

  1. Hero Section
     Full-width Li River image + H1 + one-line value prop
     "Everything you need to plan your trip — honest, independent, up to date."

  2. "Guilin vs Yangshuo — What's the Difference?" (inline comparison table)
     A quick 4-row table right below the hero: location, vibe, what it's known for, where to stay.
     Answers the #1 question immediately. Links to /yangshuo-travel-guide/ and /guilin-travel-guide/.

  3. "How to Plan Your Trip" (3-step cards, inline)
     Step 1 — Pick your dates → links to /best-time-to-visit-guilin/
     Step 2 — Copy this 3-day itinerary → inline summary with link to /guilin-yangshuo-itinerary-3-day/
     Step 3 — Sort out China logistics → links to /china-visa/

  4. "Must-Do Experiences" (6-8 attraction cards in a grid)
     Each card: photo, name, 2-sentence description, link to detail page.
     Li River Cruise → /li-river-cruise/
     Yulong River Bamboo Raft → /yulong-river-bamboo-raft/
     Moon Hill → /moon-hill/
     Ten Mile Gallery Cycling → /ten-mile-gallery/
     Xingping Ancient Town → /xingping-ancient-town/
     Longji Rice Terraces → /longji-rice-terraces/
     Guilin Rice Noodles → /guilin-food/
     Yangshuo Rock Climbing → /yangshuo-rock-climbing/

  5. "Where to Stay" (inline section, 2-column: Yangshuo vs Guilin)
     Brief area breakdown for each, with links to /where-to-stay-in-yangshuo/
     and /where-to-stay-in-guilin/.

  6. "How to Get There & Get Around"
     Inline: Guilin airport info, train from major cities, Guilin→Yangshuo transport.
     Links to /guilin-to-yangshuo/ and /how-to-book-china-trains/.

  7. "China Travel Essentials" (4-card row)
     Visa → /china-visa/
     Mobile Payments → /alipay-wechat-setup/
     Internet & VPN → /china-internet-vpn/
     Chinese Phrases → /survival-chinese-phrases/

  8. FAQ (FAQ Schema, 6-8 questions, answers inline — no accordion)
     - Are Guilin and Yangshuo the same place?
     - How many days do I need?
     - What's the best way to get from Guilin to Yangshuo?
     - When is the best time to visit?
     - Do I need a visa to visit China?
     - Is Yangshuo safe for solo travelers?

  9. Footer: All detail page links + About + Contact
```

### 3.2 3-Day Itinerary Detail Page - `/guilin-yangshuo-itinerary-3-day/`

A single, definitive itinerary page. No tabs, no "choose your plan" — one recommended plan with a note that shorter/longer variants exist as separate pages.

```
URL:                 /guilin-yangshuo-itinerary-3-day/
Title:              Guilin & Yangshuo 3-Day Itinerary (2026) — Day-by-Day Plan with Tips
Meta Description:   The ultimate 3-day Guilin Yangshuo itinerary: morning-to-evening plan
                     for every day, transport times, where to eat, where to stay, and
                     insider timing tips to beat the crowds.
H1:                 Guilin Yangshuo 3-Day Itinerary
Schema:             HowTo + BreadcrumbList

Content Modules:
  1. "Is 3 Days Enough?" — short judgment paragraph
  2. Quick overview card: Day 1 (Guilin arrival) / Day 2 (Li River + Yangshuo) / Day 3 (Yangshuo countryside)
  3. Day-by-day deep dive (each day: 500+ words, morning→afternoon→evening, transport times, meal recs)
  4. Map: 3-day route visualized on an interactive Leaflet map
  5. "Need a different pace?" callout box:
     Short on time? → 2-day express page (future)
     Want more? → 5-day deep dive page (future)
  6. Practical tips (ticket booking links, best departure times, rainy day backup)
```

### 3.3 Li River Cruise - `/li-river-cruise/`

```
URL:                 /li-river-cruise/
Title:              Li River Cruise Guide 2026: Routes, Tickets, Bamboo Raft vs Boat
Meta Description:   Everything about the Li River cruise: bamboo raft vs motor boat,
                     best sections (Yangdi-Xingping), ticket prices 2026, and how to book
                     without getting ripped off.
H1:                 Li River Cruise - The Complete Guide
Schema:             Article + FAQ

Content Modules:
  1. Quick comparison: Bamboo raft vs motor boat vs hiking vs cycling (summary table)
  2. Detailed breakdown of each option
  3. Best section deep-dive: Yangdi to Xingping (the classic stretch)
  4. Ticket prices & booking methods (2026 updated)
  5. Scam avoidance guide (unlicensed drivers, inflated prices, fake tickets)
  6. FAQ
```
### 3.4 Trip Cost Breakdown - `/guilin-yangshuo-trip-cost/`

```
URL:                 /guilin-yangshuo-trip-cost/
Title:              Guilin & Yangshuo Trip Cost 2026 - Budget Breakdown (Budget, Mid-Range, Luxury)
Meta Description:   Exactly how much a Guilin Yangshuo trip costs in 2026. Daily budget
                     breakdown by tier: backpacker, mid-range, luxury. Real prices in USD
                     for hotels, food, transport, activities.
H1:                 How Much Does a Guilin Yangshuo Trip Cost?
Schema:             Article + FAQ + Table

Content Modules:
  1. One-paragraph summary: "3 days, mid-range, expect $X. Here's exactly where it goes."
  2. Three-tier comparison table (Budget / Mid-Range / Luxury):
     Each row: Hotel/night, Meals/day, Transport, Activities, Total/day, Total 3 days
  3. "Where Your Money Goes" pie breakdown
  4. Hidden costs: visa fee, VPN subscription, eSIM, tips (or no tips in China)
  5. Cash vs card: how much cash to bring, Alipay/WeChat reality
  6. FAQ: Is China cheap? / Can I use credit cards? / How much cash should I bring?
```

### 3.5 Is Guilin Worth Visiting? - `/is-guilin-worth-visiting/`

```
URL:                 /is-guilin-worth-visiting/
Title:              Is Guilin Worth Visiting in 2026? Honest Pros, Cons & Who Should Skip It
Meta Description:   Honest assessment: is Guilin worth visiting? Real pros and cons,
                     who it's perfect for, who should skip it, and how it compares to
                     Zhangjiajie, Yunnan and other China destinations.
H1:                 Is Guilin Worth Visiting? An Honest Guide
Schema:             Article + FAQ

Content Modules:
  1. Direct answer: "For most travelers, yes - here's why. But here's when to skip it."
  2. Pros (4-5): scenery, outdoor activities, accessibility, food, value for money
  3. Cons (3-4): weather unpredictability, tourist crowds, not a "city" destination
  4. "Who should visit" / "Who should skip" (two columns)
  5. Comparison mini-table: Guilin vs Zhangjiajie vs Yunnan vs Jiuzhaigou
  6. Reader verdict section: based on what you value, here's our recommendation
```

### 3.6 Photo Spots Guide - `/guilin-yangshuo-photo-spots/`

```
URL:                 /guilin-yangshuo-photo-spots/
Title:              Guilin & Yangshuo Photo Spots - 15 Best Locations with Map (2026)
Meta Description:   The 15 best photo spots in Guilin and Yangshuo with exact GPS
                     coordinates, best time of day, recommended focal length, and
                     sample photos.
H1:                 Best Photo Spots in Guilin & Yangshuo
Schema:             Article + ImageObject (per spot)

Content Modules:
  1. Interactive map with all 15 spots pinned
  2. Per spot: photo + GPS + best time (golden hour / sunrise / after rain) + focal length + how to get there
  3. "The Classic Shot": the exact Xingping viewpoint everyone wants
  4. Seasonal photo guide: what each spot looks like across seasons
  5. Gear tips: what to bring, drone rules in China
```

### 3.7 Mistakes to Avoid - `/guilin-travel-mistakes/`

```
URL:                 /guilin-travel-mistakes/
Title:              15 Mistakes to Avoid in Guilin & Yangshuo (2026) - Don't Learn the Hard Way
Meta Description:   Avoid these 15 common Guilin Yangshuo mistakes: overpaying for
                     river cruises, picking the wrong season, getting scammed by fake
                     tickets. Honest advice from locals.
H1:                 Guilin Yangshuo Mistakes to Avoid
Schema:             Article + FAQ

Content Modules:
  1. Mistake #1: Booking the "full" Li River cruise instead of Yangdi-Xingping section
  2. Mistake #2: Not bringing cash (rural spots still cash-only)
  3. Mistake #3: Visiting during Golden Week (Oct 1-7)
  4. Mistake #4: Trusting touts at the bus station
  5. ... up to 15, each with: what goes wrong / how to avoid it / what to do instead
  6. Pre-trip checklist: 5 things to double-check before you go
```

### 3.8 Multi-City Integration - `/guilin-in-your-china-trip/`

```
URL:                 /guilin-in-your-china-trip/
Title:              How to Fit Guilin & Yangshuo Into Your China Trip (2026)
Meta Description:   Already planning Beijing, Shanghai, or Xi'an? Here's exactly how
                     to slot Guilin Yangshuo into your China itinerary with flight times,
                     train connections, and sample multi-city routes.
H1:                 How to Fit Guilin Into Your China Trip
Schema:             Article + HowTo

Content Modules:
  1. "The China Circuit" visual: Beijing -> Xi'an -> Guilin -> Shanghai on a mini-map
  2. Connection table: flight + train times from Beijing, Shanghai, Guangzhou, HK, Chengdu
  3. 3 sample multi-city routes:
     A: Beijing (3d) -> Xi'an (2d) -> Guilin (3d) -> Shanghai (2d) = 10 days
     B: Hong Kong (2d) -> Guilin (3d) -> Chengdu (2d) = 7 days
     C: Shanghai (2d) -> Guilin (3d) -> Yunnan (4d) = 10 days
  4. "How many days?" honest answer per total trip length
  5. Booking strategy: when to book flights vs trains for best price
```

---

## Phase 4: Execution Plan

### 4.1 Tech Stack

| Component | Recommendation | Rationale |
|-----------|---------------|-----------|
| Framework | Next.js (SSG) | Pure static output, SEO-friendly, built-in image optimization |
| Styling | Tailwind CSS | Rapid design, zero-cost responsive |
| Images | Cloudinary or next/image | Travel site = many images, needs CDN + adaptive compression |
| Maps | Leaflet + OpenStreetMap | Free, offline-capable |
| CMS | Headless (Decap CMS or Contentful) | Easy for ongoing content additions |
| Deployment | Cloudflare Pages | Free, global CDN, decent China access speed |
| Domain | guilin-yangshuo.com | Keyword in domain, .com authority |
| Analytics | Plausible / Umami | Privacy-friendly, lightweight |

### 4.2 Domain Suggestions

| Domain | Score | Notes |
|--------|-------|-------|
| guilin-yangshuo.com | 5/5 | Most precise, register first |
| yangshuo-guide.com | 4/5 | Yangshuo-heavy, good if above unavailable |
| visitguilin.net | 3/5 | .net carries less authority |
| guilin-travel.com | 4/5 | Good alternative |

### 4.3 Development Timeline

| Phase | Tasks | Duration |
|-------|-------|----------|
| Week 1 | Domain + Framework + Homepage (all modules) | 7 days |
| Week 2 | Li River Cruise + 3-Day Itinerary + Guilin to Yangshuo detail pages | 7 days |
| Week 3 | Hotel guides + Best Time to Visit + China Visa detail pages | 7 days |
| Week 4 | Remaining P2 pages + Schema + Deploy | 7 days |
| Post-launch | Add one new detail page per week (attractions, friction topics, niche guides) | Ongoing |

### 4.4 Content Strategy

1. **P0-P1 detail pages**: Hand-written, 2000-4000 words each, original or licensed images. These are the pages that win trust and rank.
2. **P2-P3 detail pages**: AI-assisted + human review, 1000-2000 words each. Added one at a time post-launch.
3. **Homepage**: Refreshed every 3-6 months to keep the "2026" signal current. Adjust featured attractions seasonally.
4. **Image sources**:
   - Unsplash+ / Shutterstock licensed
   - Partner with local photographers
   - AI-generated + human annotation (supplementary)

### 4.5 Link Building Strategy

| Tactic | Description |
|--------|------------|
| Guest Posts | Write for travel blogs, regional sites in exchange for links |
| HARO / Qwoted | Answer journalist queries as China travel expert for media links |
| Resource pages | Reach out to tourism boards, university study-abroad programs, travel forums |
| Social Media | Pinterest (huge travel traffic), Instagram, Reddit r/travel |
| Directories | Submit to curated travel directories |

---

## Phase 5: Checklist

- [x] Keyword confirmed: guilin yangshuo
- [x] Deep search intent analysis (who searches, real questions, China anxiety layer)
- [x] Competitor SERP analysis (10 competitors broken down)
- [x] Competition verdict & differentiation strategy
- [x] Site architecture: Homepage hub + 21 detail pages (no list pages, no blog)
- [x] Homepage SEO plan (self-contained curated hub)
- [x] Key detail page SEO plans (Itinerary + Li River Cruise)
- [x] China friction pages identified (visa, payments, VPN, language, trains)
- [x] Tech stack & domain recommendation
- [x] Development timeline (4 weeks + continuous)
- [ ] Google Trends validation (recommended)
- [ ] allintitle competition check (recommended)
- [ ] Domain registration (guilin-yangshuo.com)
- [ ] Site development
- [ ] Launch & submit to Search Console
- [ ] Add one new detail page per week post-launch

---

## Appendix: How to Beat the Competition

### Common Weaknesses of Current Competitors

1. **Outdated content**: Most guides are pre-2020, missing post-pandemic info (new ticket prices, regulations)
2. **Lack of visual navigation**: No one uses interactive maps or itinerary visualizations
3. **Lack of groundedness**: Tour sites are too sales-heavy, blog sites too personal - no objective third-party feel
4. **Poor mobile experience**: Big sites are usable but ad-heavy, small sites have no mobile adaptation
5. **Missing Schema**: Almost no one correctly uses TravelGuide and ItemList structured data
6. **China friction ignored**: No travel guide addresses the real anxieties of a foreigner in China — visa, VPN, mobile payments, language. They all pretend the user already knows how to navigate China.

### Our Differentiation Strategy

1. **Address the whole trip, not just the destination** — We're not a "Guilin Yangshuo" guide; we're a "foreigner's complete China trip" guide that happens to specialize in Guilin Yangshuo. Visa, Alipay, VPN — we cover the scary stuff the other sites ignore.
2. **"2026" year marker in every Title** — Signals freshness to both Google and users
3. **Interactive maps + itinerary visualizer** — Every attraction on a map, itineraries visualized day by day, China trip builder tool
4. **Independent third-party tone** — No tour selling, no sponsored fluff, build trust as "the most reliable and honest China travel guide for English speakers"
5. **Full Schema coverage** — TravelGuide, ItemList, FAQ, HowTo, BreadcrumbList all deployed
6. **Speed advantage** — SSG all-static, Lighthouse scores all green

### The Core Insight

"guilin yangshuo" is a **China trip keyword in disguise**. The searcher isn't just looking for destination info — they're looking for permission and confidence to include this destination in their China trip. Win their trust on the destination, then keep them on the site by solving every other China-travel friction point. That's how you turn a one-page visit into a bookmarked resource.





























