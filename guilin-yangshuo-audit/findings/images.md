 # Image SEO Findings
 
 ## Format
 All 11 images use WebP format. Optimal for modern SEO.
 
 ## Alt Text
 All images have alt text. Detail page hero images use the page title as alt text, which duplicates the H1. Homepage card images have functional but basic alt text.
 
 ## Dimensions
 Hero image on homepage has width/height. All card images are missing dimensions — causes CLS.
 
 ## Responsive Images
 No srcset or sizes attributes. Every device downloads the same large image.
 
 ## Lazy Loading
 Hero: loading="eager". Content images: loading="lazy". Correctly applied.
 
 ## File Sizes
 Average 193KB per image. Target 100-150KB at quality 75-80 would save ~30%.
