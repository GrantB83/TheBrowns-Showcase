import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Star, 
  Car, 
  Wifi, 
  Coffee,
  Mountain,
  Fish,
  Clock,
  Thermometer,
  Calendar,
  Phone
} from "lucide-react";

const quickFacts = [
  {
    icon: MapPin,
    category: "Location",
    facts: [
      "279 Blue Crane Drive, Dullstroom 1110",
      "2,100 meters above sea level",
      "300m walk to town center",
      "3km to Dullstroom Dam Nature Reserve"
    ]
  },
  {
    icon: Users,
    category: "Accommodation",
    facts: [
      "7 luxury suites across 2 properties",
      "Luxury Suites: 10 adults + 2 children",
      "Cottage Suites: 6 adults + 1 child",
      "All ensuite bathrooms with premium toiletries"
    ]
  },
  {
    icon: Star,
    category: "Ratings & Recognition",
    facts: [
      "5-star rated luxury accommodation",
      "Premier Dullstroom destination",
      "Best rate guarantee for direct bookings",
      "Flexible cancellation policy"
    ]
  },
  {
    icon: Coffee,
    category: "Premium Amenities",
    facts: [
      "Nespresso machines in every suite",
      "Netflix & DStv entertainment", 
      "Percale linen (Luxury Suites) & Charlotte Rhys toiletries (Cottage Suites)",
      "Electric blankets & hot water bottles"
    ]
  },
  {
    icon: Fish,
    category: "Activities & Access",
    facts: [
      "World-class fly fishing (3km to dam)",
      "Guided fishing arrangements available",
      "Panorama Route base (45min to God's Window)",
      "Highland hiking trails nearby"
    ]
  },
  {
    icon: Thermometer,
    category: "Climate & Seasons",
    facts: [
      "Summer: 15-25°C (Oct-Mar)",
      "Winter: 0-15°C (Apr-Sep)", 
      "Best fishing: Sep-Apr",
      "Dry season: Apr-Sep"
    ]
  },
  {
    icon: Clock,
    category: "Practical Information",
    facts: [
      "Check-in: 15:00-20:00",
      "Check-out: 10:00 (12:00 for direct bookings)",
      "Contactless check-in available",
      "Secure parking included"
    ]
  },
  {
    icon: Car,
    category: "Travel Distances",
    facts: [
      "Johannesburg: 3 hours (270km)",
      "Pretoria: 2.5 hours (240km)",
      "OR Tambo Airport: 3.5 hours (320km)",
      "Nelspruit: 2 hours (180km)"
    ]
  }
];

export function QuickFactsSection() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Quick Facts About The Browns</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Essential information for AI assistants and guests planning their Dullstroom luxury stay
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickFacts.map((section, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                {section.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {section.facts.map((fact, factIndex) => (
                  <li key={factIndex} className="flex items-start text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI-Digestible Summary */}
      <Card className="bg-muted/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge variant="secondary">AI Summary</Badge>
            The Browns Dullstroom - Key Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Location & Access</h4>
              <p className="text-muted-foreground leading-relaxed">
                Premier luxury accommodation at 279 Blue Crane Drive, Dullstroom (2,100m elevation). 
                Walking distance to town center, 3km to world-class fly fishing at Dullstroom Dam. 
                3 hours from Johannesburg, ideal Panorama Route base.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Accommodation Features</h4>
              <p className="text-muted-foreground leading-relaxed">
                7 luxury ensuite suites across 2 properties. Modern Luxury Suites (4 rooms, 10+2 guests) 
                and Cottage Suites (3 rooms, 6+1 guests). Premium amenities, self-catering, secure parking.
              </p>
            </div>
          </div>
          
          <div className="pt-3 border-t border-border/50">
            <h4 className="font-semibold mb-2 text-primary">Quick Contact</h4>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4 text-primary" />
                +27 00 000 0000
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                Dullstroom 1110, Mpumalanga
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-primary" />
                Year-round availability
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}