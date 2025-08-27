import { useEffect } from "react";

interface HotelStructuredDataProps {
  type: "hotel" | "hotelRoom" | "breadcrumb";
  data?: any;
}

// Hotel data constants
const HOTEL_DATA = {
  "@type": "Hotel",
  "@id": "https://thebrowns.co.za/#hotel",
  name: "The Browns Luxury Guest Suites",
  description: "Premier luxury accommodation in Dullstroom's misty highlands, offering boutique guest suites with highland views, spa amenities, and world-class fly-fishing access.",
  url: "https://thebrowns.co.za",
  telephone: "+27000000000",
  email: "stay@thebrowns.co.za",
  image: [
    "https://thebrowns.co.za/images/hero/browns-exterior.jpg",
    "https://thebrowns.co.za/images/hero/suite-interior.jpg", 
    "https://thebrowns.co.za/images/hero/gardens-mountains.jpg",
    "https://thebrowns.co.za/images/suites/master-suite-01.jpg",
    "https://thebrowns.co.za/images/suites/loft-suite-01.jpg",
    "https://thebrowns.co.za/images/suites/garden-suite-01.jpg"
  ],
  logo: "https://thebrowns.co.za/images/logo.svg",
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
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Garden Views", value: true },
    { "@type": "LocationFeatureSpecification", name: "Highland Views", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
    { "@type": "LocationFeatureSpecification", name: "Netflix", value: true },
    { "@type": "LocationFeatureSpecification", name: "Nespresso Coffee", value: true },
    { "@type": "LocationFeatureSpecification", name: "Backup Power", value: true },
    { "@type": "LocationFeatureSpecification", name: "Electric Fencing", value: true },
    { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kids Play Area", value: true },
    { "@type": "LocationFeatureSpecification", name: "DVD Player", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hair Dryer", value: true },
    { "@type": "LocationFeatureSpecification", name: "Electric Blankets", value: true },
    { "@type": "LocationFeatureSpecification", name: "Down Duvets", value: true },
    { "@type": "LocationFeatureSpecification", name: "Minibar Fridge", value: true },
    { "@type": "LocationFeatureSpecification", name: "Premium Teas", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hot Chocolate", value: true },
    { "@type": "LocationFeatureSpecification", name: "Rusks", value: true }
  ],
  checkinTime: "15:00",
  checkoutTime: "10:00",
  numberOfRooms: "8",
  sameAs: [
    "https://www.facebook.com/thebrownsluxury/",
    "https://www.instagram.com/thebrowns.dullstroom/",
    "https://www.tripadvisor.co.za/Hotel_Review-g472515-d14094529-Reviews-The_Browns_Luxury_Guest_Suites-Dullstroom_Mpumalanga.html",
    "https://www.booking.com/reviews/za/hotel/the-browns-39-luxury-guest-suites.en-gb.html"
  ]
};

// Room data mapping
const ROOM_DATA = {
  "master-suite": {
    "@type": "HotelRoom",
    "@id": "https://thebrowns.co.za/accommodation#room-master-suite",
    name: "Master Suite",
    description: "First-floor, extra-spacious suite with a King XL bed and a double fold-out sofa (recommended for children up to 12). Large bedroom + dressing room with bay windows, a private lounge opening to two balconies, and a full bathroom with double vanity and double shower (plus separate toilet).",
    image: [
      "https://thebrowns.co.za/images/suites/master-suite-01.jpg",
      "https://thebrowns.co.za/images/suites/master-suite-02.jpg",
      "https://thebrowns.co.za/images/suites/master-suite-03.jpg",
      "https://thebrowns.co.za/images/suites/master-suite-04.jpg",
      "https://thebrowns.co.za/images/suites/master-suite-05.jpg",
      "https://thebrowns.co.za/images/suites/master-suite-06.jpg",
      "https://thebrowns.co.za/images/suites/master-suite-07.jpg"
    ],
    bed: {
      "@type": "BedDetails",
      typeOfBed: "King XL bed + Double fold-out sofa",
      numberOfBeds: 2
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 4
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi & TV with Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Nespresso + milk frother", value: true },
      { "@type": "LocationFeatureSpecification", name: "Double vanity & double shower", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private lounge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Two balconies", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dressing room with bay windows", value: true },
      { "@type": "LocationFeatureSpecification", name: "Percale linen", value: true },
      { "@type": "LocationFeatureSpecification", name: "DVD player", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hair dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Electric blankets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Down duvets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Minibar fridge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Premium tea selection", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot chocolate", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rusks", value: true }
    ]
  },
  "loft-suite": {
    "@type": "HotelRoom",
    "@id": "https://thebrowns.co.za/accommodation#room-loft-suite",
    name: "Loft Family Suite",
    description: "First-floor family unit with two bedrooms (Queen XL main; two single beds in second, not combinable), a spacious lounge with full surround sound, full bathroom with double vanity and separate toilet, plus a balcony with Zuikerboschkop views.",
    image: [
      "https://thebrowns.co.za/images/suites/loft-suite-01.jpg",
      "https://thebrowns.co.za/images/suites/loft-suite-02.jpg",
      "https://thebrowns.co.za/images/suites/loft-suite-03.jpg",
      "https://thebrowns.co.za/images/suites/loft-suite-04.jpg",
      "https://thebrowns.co.za/images/suites/loft-suite-05.jpg",
      "https://thebrowns.co.za/images/suites/loft-suite-06.jpg",
      "https://thebrowns.co.za/images/suites/loft-suite-07.jpg"
    ],
    bed: {
      "@type": "BedDetails",
      typeOfBed: "Queen XL bed + two single beds",
      numberOfBeds: 3
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 4
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Two bedrooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Spacious lounge with surround sound", value: true },
      { "@type": "LocationFeatureSpecification", name: "Balcony with Zuikerboschkop views", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi & TV with Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Nespresso + frother", value: true },
      { "@type": "LocationFeatureSpecification", name: "Percale linen", value: true },
      { "@type": "LocationFeatureSpecification", name: "DVD player", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hair dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Electric blankets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Down duvets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Minibar fridge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Premium teas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot chocolate", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rusks", value: true }
    ]
  },
  "garden-suite": {
    "@type": "HotelRoom",
    "@id": "https://thebrowns.co.za/accommodation#room-garden-suite",
    name: "Garden Suite",
    description: "Ground-floor suite with Queen XL bed, wonderful garden views, and a full bathroom featuring double vanity and a sumptuous bath (plus shower).",
    image: [
      "https://thebrowns.co.za/images/suites/garden-suite-01.jpg",
      "https://thebrowns.co.za/images/suites/garden-suite-02.jpg",
      "https://thebrowns.co.za/images/suites/garden-suite-03.jpg",
      "https://thebrowns.co.za/images/suites/garden-suite-04.jpg",
      "https://thebrowns.co.za/images/suites/garden-suite-05.jpg",
      "https://thebrowns.co.za/images/suites/garden-suite-06.jpg"
    ],
    bed: {
      "@type": "BedDetails",
      typeOfBed: "Queen XL bed",
      numberOfBeds: 1
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 2
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wonderful garden views", value: true },
      { "@type": "LocationFeatureSpecification", name: "Double vanity bathroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sumptuous bath + shower", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi & TV with Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Nespresso + frother", value: true },
      { "@type": "LocationFeatureSpecification", name: "Percale linen", value: true },
      { "@type": "LocationFeatureSpecification", name: "DVD player", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hair dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Electric blankets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Down duvets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Minibar fridge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Premium teas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot chocolate", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rusks", value: true }
    ]
  },
  "cove-suite": {
    "@type": "HotelRoom",
    "@id": "https://thebrowns.co.za/accommodation#room-cove-suite",
    name: "Cove Suite",
    description: "Ground-floor retreat with Queen XL bed, a private lounge for two, shower-only bathroom, and a charming outdoor seating area.",
    image: [
      "https://thebrowns.co.za/images/suites/cove-suite-01.jpg",
      "https://thebrowns.co.za/images/suites/cove-suite-02.jpg",
      "https://thebrowns.co.za/images/suites/cove-suite-03.jpg",
      "https://thebrowns.co.za/images/suites/cove-suite-04.jpg",
      "https://thebrowns.co.za/images/suites/cove-suite-05.jpg",
      "https://thebrowns.co.za/images/suites/cove-suite-06.jpg"
    ],
    bed: {
      "@type": "BedDetails",
      typeOfBed: "Queen XL bed",
      numberOfBeds: 1
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 2
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private lounge for two", value: true },
      { "@type": "LocationFeatureSpecification", name: "Shower-only bathroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Charming outdoor seating area", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi & TV with Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Nespresso + frother", value: true },
      { "@type": "LocationFeatureSpecification", name: "Percale linen", value: true },
      { "@type": "LocationFeatureSpecification", name: "DVD player", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hair dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Electric blankets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Down duvets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Minibar fridge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Premium teas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot chocolate", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rusks", value: true }
    ]
  },
  "robin-suite": {
    "@type": "HotelRoom",
    "@id": "https://thebrowns.co.za/accommodation#room-robin-suite",
    name: "Robin Suite",
    description: "Ground-floor, spacious bedroom opening to a private patio overlooking the garden. Bedding configurable as King or two singles. Full ensuite bathroom (bath + shower).",
    image: [
      "https://thebrowns.co.za/images/suites/robin-suite-01.jpg",
      "https://thebrowns.co.za/images/suites/robin-suite-02.jpg",
      "https://thebrowns.co.za/images/suites/robin-suite-03.jpg",
      "https://thebrowns.co.za/images/suites/robin-suite-04.jpg",
      "https://thebrowns.co.za/images/suites/robin-suite-05.jpg",
      "https://thebrowns.co.za/images/suites/robin-suite-06.jpg"
    ],
    bed: {
      "@type": "BedDetails",
      typeOfBed: "King bed or two singles (configurable)",
      numberOfBeds: 1
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 2
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private patio overlooking garden", value: true },
      { "@type": "LocationFeatureSpecification", name: "Full ensuite bathroom (bath + shower)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi & TV with Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Nespresso + frother", value: true },
      { "@type": "LocationFeatureSpecification", name: "Charlotte Rhys amenities", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hair dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Electric blankets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Down duvets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Minibar fridge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Premium teas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot chocolate", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rusks", value: true }
    ]
  },
  "blue-crane-suite": {
    "@type": "HotelRoom",
    "@id": "https://thebrowns.co.za/accommodation#room-blue-crane-suite",
    name: "Blue Crane Suite",
    description: "Ground-floor, spacious bedroom with a private patio, King bed, and a full ensuite bathroom (bath + shower).",
    image: [
      "https://thebrowns.co.za/images/suites/blue-crane-suite-01.jpg",
      "https://thebrowns.co.za/images/suites/blue-crane-suite-02.jpg",
      "https://thebrowns.co.za/images/suites/blue-crane-suite-03.jpg",
      "https://thebrowns.co.za/images/suites/blue-crane-suite-04.jpg",
      "https://thebrowns.co.za/images/suites/blue-crane-suite-05.jpg",
      "https://thebrowns.co.za/images/suites/blue-crane-suite-06.jpg",
      "https://thebrowns.co.za/images/suites/blue-crane-suite-07.jpg"
    ],
    bed: {
      "@type": "BedDetails",
      typeOfBed: "King bed",
      numberOfBeds: 1
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 2
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private patio", value: true },
      { "@type": "LocationFeatureSpecification", name: "Full ensuite bathroom (bath + shower)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi & TV with Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Nespresso + frother", value: true },
      { "@type": "LocationFeatureSpecification", name: "Charlotte Rhys amenities", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hair dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Electric blankets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Down duvets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Minibar fridge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Premium teas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot chocolate", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rusks", value: true }
    ]
  },
  "falcon-suite": {
    "@type": "HotelRoom",
    "@id": "https://thebrowns.co.za/accommodation#room-falcon-suite",
    name: "Falcon Suite",
    description: "Ground-floor suite with a private patio, King bed (or two singles), and a spacious private lounge with fold-out sofa; shower-only ensuite bathroom.",
    image: [
      "https://thebrowns.co.za/images/suites/falcon-suite-01.jpg",
      "https://thebrowns.co.za/images/suites/falcon-suite-02.jpg",
      "https://thebrowns.co.za/images/suites/falcon-suite-03.jpg",
      "https://thebrowns.co.za/images/suites/falcon-suite-04.jpg",
      "https://thebrowns.co.za/images/suites/falcon-suite-05.jpg",
      "https://thebrowns.co.za/images/suites/falcon-suite-06.jpg",
      "https://thebrowns.co.za/images/suites/falcon-suite-07.jpg"
    ],
    bed: {
      "@type": "BedDetails",
      typeOfBed: "King bed or two singles (configurable)",
      numberOfBeds: 1
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 2
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private patio", value: true },
      { "@type": "LocationFeatureSpecification", name: "Spacious private lounge with fold-out sofa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Shower-only ensuite bathroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi & TV with Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Charlotte Rhys amenities", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hair dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Electric blankets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Down duvets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Minibar fridge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Nespresso + frother", value: true },
      { "@type": "LocationFeatureSpecification", name: "Premium teas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot chocolate", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rusks", value: true }
    ]
  }
};

export function HotelStructuredData({ type, data }: HotelStructuredDataProps) {
  useEffect(() => {
    let schema: any = {};

    switch (type) {
      case "hotel":
        // Create hotel schema with all rooms as hasPart
        const hotelRooms = Object.values(ROOM_DATA).map(room => ({
          "@id": room["@id"]
        }));

        schema = {
          "@context": "https://schema.org",
          ...HOTEL_DATA,
          hasPart: hotelRooms,
          ...data
        };
        break;

      case "hotelRoom":
        if (data?.slug && ROOM_DATA[data.slug as keyof typeof ROOM_DATA]) {
          const roomData = ROOM_DATA[data.slug as keyof typeof ROOM_DATA];
          schema = {
            "@context": "https://schema.org",
            ...roomData,
            isPartOf: {
              "@type": "Hotel",
              "@id": "https://thebrowns.co.za/#hotel",
              name: "The Browns Luxury Guest Suites",
              url: "https://thebrowns.co.za"
            },
            ...data
          };
        }
        break;

      case "breadcrumb":
        schema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data?.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
          })) || []
        };
        break;

      default:
        return;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = `hotel-structured-data-${type}`;
    
    // Remove existing script if present
    const existing = document.getElementById(`hotel-structured-data-${type}`);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`hotel-structured-data-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}
