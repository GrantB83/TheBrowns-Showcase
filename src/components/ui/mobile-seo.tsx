import { SEO } from "@/components/ui/seo";

interface MobileSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  location?: string;
  type?: string;
}

export function MobileSEO({
  title = "Best Dullstroom Family Guesthouse | The Browns Luxury Suites",
  description = "Looking for luxury family accommodation in Dullstroom? The Browns offers premium self-catering suites near fly fishing, Panorama Route attractions, and highland adventures. Book your perfect Mpumalanga getaway today.",
  keywords = "best Dullstroom family guesthouse, luxury Dullstroom accommodation, Dullstroom self-catering suites, family guesthouse Mpumalanga, Panorama Route accommodation, Dullstroom fly fishing lodge, highland family retreat South Africa",
  location = "Dullstroom, Mpumalanga, South Africa",
  type = "lodging"
}: MobileSEOProps) {
  
  // Structured data for local business and lodging
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": "https://thebrowns.co.za/#business",
        "name": "The Browns Luxury Guest Suites & Cottage",
        "description": "Premium self-catering accommodation in Dullstroom, perfect for families exploring the Panorama Route and highland adventures",
        "url": "https://thebrowns.co.za",
        "telephone": "+27000000000",
        "email": "info@thebrowns.co.za",
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
          "longitude": 30.1333
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Free WiFi",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification", 
            "name": "Free Parking",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Family Friendly",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Self Catering",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Netflix Entertainment",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Coffee Machines",
            "value": true
          }
        ],
        "checkinTime": "15:00",
        "checkoutTime": "10:00",
        "numberOfRooms": "7",
        "maximumAttendeeCapacity": "16",
        "priceRange": "$$",
        "starRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "124",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "TouristAttraction",
        "@id": "https://thebrowns.co.za/#attraction",
        "name": "Dullstroom Highland Experience",
        "description": "World-class fly fishing, Panorama Route gateway, and highland adventures",
        "url": "https://thebrowns.co.za/activities",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dullstroom",
          "addressRegion": "Mpumalanga",
          "addressCountry": "ZA"
        },
        "touristType": [
          "Family Groups",
          "Couples", 
          "Fishing Enthusiasts",
          "Nature Lovers",
          "Photography Enthusiasts"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is The Browns suitable for families with children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The Browns offers family-friendly accommodation with spacious suites, sofa beds for children, and safe outdoor areas. We're located walking distance from Dullstroom's family attractions."
            }
          },
          {
            "@type": "Question", 
            "name": "What activities are available near The Browns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Guests can enjoy world-class fly fishing, Panorama Route day trips to God's Window and Blyde River Canyon, hiking trails, photography, and exploring Dullstroom's artisanal shops and restaurants."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide breakfast or meals?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "We specialize in luxury self-catering accommodation. Each suite includes premium Nespresso machines, and kitchenettes. Dullstroom has excellent restaurants within walking distance."
            }
          }
        ]
      }
    ]
  };

  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      type={type}
      schemaData={structuredData}
      image="https://thebrowns.co.za/images/hero/browns-exterior.jpg"
      url="https://thebrowns.co.za"
    />
  );
}