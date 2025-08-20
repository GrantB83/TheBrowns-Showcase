import React from 'react';
import { ErrorBoundary } from './error-boundary';
import { ErrorFallback } from './error-fallback';
import { SuiteGallery } from './suite-gallery';

interface SuiteGalleryErrorBoundaryProps {
  suiteSlug: string;
  suiteName: string;
  className?: string;
}

export function SuiteGalleryErrorBoundary({ suiteSlug, suiteName, className }: SuiteGalleryErrorBoundaryProps) {
  return (
    <ErrorBoundary
      fallback={
        <ErrorFallback
          title="Gallery Unavailable"
          description="We're having trouble loading the suite gallery. Please try refreshing the page."
        />
      }
    >
      <SuiteGallery suiteSlug={suiteSlug} suiteName={suiteName} className={className} />
    </ErrorBoundary>
  );
}