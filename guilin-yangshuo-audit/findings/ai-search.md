 # AI Search Readiness Findings
 
 ## Citability Score: 68 / 100
 
 ## What's Working
 
 - FAQPage schema: AI overviews can extract direct answers
 - BreadcrumbList schema: Helps AI understand site structure
 - Clean semantic HTML: Easy for LLM scrapers to parse
 - Structured content with clear headings
 - Practical, substantive FAQ answers (not one-liners)
 
 ## What's Missing
 
 ### llms.txt
 No llms.txt file. This is a growing standard for helping AI crawlers discover content. See llmstxt.org.
 
 ### robots.txt AI Crawler Directives
 No explicit rules for GPTBot, Claude-Web, PerplexityBot. All are allowed by default, but explicit rules show awareness.
 
 ### Author Pages
 AI models look for authority signals. Author credentials and expanded About page would improve citation readiness.
 
 ## Recommendations
 
 1. Create /llms.txt with key page links
 2. Add AI crawler rules to robots.txt
 3. Expand About page with editorial standards
 4. Add datePublished/dateModified to Article schema
