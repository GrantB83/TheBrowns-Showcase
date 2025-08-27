// Site configuration constants
export const SITE_CONFIG = {
  BASE_URL: 'https://www.thebrowns.co.za',
  SITE_NAME: 'The Browns Luxury Guest Suites',
  DESCRIPTION: 'Premier luxury accommodation in Dullstroom\'s misty highlands, offering boutique guest suites with highland views, spa amenities, and world-class fly-fishing access.',
  EMAIL: 'stay@thebrowns.co.za',
  PHONE: '+27000000000',
  ADDRESS: {
    street: '279 Blue Crane Drive',
    city: 'Dullstroom',
    region: 'Mpumalanga',
    postalCode: '1110',
    country: 'ZA'
  },
  GEO: {
    latitude: -25.4167,
    longitude: 30.1078
  }
} as const;

// Canonical URL helper
export function getCanonicalUrl(path: string = '', override?: string): string {
  if (override) {
    return override.startsWith('http') ? override : `${SITE_CONFIG.BASE_URL}${override.startsWith('/') ? override : `/${override}`}`;
  }
  
  // Normalize path - ensure it starts with / and remove trailing slash except for root
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  
  return `${SITE_CONFIG.BASE_URL}${normalizedPath}`;
}

// Sitemap URL helper
export function getSitemapUrl(path: string): string {
  return getCanonicalUrl(path);
}
