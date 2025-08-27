import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Site configuration
const SITE_CONFIG = {
  BASE_URL: 'https://www.thebrowns.co.za',
  SITE_NAME: 'The Browns Luxury Guest Suites'
};

// Blog posts data (simplified for the script)
const blogPosts = [
  { slug: "top-fly-fishing-spots-dullstroom", date: "2025-01-15", published: true },
  { slug: "mpumalanga-events-festivals", date: "2025-01-20", published: true },
  { slug: "self-catering-luxury-dullstroom", date: "2025-01-25", published: true },
  { slug: "dullstroom-artisanal-food-scene", date: "2025-02-01", published: true },
  { slug: "ultimate-48-hour-dullstroom-itinerary", date: "2025-02-05", published: true },
  { slug: "highland-hiking-trails-dullstroom", date: "2025-02-10", published: true },
  { slug: "where-to-stay-dullstroom-2025-guide", date: "2025-02-15", published: true },
  { slug: "best-time-to-visit-dullstroom", date: "2025-02-20", published: true },
  { slug: "johannesburg-to-dullstroom-arrival-guide", date: "2025-02-25", published: true },
  { slug: "breakfast-coffee-dullstroom-guide", date: "2025-03-01", published: true },
  { slug: "romantic-dullstroom-couples-guide", date: "2025-03-05", published: true },
  { slug: "family-friendly-dullstroom-kids-guide", date: "2025-03-10", published: true },
  { slug: "world-class-fly-fishing-dullstroom", date: "2025-03-15", published: true },
  { slug: "panorama-route-day-trips-gods-window", date: "2025-03-20", published: true },
  { slug: "highland-hiking-trails-dullstroom-mountains", date: "2025-03-25", published: true },
  { slug: "highland-spa-wellness-dullstroom-luxury", date: "2025-03-30", published: true },
  { slug: "whisky-wine-tasting-dullstroom-distilleries", date: "2025-04-01", published: true },
  { slug: "artisanal-cheese-food-tours-dullstroom", date: "2025-04-05", published: true }
];

// Define the main site routes
const MAIN_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/accommodation', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
  { path: '/activities', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/dullstroom-accommodation-travel-guide', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' }
];

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

// Generate sitemap XML
function generateSitemapXml() {
  const urls = [];
  
  // Add main routes
  MAIN_ROUTES.forEach(route => {
    urls.push(`
  <url>
    <loc>${SITE_CONFIG.BASE_URL}${route.path}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);
  });
  
  // Add blog posts
  blogPosts
    .filter(post => post.published)
    .forEach(post => {
      urls.push(`
  <url>
    <loc>${SITE_CONFIG.BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
    });
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls.join('')}
</urlset>`;
}

// Get sitemap statistics
function getSitemapStats() {
  const publishedPosts = blogPosts.filter(post => post.published).length;
  const totalUrls = MAIN_ROUTES.length + publishedPosts;
  
  return {
    totalUrls,
    mainPages: MAIN_ROUTES.length,
    blogPosts: publishedPosts,
    lastGenerated: getCurrentDate()
  };
}

// Generate sitemap
const sitemapXml = generateSitemapXml();
const stats = getSitemapStats();

// Write to public directory
const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemapXml, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📊 Sitemap stats:`);
console.log(`   - Total URLs: ${stats.totalUrls}`);
console.log(`   - Main pages: ${stats.mainPages}`);
console.log(`   - Blog posts: ${stats.blogPosts}`);
console.log(`   - Generated: ${stats.lastGenerated}`);
console.log(`📁 Output: ${outputPath}`);
