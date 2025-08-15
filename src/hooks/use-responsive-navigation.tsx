import { useState, useEffect, useRef, useCallback } from 'react';

export interface NavigationItem {
  name: string;
  href: string;
}

interface UseResponsiveNavigationProps {
  items: NavigationItem[];
  priority: Record<string, number>;
  additionalWidth?: number; // Width for Book Now button, etc.
}

interface UseResponsiveNavigationReturn {
  visibleItems: NavigationItem[];
  overflowItems: NavigationItem[];
  hasOverflow: boolean;
  containerRef: React.RefObject<HTMLElement>;
  measureItems: () => void;
}

export function useResponsiveNavigation({
  items,
  priority,
  additionalWidth = 200 // Default space for Book Now button and More button
}: UseResponsiveNavigationProps): UseResponsiveNavigationReturn {
  const [visibleItems, setVisibleItems] = useState<NavigationItem[]>(items);
  const [overflowItems, setOverflowItems] = useState<NavigationItem[]>([]);
  const containerRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map());
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Sort items by priority (lower number = higher priority)
  const sortedItems = [...items].sort((a, b) => 
    (priority[a.name] || 99) - (priority[b.name] || 99)
  );

  const measureItems = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const availableWidth = containerWidth - additionalWidth;
    
    let currentWidth = 0;
    const visible: NavigationItem[] = [];
    const overflow: NavigationItem[] = [];
    
    // More button width (approximate)
    const moreButtonWidth = 80;
    
    for (const item of sortedItems) {
      const itemElement = itemRefs.current.get(item.name);
      if (!itemElement) continue;
      
      const itemWidth = itemElement.scrollWidth + 24; // Add padding
      const wouldNeedMoreButton = overflow.length === 0 && 
        currentWidth + itemWidth + moreButtonWidth > availableWidth;
      
      if (currentWidth + itemWidth <= availableWidth && !wouldNeedMoreButton) {
        visible.push(item);
        currentWidth += itemWidth;
      } else {
        overflow.push(item);
      }
    }

    setVisibleItems(visible);
    setOverflowItems(overflow);
  }, [sortedItems, additionalWidth]);

  // Set up ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;

    resizeObserverRef.current = new ResizeObserver(() => {
      // Debounce the measurement
      const timeoutId = setTimeout(measureItems, 100);
      return () => clearTimeout(timeoutId);
    });

    resizeObserverRef.current.observe(containerRef.current);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [measureItems]);

  // Initial measurement
  useEffect(() => {
    // Wait for DOM to settle
    const timeoutId = setTimeout(measureItems, 100);
    return () => clearTimeout(timeoutId);
  }, [measureItems]);

  // Register item refs
  const registerItemRef = useCallback((name: string, element: HTMLElement | null) => {
    if (element) {
      itemRefs.current.set(name, element);
    } else {
      itemRefs.current.delete(name);
    }
  }, []);

  // Expose registerItemRef through a custom property
  (measureItems as any).registerItemRef = registerItemRef;

  return {
    visibleItems,
    overflowItems,
    hasOverflow: overflowItems.length > 0,
    containerRef,
    measureItems
  };
}