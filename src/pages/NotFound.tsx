import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6 text-primary">404</h1>
        <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 text-fluid-base font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors min-h-[48px]"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
