interface LogoProps {
  className?: string;
}

export function BookingLogo({ className }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 140 32" 
      className={className}
      role="img"
      aria-label="Booking.com logo"
    >
      <rect width="140" height="32" rx="2" fill="#003B95"/>
      <text 
        x="12" 
        y="21" 
        fill="white" 
        fontSize="16" 
        fontWeight="700" 
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Booking
      </text>
      <text 
        x="82" 
        y="21" 
        fill="white" 
        fontSize="16" 
        fontWeight="400" 
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        .com
      </text>
    </svg>
  );
}

export function GoogleLogo({ className }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 120 32" 
      className={className}
      role="img"
      aria-label="Google logo"
    >
      <g>
        {/* G */}
        <path d="M16.2 10.8c0-1.2-.1-2.3-.3-3.4H8.2v6.4h4.5c-.2 1.1-.8 2.1-1.7 2.7v2.2h2.7c1.6-1.5 2.5-3.7 2.5-6.3z" fill="#4285F4"/>
        <path d="M8.2 20c2.3 0 4.2-.8 5.6-2.1l-2.7-2.1c-.8.5-1.8.8-2.9.8-2.2 0-4.1-1.5-4.8-3.5H0.6v2.2c1.4 2.8 4.3 4.7 7.6 4.7z" fill="#34A853"/>
        <path d="M3.4 12.9c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V7.3H0.6c-.6 1.2-.9 2.5-.9 3.9s.3 2.7.9 3.9l2.8-2.2z" fill="#FBBC04"/>
        <path d="M8.2 6.4c1.3 0 2.4.4 3.3 1.2l2.5-2.5C12.4 3.8 10.5 3 8.2 3 4.9 3 2 4.9.6 7.7l2.8 2.2c.7-2 2.6-3.5 4.8-3.5z" fill="#EA4335"/>
        
        {/* oogle text */}
        <text x="22" y="17" fill="#5F6368" fontSize="14" fontWeight="400" fontFamily="Google Sans, arial, sans-serif">oogle</text>
      </g>
    </svg>
  );
}

export function TripAdvisorLogo({ className }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 140 32" 
      className={className}
      role="img"
      aria-label="TripAdvisor logo"
    >
      <g>
        {/* Owl mascot */}
        <circle cx="16" cy="16" r="14" fill="#34E0A1" stroke="#34E0A1" strokeWidth="1"/>
        <circle cx="16" cy="16" r="12" fill="white"/>
        
        {/* Owl eyes */}
        <circle cx="12" cy="14" r="3" fill="none" stroke="#34E0A1" strokeWidth="2"/>
        <circle cx="20" cy="14" r="3" fill="none" stroke="#34E0A1" strokeWidth="2"/>
        <circle cx="12" cy="14" r="1.5" fill="#34E0A1"/>
        <circle cx="20" cy="14" r="1.5" fill="#34E0A1"/>
        
        {/* Owl beak */}
        <path d="M16 17 L14 19 L18 19 Z" fill="#34E0A1"/>
        
        {/* Wings */}
        <circle cx="6" cy="18" r="4" fill="none" stroke="#34E0A1" strokeWidth="1.5"/>
        <circle cx="26" cy="18" r="4" fill="none" stroke="#34E0A1" strokeWidth="1.5"/>
        
        {/* Text */}
        <text 
          x="38" 
          y="11" 
          fill="#333" 
          fontSize="7" 
          fontWeight="700" 
          fontFamily="system-ui, sans-serif"
        >
          Trip
        </text>
        <text 
          x="38" 
          y="21" 
          fill="#333" 
          fontSize="7" 
          fontWeight="700" 
          fontFamily="system-ui, sans-serif"
        >
          Advisor
        </text>
      </g>
    </svg>
  );
}