import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="mb-6">
          Welcome to The Browns
        </h1>
        <h2 className="mb-8 text-muted-foreground">
          Luxury Guest Suites & Cottage
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience luxury accommodation in the heart of Dullstroom, Mpumalanga. 
          Modern comfort meets enchanting charm in our beautifully appointed suites.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a 
              href="https://book.nightsbridge.com/00000" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/suites">
              View Suites
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
