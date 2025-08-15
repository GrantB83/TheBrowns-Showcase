export const STRUCTURED_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "The Browns Luxury Guest Suites & Cottage",
    "description": "Luxury self-catering accommodation in Dullstroom, Mpumalanga featuring premium suites with highland views and world-class fly-fishing.",
    "url": "https://thebrowns.co.za",
    "telephone": "+27000000000",
    "email": "stay@thebrowns.co.za",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "279 Blue Crane Drive",
      "addressLocality": "Dullstroom",
      "addressRegion": "Mpumalanga",
      "postalCode": "1110",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4167,
      "longitude": 30.1000
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi" },
      { "@type": "LocationFeatureSpecification", "name": "Self-catering" },
      { "@type": "LocationFeatureSpecification", "name": "Highland Views" },
      { "@type": "LocationFeatureSpecification", "name": "Fly Fishing Access" },
      { "@type": "LocationFeatureSpecification", "name": "Private Parking" }
    ],
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    
    "image": "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1200&q=80"
  },

  breadcrumb: (items: { name: string; url: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Browns Luxury Guest Suites",
    "image": "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1200&q=80",
    "telephone": "+27000000000",
    "email": "stay@thebrowns.co.za",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "279 Blue Crane Drive",
      "addressLocality": "Dullstroom",
      "addressRegion": "Mpumalanga",
      "postalCode": "1110",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4167,
      "longitude": 30.1000
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  }
};