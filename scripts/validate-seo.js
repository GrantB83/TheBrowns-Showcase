import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function validateSEO() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('🔍 Validating SEO Implementation...\n');
  
  // Test 1: Check sitemap.xml
  console.log('📄 Testing Sitemap:');
  try {
    await page.goto('http://localhost:8080/sitemap.xml', { waitUntil: 'networkidle0' });
    const sitemapContent = await page.content();
    
    if (sitemapContent.includes('<?xml version="1.0"')) {
      console.log('✅ Sitemap XML is valid');
      
      // Count URLs
      const urlCount = (sitemapContent.match(/<url>/g) || []).length;
      console.log(`✅ Sitemap contains ${urlCount} URLs`);
      
      // Check for key pages
      const keyPages = [
        'https://www.thebrowns.co.za/',
        'https://www.thebrowns.co.za/accommodation',
        'https://www.thebrowns.co.za/dullstroom-accommodation-travel-guide',
        'https://www.thebrowns.co.za/blog'
      ];
      
      keyPages.forEach(pageUrl => {
        if (sitemapContent.includes(pageUrl)) {
          console.log(`✅ Found: ${pageUrl}`);
        } else {
          console.log(`❌ Missing: ${pageUrl}`);
        }
      });
    } else {
      console.log('❌ Sitemap XML is invalid');
    }
  } catch (error) {
    console.log('❌ Could not access sitemap.xml');
  }
  
  // Test 2: Check robots.txt
  console.log('\n📄 Testing Robots.txt:');
  try {
    await page.goto('http://localhost:8080/robots.txt', { waitUntil: 'networkidle0' });
    const robotsContent = await page.content();
    
    if (robotsContent.includes('Sitemap: https://www.thebrowns.co.za/sitemap.xml')) {
      console.log('✅ Robots.txt contains sitemap reference');
    } else {
      console.log('❌ Robots.txt missing sitemap reference');
    }
    
    if (robotsContent.includes('User-agent: *')) {
      console.log('✅ Robots.txt has proper user-agent rule');
    } else {
      console.log('❌ Robots.txt missing proper user-agent rule');
    }
  } catch (error) {
    console.log('❌ Could not access robots.txt');
  }
  
  // Test 3: Check canonical tags on key pages
  console.log('\n📄 Testing Canonical Tags:');
  const testPages = [
    { path: '/', name: 'Homepage' },
    { path: '/accommodation', name: 'Accommodation' },
    { path: '/dullstroom-accommodation-travel-guide', name: 'Pillar Page' },
    { path: '/blog', name: 'Blog Hub' }
  ];
  
  for (const testPage of testPages) {
    try {
      await page.goto(`http://localhost:8080${testPage.path}`, { waitUntil: 'networkidle0' });
      
      const canonicalUrl = await page.evaluate(() => {
        const canonical = document.querySelector('link[rel="canonical"]');
        return canonical ? canonical.getAttribute('href') : null;
      });
      
      if (canonicalUrl) {
        if (canonicalUrl.startsWith('https://www.thebrowns.co.za')) {
          console.log(`✅ ${testPage.name}: Canonical tag found with correct base URL`);
        } else {
          console.log(`❌ ${testPage.name}: Canonical tag has wrong base URL: ${canonicalUrl}`);
        }
      } else {
        console.log(`❌ ${testPage.name}: No canonical tag found`);
      }
    } catch (error) {
      console.log(`❌ ${testPage.name}: Could not access page`);
    }
  }
  
  // Test 4: Check for non-existent routes (should not be in sitemap)
  console.log('\n📄 Testing Non-existent Routes:');
  const nonExistentRoutes = ['/pay-what-you-can', '/booking', '/location'];
  
  for (const route of nonExistentRoutes) {
    try {
      await page.goto(`http://localhost:8080${route}`, { waitUntil: 'networkidle0' });
      const title = await page.title();
      
      if (title.includes('404') || title.includes('Not Found')) {
        console.log(`✅ ${route}: Correctly returns 404`);
      } else {
        console.log(`❌ ${route}: Does not return 404`);
      }
    } catch (error) {
      console.log(`❌ ${route}: Could not test`);
    }
  }
  
  await browser.close();
  console.log('\n✅ SEO validation complete!');
}

// Run validation
validateSEO().catch(console.error);
