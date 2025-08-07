import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, ExternalLink } from "lucide-react";

interface MapLocation {
  id: string;
  name: string;
  category: string;
  coordinates: [number, number];
  description: string;
  website?: string;
  phone?: string;
  distance: string;
}

const dullstroomLocations: MapLocation[] = [
  {
    id: "browns-guesthouse",
    name: "The Browns Luxury Guest Suites",
    category: "Accommodation",
    coordinates: [30.1078, -25.4167],
    description: "Luxury highland accommodation in the heart of Dullstroom",
    website: "https://thebrowns.co.za",
    distance: "0 km"
  },
  {
    id: "dullstroom-dam",
    name: "Dullstroom Dam Nature Reserve",
    category: "Fly Fishing",
    coordinates: [30.1334, -25.4100],
    description: "Premier trout fishing destination with guided services",
    distance: "3 km"
  },
  {
    id: "walkersons-hotel",
    name: "Walkersons Hotel & Spa",
    category: "Spa & Wellness",
    coordinates: [30.1089, -25.4156],
    description: "Luxury spa treatments in highland setting",
    distance: "1 km"
  },
  {
    id: "dullstroom-golf",
    name: "Dullstroom Golf Club",
    category: "Golf",
    coordinates: [30.1156, -25.4089],
    description: "Championship highland golf course",
    distance: "2 km"
  },
  {
    id: "gods-window",
    name: "God's Window",
    category: "Panorama Route",
    coordinates: [30.8833, -24.8833],
    description: "Breathtaking panoramic views of the Lowveld",
    distance: "45 km"
  },
  {
    id: "blyde-river-canyon",
    name: "Blyde River Canyon",
    category: "Panorama Route",
    coordinates: [30.8, -24.6],
    description: "One of the world's largest green canyons",
    distance: "50 km"
  }
];

interface InteractiveMapProps {
  className?: string;
}

export function InteractiveMap({ className }: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // No need to check environment variables in this setup

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [30.1078, -25.4167], // Dullstroom coordinates
      zoom: 10,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add markers for each location
    dullstroomLocations.forEach((location) => {
      const marker = new mapboxgl.Marker({
        color: location.category === 'Accommodation' ? '#8B5CF6' : '#059669'
      })
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold text-sm">${location.name}</h3>
                <p class="text-xs text-gray-600 mt-1">${location.category}</p>
                <p class="text-xs mt-2">${location.description}</p>
                <p class="text-xs font-medium mt-1">Distance: ${location.distance}</p>
              </div>
            `)
        )
        .addTo(map.current!);

      // Add click event to show details
      marker.getElement().addEventListener('click', () => {
        setSelectedLocation(location);
      });
    });

    // Fit map to show all locations
    const bounds = new mapboxgl.LngLatBounds();
    dullstroomLocations.forEach(location => bounds.extend(location.coordinates));
    map.current.fitBounds(bounds, { padding: 50 });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    if (mapboxToken && !showTokenInput) {
      initializeMap(mapboxToken);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, showTokenInput]);

  if (showTokenInput) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Interactive Dullstroom Map
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-8 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4">
              To display the interactive map, please enter your Mapbox public token.
              You can get one free at{' '}
              <a 
                href="https://mapbox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <div className="space-y-3 max-w-md mx-auto">
              <div>
                <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                <Input
                  id="mapbox-token"
                  type="text"
                  placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSI..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
              </div>
              <Button onClick={handleTokenSubmit} className="w-full">
                Load Map
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Explore Dullstroom & Surroundings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={mapContainer} className="h-96 rounded-lg shadow-inner" />
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>The Browns</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  <span>Local Attractions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedLocation ? selectedLocation.name : "Select a Location"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedLocation ? (
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">
                      {selectedLocation.category}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedLocation.description}
                    </p>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Distance from The Browns:</span>
                    <span className="ml-2">{selectedLocation.distance}</span>
                  </div>
                  {selectedLocation.website && (
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <a 
                        href={selectedLocation.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Click on any marker to see details about local attractions and activities.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}