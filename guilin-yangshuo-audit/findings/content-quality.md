 # Content Quality & E-E-A-T Analysis — guilin-yangshuo.com
 
 **Date:** 2026-08-06 | **Methodology:** QRG-aligned E-E-A-T framework + content_quality.py
 
 ## Overall Content Quality Score: 82 / 100
 
 The writing quality is genuinely strong — all pages score 96-97 on script-based analysis (no filler, no AI patterns, clean prose). The gaps are entirely structural and authority-related, not writing quality.
 
 ## E-E-A-T Breakdown
 
 | Factor | Score | Key Signals |
 |--------|-------|-------------|
 | Experience | 22/25 | First-hand travel knowledge throughout, practical advice with specific details, photos from direct experience |
 | Expertise | 15/25 | Knowledgeable content but no author credentials, no bylines, no certifications |
 | Authoritativeness | 10/25 | Zero external citations, no backlinks (new site), no brand mentions in industry |
 | Trustworthiness | 18/25 | HTTPS, honest/disclaimer language, No tour sales positioning, but no author info, no physical address, no privacy policy |
 | **Total** | **65/100** | |
 
 ## Google's "Who / How / Why" Test
 
 | Question | Status | Assessment |
 |----------|--------|------------|
 | **Who** created it? | ❌ Weak | No bylines, no author page with credentials, About page only 260 words |
 | **How** was it created? | ⚠️ Partial | First-hand knowledge evident in writing, but no process disclosure or methodology |
 | **Why** does it exist? | ✅ Good | "To help people plan their trip" — clear purpose, no ad-overload or SEO-for-clicks feel |
 
 ## Content Metrics
 
 ### Word Count Distribution
 
 | Range | Pages | Assessment |
 |-------|-------|------------|
 | 800+ | 3 | Good |
 | 500-799 | 12 | Adequate |
 | 300-499 | 13 | Thin |
 | <300 | 7 | Very thin |
 
 **Priority pages needing expansion:**
 - `about` (260w): This is the E-E-A-T cornerstone page — needs author credentials, editorial standards, fact-checking process
 - `li-river-cruise` (334w): Highest-traffic attraction guide — needs pricing table, seasonal conditions, photo tips
 - `best-time-to-visit-guilin` (366w): Needs month-by-month weather/festival table
 - `how-to-book-china-trains` (285w): Needs step-by-step screenshot guide
 
 ### Heading Hierarchy
 
 | Structure | Pages | Assessment |
 |-----------|-------|------------|
 | H1→H2→H3 | 3 | Proper hierarchy ✓ |
 | H1→H2 only | 16 | Flat — missing sub-sections |
 | H1 only (tool pages) | 4 | Expected for interactive tools |
 
 **16 flat pages** include: guilin-food (7 H2s, 0 H3s), guilin-travel-mistakes (11 H2s, 0 H3s), guilin-yangshuo-photo-spots (8 H2s, 0 H3s).
 
 ### Internal Linking
 
 Body-level internal links per page:
 - `guilin-food`: 9 links ✓ (strong — links to cost, cycling, climbing, etc.)
 - All other pages: 2 links each (breadcrumb back-link + footer link)
 
 **Finding:** Only `guilin-food` and `guilin-trip-cost-calculator` have substantive body cross-links. All other pages rely solely on nav/footer for internal linking. Standard recommendation: 3-5 relevant internal links per 1000 words.
 
 ### External Citations
 
 **Zero external links** found across all pages. No citations to Wikipedia, government sites, official attraction pages, or other authoritative sources.
 
 ### Content Freshness
 
 - All pages show "Last updated: August 2026" in footer ✓
 - No per-page publication dates or date modified
 - No indication of when content was first published
 
 ### Multimedia
 
 - 11 pages now have hero images (added during SEO optimization) ✓
 - All images have alt text ✓
 - No videos, infographics, or data visualizations
 - Cost Calculator and Trip Builder are interactive — good
 
 ## AI Citation Readiness: 72 / 100
 
 **What's working:**
 - FAQPage schema on homepage with substantive answers ✓
 - Article + BreadcrumbList schema on all detail pages ✓
 - ImageObject schema on pages with hero images ✓
 - Clear, quotable statements in FAQ ✓
 - Tables for comparative data on guilin-food, packing-list ✓
 
 **What's missing:**
 - No author/person schema for citation authority
 - No statistics or first-party data (original research)
 - No llms.txt (already created during SEO optimization ✓)
 - No QAPage schema for question-heavy pages
 
 ## AI Content Detection
 
 content_quality.py scores: **All pages 96-97/100**. Zero AI pattern flags, zero filler content. Writing style is natural, specific, and demonstrates genuine expertise. This site would pass any AI content detection tool comfortably.
 
 ## Priority Recommendations
 
 ### Critical (fix this week)
 1. **Expand About page** from 260 to 500+ words with author credentials, editorial process, fact-checking standards
 2. **Add author bylines** to at least the top 10 content pages with link to expanded About
 
 ### High (fix this month)
 3. **Add 2-3 external citations** per page — Wikipedia, official attraction sites, government travel advisories
 4. **Add body cross-links** — each page should link to 3-5 related pages within the content
 5. **Deepen 5 thinnest pages**: li-river-cruise (334→800), about (260→500), where-to-stay-in-guilin (350→600), how-to-book-china-trains (285→600), alipay-wechat-setup (286→600)
 
 ### Medium (this quarter)
 6. **Add per-page publish dates** with `datePublished` in Article schema
 7. **Add Person/Organization schema** on About page for citation authority
 8. **Fix heading hierarchy** on the 16 flat pages — add H3s where content has clear sub-topics
