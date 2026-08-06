 # Schema & Structured Data Findings
 
 ## Implemented Schema
 
 ### WebSite (all pages)
 @type: WebSite with name, url, description, inLanguage. Valid.
 
 ### FAQPage (homepage only)
 @type: FAQPage with 8 questions and substantive answers. Valid.
 
 ### Article + BreadcrumbList (all detail pages)
 @type: Article with headline, description, url, breadcrumb, about, publisher. Valid.
 
 ## Missing Schema Opportunities
 
 ### ImageObject
 Detail pages with hero images should include ImageObject schema with url, caption, width, height.
 
 ### Organization (top-level)
 Consider a top-level Organization schema on the homepage with logo, sameAs, and contact info.
 
 ### Review / AggregateRating
 No review functionality yet. If reader reviews are added, include Review schema.
