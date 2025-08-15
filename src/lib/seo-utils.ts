export function generateSitemap() {
  const baseUrl = "https://thebrowns.co.za";
  
  const staticPages = [
    { 
      url: "/accommodation", 
      priority: "0.9", 
      changefreq: "weekly",
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: "/about", 
      priority: "0.9", 
      changefreq: "monthly",
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: "/gallery", 
      priority: "0.8", 
      changefreq: "weekly",
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: "/activities", 
      priority: "0.8", 
      changefreq: "monthly",
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: "/pay-what-you-can", 
      priority: "0.7", 
      changefreq: "monthly",
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: "/booking", 
      priority: "0.9", 
      changefreq: "daily",
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: "/contact", 
      priority: "0.7", 
      changefreq: "monthly",
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: "/location", 
      priority: "0.6", 
      changefreq: "monthly",
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: "/privacy", 
      priority: "0.3", 
      changefreq: "yearly",
      lastmod: new Date().toISOString().split('T')[0]
    }
  ];

  // Suite-specific pages for internal linking
  const suitePages = [
    { url: "/accommodation#master-suite", priority: "0.8", changefreq: "weekly", lastmod: new Date().toISOString().split('T')[0] },
    { url: "/accommodation#garden-suite", priority: "0.8", changefreq: "weekly", lastmod: new Date().toISOString().split('T')[0] },
    { url: "/accommodation#loft-suite", priority: "0.8", changefreq: "weekly", lastmod: new Date().toISOString().split('T')[0] },
    { url: "/accommodation#cove-suite", priority: "0.8", changefreq: "weekly", lastmod: new Date().toISOString().split('T')[0] },
    { url: "/accommodation#robin-suite", priority: "0.8", changefreq: "weekly", lastmod: new Date().toISOString().split('T')[0] },
    { url: "/accommodation#blue-crane-suite", priority: "0.8", changefreq: "weekly", lastmod: new Date().toISOString().split('T')[0] },
    { url: "/accommodation#falcon-suite", priority: "0.8", changefreq: "weekly", lastmod: new Date().toISOString().split('T')[0] },
    { url: "/accommodation#self-catering-house", priority: "0.7", changefreq: "weekly", lastmod: new Date().toISOString().split('T')[0] }
  ];

  const allPages = [...staticPages, ...suitePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Enhanced crawling for key pages
Allow: /accommodation
Allow: /gallery
Allow: /activities
Allow: /booking
Allow: /about

# Block non-essential pages
Disallow: /admin
Disallow: /api
Disallow: /*.json$

# Sitemap location
Sitemap: https://thebrowns.co.za/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1`;
}