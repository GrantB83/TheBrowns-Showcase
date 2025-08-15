import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: any;
}

export function SEO({ 
  title, 
  description, 
  keywords = "Dullstroom luxury accommodation, highland guest suites, Mpumalanga boutique hotel, fly fishing accommodation, Panorama Route base, luxury self-catering Dullstroom",
  image = "https://thebrowns.co.za/images/gallery/main-building-exterior.jpg",
  url,
  type = "website",
  schemaData
}: SEOProps) {
  const siteName = "The Browns Luxury Guest Suites";
  const defaultTitle = "The Browns - Luxury Highland Accommodation | Dullstroom Guest Suites";
  const fullTitle = title === defaultTitle ? title : `${title} | ${siteName}`;
  const canonicalUrl = url || `https://thebrowns.co.za${typeof window !== 'undefined' ? window.location.pathname : ''}`;

  // Enhanced meta keywords with long-tail variations
  const enhancedKeywords = [
    keywords,
    "Dullstroom luxury guesthouse 2025",
    "boutique accommodation Mpumalanga highlands", 
    "fly fishing lodge Dullstroom South Africa",
    "Panorama Route accommodation God's Window",
    "Dullstroom self catering luxury suites",
    "highland weekend getaway romantic",
    "Dullstroom family accommodation fireplace",
    "luxury guest house near trout fishing",
    "boutique hospitality Dullstroom village",
    "premium highland accommodation Mpumalanga"
  ].filter(Boolean).join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content="The Browns Luxury Guest Suites" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="en-ZA" />
      <meta name="geo.region" content="ZA-MP" />
      <meta name="geo.placename" content="Dullstroom, Mpumalanga, South Africa" />
      <meta name="geo.position" content="-25.4167;30.1078" />
      <meta name="ICBM" content="-25.4167, 30.1078" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Browns Luxury Guest Suites - Premium highland accommodation in Dullstroom" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="The Browns Luxury Guest Suites - Premium highland accommodation in Dullstroom" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      
      {/* Enhanced Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "@id": "https://thebrowns.co.za/#business",
          name: "The Browns Luxury Guest Suites",
          description: "Premier boutique luxury accommodation in Dullstroom's misty highlands, specializing in personalized hospitality, world-class fly-fishing access, and Panorama Route adventures.",
          url: "https://thebrowns.co.za",
          telephone: "+27000000000",
          email: "stay@thebrowns.co.za",
          address: {
            "@type": "PostalAddress",
            streetAddress: "279 Blue Crane Drive",
            addressLocality: "Dullstroom",
            addressRegion: "Mpumalanga",
            postalCode: "1110",
            addressCountry: "ZA"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -25.4167,
            longitude: 30.1078
          },
          
          starRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "200",
            bestRating: "5",
            worstRating: "1"
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
            { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
            { "@type": "LocationFeatureSpecification", name: "Garden Views", value: true },
            { "@type": "LocationFeatureSpecification", name: "Highland Views", value: true },
            { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
            { "@type": "LocationFeatureSpecification", name: "Netflix", value: true }
          ],
          checkinTime: "15:00",
          checkoutTime: "11:00",
          numberOfRooms: "8"
        })}
      </script>

      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}