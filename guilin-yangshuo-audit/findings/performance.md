 # Performance Findings
 
 ## Bundle Analysis
 
 | Asset | Size | Notes |
 |-------|------|-------|
 | client.BlZe1zq3.js | 182KB | Main bundle — loads site-wide |
 | CostCalculator.BWpCCEHp.js | 5KB | Cost calculator only |
 | PackingList.dUk9-94l.js | 4KB | Packing list only |
 | TripBuilder.CE7tegJ0.js | 3KB | Trip builder only |
 | PrepChecklist.BDr7nPF7.js | 9KB | Prep checklist only |
 | index.qNTDzdXh.js | 8KB | Main page JS |
 | jsx-runtime.D_zvdyIk.js | 1KB | Shared runtime |
 | about._Fg94il-.css | 28KB | Single CSS file — OK |
 
 182KB main bundle is heavy. React + motion + phosphor-icons should be tree-shaken.
 
 ## Image Performance
 
 All images are WebP, 150-231KB each. For card images, quality 75-80 would save 30-40%.
 
 ## Font Loading
 
 2 Geist variants preloaded from jsdelivr. Missing dns-prefetch. Consider self-hosting.
 
 ## Core Web Vitals Estimate
 
 - LCP: 2-3s (hero image 153KB, eager) — acceptable
 - CLS: Medium risk (card images lack dimensions)
 - INP: Medium risk (182KB JS may block main thread)
