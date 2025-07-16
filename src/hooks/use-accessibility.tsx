import { useState, useEffect } from 'react';

export function useAccessibility() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const highContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setIsHighContrast(highContrast);
    setReduceMotion(motionReduced);

    // Apply CSS variables based on preferences
    if (motionReduced) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
  }, []);

  const increaseFontSize = () => {
    setFontSize('large');
    document.documentElement.style.fontSize = '18px';
  };

  const decreaseFontSize = () => {
    setFontSize('small');
    document.documentElement.style.fontSize = '14px';
  };

  const resetFontSize = () => {
    setFontSize('normal');
    document.documentElement.style.fontSize = '16px';
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  return {
    isHighContrast,
    fontSize,
    reduceMotion,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast
  };
}

// Hook for focus management
export function useFocusManagement() {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);

  const trapFocus = (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  };

  const restoreFocus = () => {
    if (focusedElement) {
      focusedElement.focus();
      setFocusedElement(null);
    }
  };

  const saveFocus = () => {
    setFocusedElement(document.activeElement as HTMLElement);
  };

  return { trapFocus, restoreFocus, saveFocus };
}