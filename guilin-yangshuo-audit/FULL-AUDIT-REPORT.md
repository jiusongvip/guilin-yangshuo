 # Full SEO Audit Report — guilin-yangshuo.com
 
 **Date:** 2026-08-06 | **Scope:** 34 pages (30 in sitemap + 5 unlisted) | **Platform:** Astro 5.x, Tailwind CSS 4.x, React 19
 **Business Type:** Travel Guide / Content Publisher
 
 ---
 
 ## Executive Summary
 
 **Overall SEO Health Score: 75 / 100**
 
 This is a well-built travel guide site with strong SEO foundations: proper canonical tags, comprehensive schema markup (WebSite, FAQPage, Article, BreadcrumbList), clean URL structure, and unique meta descriptions on every page. The site uses WebP images throughout with lazy loading, and has open robots.txt with a proper sitemap.
 
 The biggest issue is **5 pages missing from the sitemap** (Critical), including several interactive tools that Google should know about. Content depth is the second major concern — many informational pages fall below 500 words. Performance is decent but the 182KB main JS bundle is heavy for a content site, and there's no responsive image strategy.
 
 ### Top 5 Critical / High Issues
 
 1. **[Critical]** 5 pages missing from sitemap.xml
 2. **[High]** 13 pages under 500 words — thin content risk
 3. **[High]** All detail pages share the same OG image (hero-li-river.webp)
 4. **[High]** Main JS bundle is 182KB
 5. **[High]** Images lack width/height dimensions and srcset
 
 ### Top 5 Quick Wins
 
 1. Add the 5 missing pages to sitemap.xml (5 min)
 2. Add width/height attributes to content images (15 min)
 3. Create page-specific OG images for top 5 traffic pages (1 hour)
 4. Fix heading hierarchy on pages that jump h2→h4 (30 min)
 5. Add an llms.txt file at the root (5 min)
 
 ---
 
 ## Technical SEO — Score: 78 / 100
 
 **What works:** robots.txt open to all crawlers with sitemap directive; proper canonical URLs on all pages; hreflang tags (en + x-default) on every page; clean semantic URLs; 404 page exists.
 
 **Findings:**
 - **[Critical]** Sitemap missing 5 pages: china-packing-list, china-prep-checklist, china-trip-builder, guilin-trip-cost-calculator, yangshuo-cycling-routes
 - **[Low]** All URLs use `monthly` changefreq — update pages could use `weekly`
 - **[Low]** No trailing-slash redirect — risk of duplicate indexing
 
 ## Content Quality — Score: 72 / 100
 
 **What works:** Unique meta descriptions on every page; authoritative, practical tone; "Last updated: August 2026" shows freshness; clear topical structure.
 
 **Findings:**
 - **[High]** 13 pages under 500 words: about (260), li-river-cruise (334), longji-rice-terraces (335), where-to-stay-in-guilin (350), where-to-stay-in-yangshuo (312), how-to-book-china-trains (285), alipay-wechat-setup (286), guilin-in-your-china-trip (284), guilin-trip-cost-calculator (140), china-trip-builder (123), china-packing-list (204). Tool pages are expected to be thin, but informational pages should target 800+ words.
 - **[Medium]** About page (260 words) is too thin for an E-E-A-T signal
 - **[Medium]** No author bylines or author pages — hurts authority signals
 
 ## On-Page SEO — Score: 80 / 100
 
 **What works:** Well-optimized title tags (50-70 chars); exactly one H1 per page; strong internal linking via footer; keywords meta tag present.
 
 **Findings:**
 - **[Medium]** 16 pages have h2s with no h3s — search engines prefer deeper hierarchy
 - **[Low]** Keywords meta tag is identical across all pages
 
 ## Schema & Structured Data — Score: 85 / 100
 
 **What works:** WebSite schema on every page; FAQPage schema on homepage (8 questions); Article + BreadcrumbList on all detail pages; valid JSON-LD throughout.
 
 **Findings:**
 - **[Medium]** No ImageObject schema on detail pages with hero images
 - **[Low]** No top-level Organization schema with logo/sameAs/contact
 
 ## Performance — Score: 68 / 100
 
 **What works:** All WebP images; native lazy loading; font preloading with CDN preconnect; minimal CSS (28KB).
 
 **Findings:**
 - **[High]** Main JS bundle 182KB — heavy for content site. Tool components load site-wide.
 - **[Medium]** No critical CSS inlining
 - **[Medium]** Fonts from jsdelivr CDN — consider self-hosting
 
 ## Images — Score: 72 / 100
 
 **What works:** All WebP; alt text on every image; eager on hero, lazy on others.
 
 **Findings:**
 - **[High]** Card images missing width/height — causes CLS
 - **[Medium]** No srcset/sizes — same large images (150-231KB) on all devices
 - **[Low]** Detail page hero alt text duplicates H1
 
 ## AI Search Readiness — Score: 68 / 100
 
 **What works:** FAQPage schema; BreadcrumbList schema; semantic HTML; well-structured content.
 
 **Findings:**
 - **[Medium]** No llms.txt file
 - **[Medium]** No explicit AI crawler rules in robots.txt
 - **[Low]** No author pages for citation authority
 
 ---
 
 ## Page Inventory (Word Counts)
 
 | Page | Words | Status |
 |------|-------|--------|
 | Homepage | 2,100 | Good |
 | guilin-food | 1,204 | Good |
 | yangshuo-cycling-routes | 877 | *(not in sitemap)* |
 | china-prep-checklist | 826 | *(not in sitemap)* |
 | guilin-yangshuo-itinerary-3-day | 690 | Adequate |
 | guilin-yangshuo-photo-spots | 588 | Adequate |
 | guilin-yangshuo-itinerary-5-day | 544 | Adequate |
 | guilin-travel-mistakes | 565 | Adequate |
 | yangshuo-travel-guide | 577 | Adequate |
 | guilin-travel-guide | 527 | Adequate |
 | ten-mile-gallery | 527 | Adequate |
 | survival-chinese-phrases | 527 | Adequate |
 | china-visa | 516 | Adequate |
 | china-internet-guide | 487 | Thin |
 | guilin-yangshuo-itinerary-2-day | 470 | Thin |
 | guilin-yangshuo-trip-cost | 452 | Thin |
 | guilin-to-yangshuo | 433 | Thin |
 | is-guilin-worth-visiting | 429 | Thin |
 | yangshuo-rock-climbing | 420 | Thin |
 | best-time-to-visit-guilin | 366 | Thin |
 | where-to-stay-in-guilin | 350 | Thin |
 | li-river-cruise | 334 | Thin |
 | longji-rice-terraces | 335 | Thin |
 | where-to-stay-in-yangshuo | 312 | Thin |
 | alipay-wechat-setup | 286 | Thin |
 | how-to-book-china-trains | 285 | Thin |
 | guilin-in-your-china-trip | 284 | Thin |
 | about | 260 | Thin |
 | china-packing-list | 204 | Tool *(not in sitemap)* |
 | guilin-trip-cost-calculator | 140 | Tool *(not in sitemap)* |
 | china-trip-builder | 123 | Tool *(not in sitemap)* |
 
 ---
 
 ## Scoring
 
 | Category | Weight | Score | Weighted |
 |----------|--------|-------|----------|
 | Technical SEO | 22% | 78 | 17.16 |
 | Content Quality | 23% | 72 | 16.56 |
 | On-Page SEO | 20% | 80 | 16.00 |
 | Schema | 10% | 85 | 8.50 |
 | Performance | 10% | 68 | 6.80 |
 | AI Search | 10% | 68 | 6.80 |
 | Images | 5% | 72 | 3.60 |
 | **Total** | **100%** | — | **75.42** |
 
 *See ACTION-PLAN.md for prioritized recommendations.*
