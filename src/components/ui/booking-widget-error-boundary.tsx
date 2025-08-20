import React from 'react';
import { ErrorBoundary } from './error-boundary';
import { ErrorFallback } from './error-fallback';
import { BookingWidget } from './booking-widget';

interface BookingWidgetErrorBoundaryProps {
  className?: string;
  preselectedSuite?: string;
  showRecommendations?: boolean;
}

export function BookingWidgetErrorBoundary({ className, preselectedSuite, showRecommendations }: BookingWidgetErrorBoundaryProps) {
  return (
    <ErrorBoundary
      fallback={
        <ErrorFallback
          title="Booking System Unavailable"
          description="We're experiencing issues with our booking system. Please call +27 00 000 0000 to make a reservation."
        />
      }
    >
      <BookingWidget 
        className={className} 
        preselectedSuite={preselectedSuite} 
        showRecommendations={showRecommendations} 
      />
    </ErrorBoundary>
  );
}