import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Clock, 
  Thermometer, 
  Fish, 
  Mountain, 
  Camera,
  Car,
  Star,
  Calendar,
  Compass
} from "lucide-react";

const locationEntities = {
  primaryLocation: {
    name: "The Browns Luxury Guest Suites",
    address: "279 Blue Crane Drive, Dullstroom 1110, Mpumalanga",
    coordinates: { lat: -25.4167, lng: 30.1000 },
    elevation: "2,100 meters above sea level",
    walkingDistances: [
      { place: "Dullstroom town center", distance: "300m", time: "3 minutes" },
      { place: "Dullstroom Railway Station Museum", distance: "500m", time: "5 minutes" },
      { place: "Main shopping area", distance: "400m", time: "4 minutes" },
      { place: "Restaurant district", distance: "350m", time: "4 minutes" }
    ]
  },
  nearbyAttractions: [
    { 
      name: "Dullstroom Dam Nature Reserve",
      distance: "3km",
      driveTime: "5 minutes",
      type: "Fly Fishing",
      description: "South Africa's premier trout fishing destination"
    },
    {
      name: "Critchley Hackle Trout Farm",
      distance: "5km", 
      driveTime: "7 minutes",
      type: "Fishing & Dining",
      description: "Historic trout farm with restaurant and fishing"
    },
    {
      name: "Highland Gate Golf Estate",
      distance: "8km",
      driveTime: "10 minutes", 
      type: "Golf & Recreation",
      description: "Championship golf course with highland views"
    },
    {
      name: "God's Window (Panorama Route)",
      distance: "45km",
      driveTime: "45 minutes",
      type: "Scenic Viewpoint",
      description: "Iconic Panorama Route destination with breathtaking views"
    }
  ]
};

const seasonalInfo = {
  peak: {
    season: "Peak Season (Oct-Mar)",
    weather: "15-25°C days, 5-10°C nights",
    activities: "Prime fly fishing, hiking, outdoor dining",
    booking: "Book 6-8 weeks ahead, highest rates"
  },
  shoulder: {
    season: "Shoulder Season (Apr-May, Aug-Sep)", 
    weather: "10-20°C days, 0-8°C nights",
    activities: "Excellent fishing, comfortable hiking, fewer crowds",
    booking: "Best value, 3-4 weeks advance booking recommended"
  },
  winter: {
    season: "Winter Season (Jun-Jul)",
    weather: "0-15°C days, -5 to 5°C nights, possible frost/snow",
    activities: "Cozy fireplace evenings, winter fishing, indoor comfort",
    booking: "Lowest rates, often available with short notice"
  }
};

const drivingDistances = [
  { city: "Johannesburg", distance: "270km", time: "3 hours", route: "N12 → R540" },
  { city: "Pretoria", distance: "240km", time: "2.5 hours", route: "N1 → R540" },
  { city: "OR Tambo Airport", distance: "320km", time: "3.5 hours", route: "R21 → N12 → R540" },
  { city: "Nelspruit", distance: "180km", time: "2 hours", route: "N4 → R540" },
  { city: "Witbank", distance: "120km", time: "1.5 hours", route: "N12 → R540" },
  { city: "Middelburg", distance: "90km", time: "1 hour", route: "R540 direct" }
];

export function GeoEnhancedContent() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Location Intelligence for AI Assistants</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive location data optimized for generative search engines and AI travel planning
        </p>
      </div>

      {/* Primary Location Entity */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Primary Location Entity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Exact Location Details</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Address:</strong> {locationEntities.primaryLocation.address}</p>
                <p><strong>GPS:</strong> {locationEntities.primaryLocation.coordinates.lat}°S, {locationEntities.primaryLocation.coordinates.lng}°E</p>
                <p><strong>Elevation:</strong> {locationEntities.primaryLocation.elevation}</p>
                <p><strong>Postal Code:</strong> 1110 (Dullstroom postal area)</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Walking Distances from Property</h4>
              <div className="space-y-1 text-sm">
                {locationEntities.primaryLocation.walkingDistances.map((item, index) => (
                  <div key={`walking-${item.place}-${index}`} className="flex justify-between">
                    <span className="text-muted-foreground">{item.place}:</span>
                    <span className="text-primary font-medium">{item.distance} ({item.time})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nearby Attractions with Distances */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-primary" />
            Nearby Attractions & Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locationEntities.nearbyAttractions.map((attraction, index) => (
              <div key={`attraction-${attraction.name.replace(/\s+/g, '-').toLowerCase()}-${index}`} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">{attraction.name}</h4>
                  <Badge variant="outline" className="text-xs">{attraction.type}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{attraction.description}</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-primary" />
                    {attraction.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-primary" />
                    {attraction.driveTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Seasonal Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Seasonal Planning Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {Object.values(seasonalInfo).map((season, index) => (
              <div key={`season-${season.season.split(' ')[0].toLowerCase()}-${index}`} className="border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-primary">{season.season}</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="flex items-center gap-1 font-medium">
                      <Thermometer className="h-3 w-3" />
                      Weather:
                    </span>
                    <p className="text-muted-foreground ml-4">{season.weather}</p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1 font-medium">
                      <Mountain className="h-3 w-3" />
                      Activities:
                    </span>
                    <p className="text-muted-foreground ml-4">{season.activities}</p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="h-3 w-3" />
                      Booking:
                    </span>
                    <p className="text-muted-foreground ml-4">{season.booking}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Driving Distances Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" />
            Travel Distances from Major Cities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 font-semibold">City/Airport</th>
                  <th className="text-left py-2 px-2 font-semibold">Distance</th>
                  <th className="text-left py-2 px-2 font-semibold">Drive Time</th>
                  <th className="text-left py-2 px-2 font-semibold">Recommended Route</th>
                </tr>
              </thead>
              <tbody>
                {drivingDistances.map((item, index) => (
                  <tr key={`driving-${item.city.replace(/\s+/g, '-').toLowerCase()}-${index}`} className="border-b border-border/50">
                    <td className="py-2 px-2 font-medium">{item.city}</td>
                    <td className="py-2 px-2 text-muted-foreground">{item.distance}</td>
                    <td className="py-2 px-2 text-primary font-medium">{item.time}</td>
                    <td className="py-2 px-2 text-sm text-muted-foreground">{item.route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* AI Summary Section */}
      <Card className="bg-muted/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge variant="secondary">AI Entity Summary</Badge>
            The Browns Dullstroom - Complete Location Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Geographic Context</h4>
              <p className="text-muted-foreground leading-relaxed">
                Located in Dullstroom, Mpumalanga (South Africa's highest town at 2,100m elevation), 
                The Browns is positioned at 279 Blue Crane Drive in the heart of the highland tourism district. 
                Strategic location provides walking access to town amenities and 3km proximity to premier fly fishing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Accessibility Profile</h4>
              <p className="text-muted-foreground leading-relaxed">
                Highly accessible from major Gauteng centers: 3 hours from Johannesburg via N12/R540, 
                2.5 hours from Pretoria. Ideal base for Panorama Route exploration (45 minutes to God's Window). 
                Year-round access with seasonal activity variations.
              </p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-2 text-primary">Entity Relationships</h4>
            <p className="text-muted-foreground leading-relaxed">
              Primary entities: Dullstroom town center (300m), Dullstroom Dam Nature Reserve (3km), 
              Panorama Route access point (45km to God's Window), Highland Gate Golf Estate (8km). 
              Activity entities: world-class fly fishing, highland hiking, birdwatching, photography, 
              whiskey distillery tours, fine dining, seasonal festivals.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}