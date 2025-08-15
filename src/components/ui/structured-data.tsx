import { useEffect } from "react";

interface StructuredDataProps {
  type: "hotel" | "hotelRoom" | "offer" | "faq" | "review" | "breadcrumb";
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    let schema: any = {};

    switch (type) {
      case "hotel":
        schema = {
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "The Browns Luxury Guest Suites",
          description: "Premier luxury accommodation in Dullstroom's misty highlands, offering boutique guest suites with highland views, spa amenities, and world-class fly-fishing access.",
          url: "https://thebrowns.co.za",
          image: [
            "https://thebrowns.co.za/images/gallery/main-building-exterior.jpg",
            "https://thebrowns.co.za/images/gallery/master-suite-bedroom.jpg",
            "https://thebrowns.co.za/images/gallery/garden-pathways.jpg"
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dullstroom Highland Estate",
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
          telephone: "+27000000000",
          email: "info@thebrowns.co.za",
          starRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          },
          
          amenityFeature: [
            {
              "@type": "LocationFeatureSpecification",
              name: "Free WiFi",
              value: true
            },
            {
              "@type": "LocationFeatureSpecification", 
              name: "Parking",
              value: true
            },
            {
              "@type": "LocationFeatureSpecification",
              name: "Garden Views",
              value: true
            },
            {
              "@type": "LocationFeatureSpecification",
              name: "Highland Views", 
              value: true
            },
            {
              "@type": "LocationFeatureSpecification",
              name: "Fireplace",
              value: true
            },
            {
              "@type": "LocationFeatureSpecification",
              name: "Netflix",
              value: true
            }
          ],
          checkinTime: "15:00",
          checkoutTime: "11:00",
          numberOfRooms: "8",
          makesOffer: {
            "@type": "Offer",
            name: "Direct Booking Benefits",
            description: "Book direct for best rates, free welcome drink, complimentary WiFi, and late checkout",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "ZAR",
              price: "2200-3600"
            },
            availability: "https://schema.org/InStock",
            url: "https://book.nightsbridge.com/00000"
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "200",
            bestRating: "5",
            worstRating: "1"
          },
          ...data
        };
        break;

      case "hotelRoom":
        schema = {
          "@context": "https://schema.org",
          "@type": "HotelRoom",
          name: data.name,
          description: data.description,
          image: data.images || [],
          bed: {
            "@type": "BedDetails",
            typeOfBed: data.bedType,
            numberOfBeds: data.numberOfBeds
          },
          occupancy: {
            "@type": "QuantitativeValue",
            maxValue: data.maxOccupancy
          },
          amenityFeature: data.amenities?.map((amenity: string) => ({
            "@type": "LocationFeatureSpecification",
            name: amenity,
            value: true
          })),
          offers: {
            "@type": "Offer",
            priceCurrency: "ZAR",
            price: data.price,
            availability: "https://schema.org/InStock",
            url: data.bookingUrl,
            validFrom: new Date().toISOString().split('T')[0],
            priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
          },
          isPartOf: {
            "@type": "Hotel",
            name: "The Browns Luxury Guest Suites",
            url: "https://thebrowns.co.za"
          }
        };
        break;

      case "offer":
        schema = {
          "@context": "https://schema.org",
          "@type": "Offer",
          name: data.name,
          description: data.description,
          seller: {
            "@type": "Hotel",
            name: "The Browns Luxury Guest Suites",
            url: "https://thebrowns.co.za"
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "ZAR",
            price: data.price || "0",
            eligibleQuantity: {
              "@type": "QuantitativeValue",
              minValue: 1
            }
          },
          availability: "https://schema.org/InStock",
          url: data.url,
          validFrom: data.validFrom || new Date().toISOString().split('T')[0],
          validThrough: data.validThrough,
          additionalProperty: data.benefits?.map((benefit: string) => ({
            "@type": "PropertyValue",
            name: "Benefit",
            value: benefit
          }))
        };
        break;

      case "faq":
        schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.questions?.map((item: any) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        };
        break;

      case "review":
        schema = {
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Hotel",
            name: "The Browns Luxury Guest Suites",
            url: "https://thebrowns.co.za"
          },
          author: {
            "@type": "Person",
            name: data.author
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: data.rating,
            bestRating: "5",
            worstRating: "1"
          },
          reviewBody: data.review,
          datePublished: data.date || new Date().toISOString().split('T')[0]
        };
        break;

      case "breadcrumb":
        schema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };
        break;

      default:
        return;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = `structured-data-${type}`;
    
    // Remove existing script if present
    const existing = document.getElementById(`structured-data-${type}`);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}