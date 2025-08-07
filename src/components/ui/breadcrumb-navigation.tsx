import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

interface BreadcrumbNavigationProps {
  className?: string;
}

const routeLabels: Record<string, string> = {
  "": "Home",
  "about": "About",
  "accommodations": "Accommodations", 
  "suites": "Accommodations", // Legacy route mapping
  "gallery": "Gallery",
  "activities": "Activities",
  "location": "Location",
  "contact": "Contact",
  "booking": "Booking",
  "pay-what-you-can": "Pay What You Can",
  "blog": "Blog",
  "privacy": "Privacy Policy"
};

export function BreadcrumbNavigation({ className }: BreadcrumbNavigationProps) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className={className} aria-label="Breadcrumb navigation">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Home className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only">Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const label = routeLabels[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <div key={routeTo} className="flex items-center">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="font-medium">
                      {label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={routeTo} className="hover:text-primary transition-colors">
                        {label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}