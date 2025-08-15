interface LogoProps {
  className?: string;
}

export function BookingLogo({ className }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 120 32" 
      className={className}
      role="img"
      aria-label="Booking.com logo"
    >
      <rect width="120" height="32" rx="4" fill="#003580"/>
      <text 
        x="60" 
        y="20" 
        textAnchor="middle" 
        fill="white" 
        fontSize="12" 
        fontWeight="bold" 
        fontFamily="Arial, sans-serif"
      >
        Booking.com
      </text>
    </svg>
  );
}

export function GoogleLogo({ className }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 92 32" 
      className={className}
      role="img"
      aria-label="Google logo"
    >
      <g>
        <path d="M45.12 8.4a9.6 9.6 0 0 1 6.24 2.4l-2.4 2.4a6 6 0 0 0-4.08-1.68c-3.36 0-6 2.64-6 6s2.64 6 6 6a5.52 5.52 0 0 0 4.32-2.16v-1.44h-4.32v-3.12h7.44v5.28a9.6 9.6 0 0 1-7.44 3.6c-5.28 0-9.6-4.32-9.6-9.6s4.32-9.6 9.6-9.6z" fill="#4285F4"/>
        <path d="M66 8.4c5.28 0 9.6 4.32 9.6 9.6s-4.32 9.6-9.6 9.6-9.6-4.32-9.6-9.6 4.32-9.6 9.6-9.6zm0 3.6c-3.36 0-6 2.64-6 6s2.64 6 6 6 6-2.64 6-6-2.64-6-6-6z" fill="#EA4335"/>
        <path d="M86.4 8.4c5.28 0 9.6 4.32 9.6 9.6s-4.32 9.6-9.6 9.6-9.6-4.32-9.6-9.6 4.32-9.6 9.6-9.6zm0 3.6c-3.36 0-6 2.64-6 6s2.64 6 6 6 6-2.64 6-6-2.64-6-6-6z" fill="#FBBC05"/>
        <path d="M13.2 8.4v18h-3.6v-18h3.6zm8.4 0v18h-3.6v-12l-6 12h-1.2l-6-12v12h-3.6v-18h4.8l5.4 10.8 5.4-10.8h4.8z" fill="#34A853"/>
      </g>
    </svg>
  );
}

export function TripAdvisorLogo({ className }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 120 32" 
      className={className}
      role="img"
      aria-label="TripAdvisor logo"
    >
      <rect width="120" height="32" rx="4" fill="#00AA6C"/>
      <g transform="translate(8, 6)">
        {/* Owl mascot */}
        <circle cx="10" cy="10" r="8" fill="white"/>
        <circle cx="7" cy="8" r="2" fill="#00AA6C"/>
        <circle cx="13" cy="8" r="2" fill="#00AA6C"/>
        <path d="M6 12 Q10 15 14 12" stroke="#00AA6C" strokeWidth="1" fill="none"/>
        
        {/* Text */}
        <text 
          x="24" 
          y="14" 
          fill="white" 
          fontSize="10" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
        >
          TripAdvisor
        </text>
      </g>
    </svg>
  );
}