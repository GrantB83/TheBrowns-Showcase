import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Users, Bed, Coffee, Tv, Wifi, Car } from "lucide-react";

interface SuiteFeature {
  feature: string;
  luxurySuites: boolean;
  cottageSuites: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

const suiteComparison: SuiteFeature[] = [
  { feature: "Maximum Occupancy", luxurySuites: true, cottageSuites: true, icon: Users },
  { feature: "Ensuite Bathrooms", luxurySuites: true, cottageSuites: true, icon: Bed },
  { feature: "Nespresso Machine", luxurySuites: true, cottageSuites: true, icon: Coffee },
  { feature: "Netflix & DStv", luxurySuites: true, cottageSuites: true, icon: Tv },
  { feature: "Free WiFi", luxurySuites: true, cottageSuites: true, icon: Wifi },
  { feature: "Secure Parking", luxurySuites: true, cottageSuites: true, icon: Car },
  { feature: "Private Entrance", luxurySuites: true, cottageSuites: true },
  { feature: "Self-Catering Kitchen", luxurySuites: true, cottageSuites: true },
  { feature: "Braai Facilities", luxurySuites: true, cottageSuites: true },
  { feature: "Electric Blankets", luxurySuites: true, cottageSuites: true },
  { feature: "Hot Water Bottles", luxurySuites: true, cottageSuites: true },
  { feature: "Charlotte Rhys Toiletries", luxurySuites: false, cottageSuites: true },
  { feature: "Modern Elegant Design", luxurySuites: true, cottageSuites: false },
  { feature: "Cozy Fireplace", luxurySuites: false, cottageSuites: true },
  { feature: "Vintage Charm Elements", luxurySuites: false, cottageSuites: true },
  { feature: "Contemporary Luxury", luxurySuites: true, cottageSuites: false }
];

const suiteDetails = {
  luxury: {
    name: "Luxury Guest Suites",
    rooms: "4 Ensuite Rooms",
    capacity: "10 Adults + 2 Children",
    style: "Modern Luxury",
    price: "From R1,200/night",
    highlights: ["Elegant appointments", "Premium amenities", "Modern comfort"],
    badge: "Most Popular"
  },
  cottage: {
    name: "Cottage Suites", 
    rooms: "3 Available Rooms",
    capacity: "6 Adults + 1 Child",
    style: "Charming Comfort",
    price: "From R900/night",
    highlights: ["Cozy fireplaces", "Vintage charm", "Traditional comfort"],
    badge: "Best Value"
  }
};

export function SuiteComparisonTable() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Suite Comparison Guide</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare our luxury accommodation options to find the perfect fit for your Dullstroom stay
        </p>
      </div>

      {/* Quick Comparison Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">{suiteDetails.luxury.badge}</Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-primary">{suiteDetails.luxury.name}</CardTitle>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Rooms:</strong> {suiteDetails.luxury.rooms}</p>
              <p><strong>Capacity:</strong> {suiteDetails.luxury.capacity}</p>
              <p><strong>Style:</strong> {suiteDetails.luxury.style}</p>
              <p className="text-primary font-semibold">{suiteDetails.luxury.price}</p>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 mb-4">
              {suiteDetails.luxury.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
            <Button className="w-full" asChild>
              <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                Book Luxury Suites
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">{suiteDetails.cottage.badge}</Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-primary">{suiteDetails.cottage.name}</CardTitle>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Rooms:</strong> {suiteDetails.cottage.rooms}</p>
              <p><strong>Capacity:</strong> {suiteDetails.cottage.capacity}</p>
              <p><strong>Style:</strong> {suiteDetails.cottage.style}</p>
              <p className="text-primary font-semibold">{suiteDetails.cottage.price}</p>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 mb-4">
              {suiteDetails.cottage.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                Book Cottage Suites
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Feature Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Feature Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-semibold">Features</th>
                  <th className="text-center py-3 px-2 font-semibold">Luxury Suites</th>
                  <th className="text-center py-3 px-2 font-semibold">Cottage Suites</th>
                </tr>
              </thead>
              <tbody>
                {suiteComparison.map((item, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                        <span className="text-sm font-medium">{item.feature}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-2">
                      {item.luxurySuites ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-3 px-2">
                      {item.cottageSuites ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* AI-Digestible Summary */}
      <Card className="bg-muted/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge variant="secondary">AI Summary</Badge>
            Suite Selection Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Choose Luxury Suites For:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Groups of 8-12 people</li>
                <li>• Modern luxury preference</li>
                <li>• Business or special occasions</li>
                <li>• Contemporary amenities focus</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Choose Cottage Suites For:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Intimate groups of 4-7 people</li>
                <li>• Cozy, traditional atmosphere</li>
                <li>• Romantic getaways</li>
                <li>• Budget-conscious luxury seekers</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground pt-2 border-t border-border/50">
            Both properties offer identical premium amenities including Nespresso machines, Netflix, luxury toiletries, 
            secure parking, and self-catering facilities. The choice comes down to preferred style and group size.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}