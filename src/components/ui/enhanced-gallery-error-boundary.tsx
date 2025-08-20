import React from 'react';
import { ErrorBoundary } from './error-boundary';
import { ErrorFallback } from './error-fallback';
import { EnhancedGallery } from './enhanced-gallery';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  description?: string;
}

interface EnhancedGalleryErrorBoundaryProps {
  images: GalleryImage[];
  categories?: string[];
  className?: string;
  columns?: 2 | 3 | 4;
  showCategories?: boolean;
}

export function EnhancedGalleryErrorBoundary({ images, categories, className, columns, showCategories }: EnhancedGalleryErrorBoundaryProps) {
  return (
    <ErrorBoundary
      fallback={
        <ErrorFallback
          title="Gallery Loading Error"
          description="We're having trouble displaying the image gallery. Please refresh the page to try again."
        />
      }
    >
      <EnhancedGallery 
        images={images} 
        categories={categories} 
        className={className} 
        columns={columns} 
        showCategories={showCategories} 
      />
    </ErrorBoundary>
  );
}