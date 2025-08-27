import { SITE_CONFIG, getSitemapUrl } from './config';
import { blogPosts } from '../data/blog-posts';

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
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
] as const;

// Get current date in YYYY-MM-DD format
function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

// Generate sitemap XML
export function generateSitemapXml(): string {
  const urls: string[] = [];
  
  // Add main routes
  MAIN_ROUTES.forEach(route => {
    urls.push(`
  <url>
    <loc>${getSitemapUrl(route.path)}</loc>
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
    <loc>${getSitemapUrl(`/blog/${post.slug}`)}</loc>
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

// Get all sitemap URLs for validation
export function getAllSitemapUrls(): Array<{ url: string; priority: string; changefreq: string; lastmod: string }> {
  const urls: Array<{ url: string; priority: string; changefreq: string; lastmod: string }> = [];
  
  // Add main routes
  MAIN_ROUTES.forEach(route => {
    urls.push({
      url: getSitemapUrl(route.path),
      priority: route.priority,
      changefreq: route.changefreq,
      lastmod: getCurrentDate()
    });
  });
  
  // Add blog posts
  blogPosts
    .filter(post => post.published)
    .forEach(post => {
      urls.push({
        url: getSitemapUrl(`/blog/${post.slug}`),
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: post.date
      });
    });
  
  return urls;
}

// Get sitemap statistics
export function getSitemapStats() {
  const publishedPosts = blogPosts.filter(post => post.published).length;
  const totalUrls = MAIN_ROUTES.length + publishedPosts;
  
  return {
    totalUrls,
    mainPages: MAIN_ROUTES.length,
    blogPosts: publishedPosts,
    lastGenerated: getCurrentDate()
  };
}
