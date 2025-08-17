import { useState, useEffect, useCallback } from "react";

interface ConversionEvent {
  event: string;
  timestamp: Date;
  data?: any;
  userId?: string;
  sessionId?: string;
}

interface FunnelStep {
  name: string;
  completed: boolean;
  timestamp?: Date;
  dropOffReason?: string;
}

interface ConversionFunnel {
  sessionId: string;
  startTime: Date;
  steps: FunnelStep[];
  completed: boolean;
  abandonedAt?: string;
  conversionTime?: number;
}

// Conversion funnel steps for booking process
const BOOKING_FUNNEL_STEPS = [
  'page_view',
  'dates_selected', 
  'suite_viewed',
  'booking_widget_opened',
  'form_started',
  'form_completed',
  'booking_initiated',
  'booking_completed'
];

class ConversionFunnelTracker {
  private static instance: ConversionFunnelTracker;
  private currentFunnel: ConversionFunnel | null = null;
  private events: ConversionEvent[] = [];
  private listeners: Array<(funnel: ConversionFunnel) => void> = [];

  static getInstance() {
    if (!ConversionFunnelTracker.instance) {
      ConversionFunnelTracker.instance = new ConversionFunnelTracker();
    }
    return ConversionFunnelTracker.instance;
  }

  startFunnel(sessionId?: string) {
    const funnelSessionId = sessionId || `funnel_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.currentFunnel = {
      sessionId: funnelSessionId,
      startTime: new Date(),
      steps: BOOKING_FUNNEL_STEPS.map(step => ({
        name: step,
        completed: false
      })),
      completed: false
    };

    this.trackEvent('funnel_started', { sessionId: funnelSessionId });
    this.notifyListeners();
    
    return funnelSessionId;
  }

  trackStep(stepName: string, data?: any) {
    if (!this.currentFunnel) {
      this.startFunnel();
    }

    const funnel = this.currentFunnel!;
    const stepIndex = funnel.steps.findIndex(step => step.name === stepName);
    
    if (stepIndex !== -1 && !funnel.steps[stepIndex].completed) {
      funnel.steps[stepIndex].completed = true;
      funnel.steps[stepIndex].timestamp = new Date();
      
      this.trackEvent(`step_completed_${stepName}`, {
        sessionId: funnel.sessionId,
        stepIndex,
        stepName,
        ...data
      });

      // Check if funnel is completed
      if (stepName === 'booking_completed') {
        funnel.completed = true;
        funnel.conversionTime = Date.now() - funnel.startTime.getTime();
        
        this.trackEvent('funnel_completed', {
          sessionId: funnel.sessionId,
          conversionTime: funnel.conversionTime,
          totalSteps: funnel.steps.length
        });
      }

      this.notifyListeners();
    }
  }

  markAbandonment(stepName: string, reason?: string) {
    if (!this.currentFunnel || this.currentFunnel.completed) return;

    this.currentFunnel.abandonedAt = stepName;
    
    const stepIndex = this.currentFunnel.steps.findIndex(step => step.name === stepName);
    if (stepIndex !== -1) {
      this.currentFunnel.steps[stepIndex].dropOffReason = reason;
    }

    this.trackEvent('funnel_abandoned', {
      sessionId: this.currentFunnel.sessionId,
      abandonedAt: stepName,
      reason,
      completedSteps: this.currentFunnel.steps.filter(s => s.completed).length,
      totalSteps: this.currentFunnel.steps.length
    });

    this.notifyListeners();
  }

  private trackEvent(event: string, data?: any) {
    const conversionEvent: ConversionEvent = {
      event,
      timestamp: new Date(),
      data,
      sessionId: this.currentFunnel?.sessionId
    };

    this.events.push(conversionEvent);

    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, {
        event_category: 'conversion_funnel',
        event_label: this.currentFunnel?.sessionId || 'unknown',
        custom_parameters: data
      });
    }

    // Keep only last 100 events to prevent memory issues
    if (this.events.length > 100) {
      this.events = this.events.slice(-100);
    }
  }

  getFunnelData() {
    return this.currentFunnel;
  }

  getAnalytics() {
    if (!this.currentFunnel) return null;

    const completedSteps = this.currentFunnel.steps.filter(s => s.completed);
    const dropOffStep = this.currentFunnel.abandonedAt;
    
    return {
      sessionId: this.currentFunnel.sessionId,
      completionRate: (completedSteps.length / this.currentFunnel.steps.length) * 100,
      timeInFunnel: Date.now() - this.currentFunnel.startTime.getTime(),
      completedSteps: completedSteps.length,
      totalSteps: this.currentFunnel.steps.length,
      dropOffStep,
      isCompleted: this.currentFunnel.completed,
      conversionTime: this.currentFunnel.conversionTime
    };
  }

  subscribe(listener: (funnel: ConversionFunnel) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    if (this.currentFunnel) {
      this.listeners.forEach(listener => listener(this.currentFunnel!));
    }
  }

  reset() {
    this.currentFunnel = null;
    this.events = [];
    this.notifyListeners();
  }
}

// Hook for using conversion funnel tracking
export function useConversionFunnel() {
  const [funnel, setFunnel] = useState<ConversionFunnel | null>(null);
  const tracker = ConversionFunnelTracker.getInstance();

  useEffect(() => {
    const unsubscribe = tracker.subscribe(setFunnel);
    return unsubscribe;
  }, [tracker]);

  const startFunnel = useCallback((sessionId?: string) => {
    return tracker.startFunnel(sessionId);
  }, [tracker]);

  const trackStep = useCallback((stepName: string, data?: any) => {
    tracker.trackStep(stepName, data);
  }, [tracker]);

  const markAbandonment = useCallback((stepName: string, reason?: string) => {
    tracker.markAbandonment(stepName, reason);
  }, [tracker]);

  const getAnalytics = useCallback(() => {
    return tracker.getAnalytics();
  }, [tracker]);

  const resetFunnel = useCallback(() => {
    tracker.reset();
  }, [tracker]);

  return {
    funnel,
    startFunnel,
    trackStep,
    markAbandonment,
    getAnalytics,
    resetFunnel
  };
}

export { ConversionFunnelTracker };
