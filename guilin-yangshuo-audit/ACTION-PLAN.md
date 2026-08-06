 # Action Plan — guilin-yangshuo.com
 
 ## Phase 1: Critical Fixes (Week 1)
 
 ### 1. Add 5 missing pages to sitemap
 **Effort:** 5 min | **Impact:** High
 
 Pages missing from sitemap.xml: china-packing-list, china-prep-checklist, china-trip-builder, guilin-trip-cost-calculator, yangshuo-cycling-routes. Edit sitemap generation to include all pages in dist/.
 
 ### 2. Add width/height to content images
 **Effort:** 30 min | **Impact:** Medium
 
 All <img> tags should include explicit width/height to eliminate CLS. Extend the homepage hero pattern (which already has dimensions) to card images and content images.
 
 ```astro
 <img src={src} alt={alt} width="800" height="600" loading="lazy" />
 ```
 
 ---
 
 ## Phase 2: High-Impact Improvements (Weeks 2-3)
 
 ### 3. Deepen thin content pages
 **Effort:** 2-3 hours each | **Impact:** Very High
 
 Priority pages to expand from ~300 to 800+ words:
 - **li-river-cruise** (334w): Add pricing table, seasonal water levels, photo tips
 - **best-time-to-visit-guilin** (366w): Add month-by-month breakdown, festival calendar
 - **about** (260w): Add author credentials, editorial standards, site methodology
 - **where-to-stay-in-guilin** (350w) / **where-to-stay-in-yangshuo** (312w): Add area comparisons, budget ranges, accessibility
 
 ### 4. Fix heading hierarchy
 **Effort:** 1 hour | **Impact:** Medium
 
 16 pages have h2s with no h3s. Priority: guilin-food (7 h2s → add h3s per dish category), guilin-travel-mistakes (11 h2s → group into categories), guilin-yangshuo-photo-spots (8 h2s → add h3s for shooting tips).
 
 ### 5. Create page-specific OG images
 **Effort:** 2 hours | **Impact:** High
 
 All detail pages fall back to hero-li-river.webp. Create unique OG images for top 8 pages.
 
 ### 6. Code-split JS bundles
 **Effort:** 2 hours | **Impact:** Medium
 
 182KB main bundle loads everywhere. Tool components should use `client:idle` or `client:load` only on their pages:
 
 ```astro
 <CostCalculator client:idle />
 ```
 
 ---
 
 ## Phase 3: Content & Authority (Month 2)
 
 ### 7. Add author pages and bylines
 **Effort:** 4 hours | **Impact:** Medium
 
 ### 8. Add ImageObject schema to detail pages
 **Effort:** 1 hour | **Impact:** Low-Medium
 
 ### 9. Add llms.txt file
 **Effort:** 5 min | **Impact:** Medium
 
 Create /public/llms.txt following llmstxt.org spec.
 
 ### 10. Add responsive images with srcset
 **Effort:** 3 hours | **Impact:** Medium
 
 Use Astro's image optimization or generate multiple sizes at build time.
 
 ---
 
 ## Phase 4: Monitoring (Ongoing)
 
 ### 11. Set up Google Search Console
 Submit sitemap, monitor indexation, track keyword performance.
 
 ### 12. Track Core Web Vitals monthly
 LCP < 2.5s, INP < 200ms, CLS < 0.1 via PageSpeed Insights.
 
 ### 13. Build quality backlinks
 Reach out to travel bloggers, China expat forums, tourism boards.
 
 ### 14. Consider reader reviews and Review schema
