interface LogoProps {
  className?: string;
}

export function BookingLogo({ className }: LogoProps) {
  return (
    <img 
      src="/lovable-uploads/91f4af70-cfd5-41a5-b841-4580235ae1c3.png"
      alt="Booking.com logo"
      className={className}
    />
  );
}

export function GoogleLogo({ className }: LogoProps) {
  return (
    <img 
      src="/lovable-uploads/40abdf53-a89b-43ef-8600-9305b5cea8ca.png"
      alt="Google logo"
      className={className}
    />
  );
}

export function TripAdvisorLogo({ className }: LogoProps) {
  return (
    <img 
      src="/lovable-uploads/df1ed04b-65b7-49d5-83a8-017f6338fccb.png"
      alt="TripAdvisor logo"
      className={className}
    />
  );
}