// Enhanced Conversion Funnel with Analytics Integration
import React, { useEffect, useCallback } from 'react';
import { useBookingTracking } from '@/hooks/use-analytics';

interface ConversionEvent {
  timestamp: Date;
  stepName: string;
  data?: any;
  sessionId: string;
}

interface FunnelStep {
  name: string;
  completed: boolean;
  timestamp?: Date;
  data?: any;
}

interface ConversionFunnel {
  sessionId: string;
  steps: FunnelStep[];
  isCompleted: boolean;
  isAbandoned: boolean;
  abandonedAt?: string;
  abandonmentReason?: string;
  totalValue?: number;
  currency?: string;
  completedAt?: Date;
  events: ConversionEvent[];
}

class EnhancedConversionFunnelTracker {
  private static instance: EnhancedConversionFunnelTracker;
  private currentFunnel: ConversionFunnel | null = null;
  private listeners: ((funnel: ConversionFunnel) => void)[] = [];

  static getInstance(): EnhancedConversionFunnelTracker {
    if (!EnhancedConversionFunnelTracker.instance) {
      EnhancedConversionFunnelTracker.instance = new EnhancedConversionFunnelTracker();
    }
    return EnhancedConversionFunnelTracker.instance;
  }

  startFunnel(sessionId?: string): string {
    const funnelSessionId = sessionId || this.generateSessionId();
    
    this.currentFunnel = {
      sessionId: funnelSessionId,
      steps: [
        { name: 'suite_view', completed: false },
        { name: 'date_selection', completed: false },
        { name: 'guest_details', completed: false },
        { name: 'payment_info', completed: false },
        { name: 'booking_confirmation', completed: false }
      ],
      isCompleted: false,
      isAbandoned: false,
      events: []
    };

    this.addEvent('funnel_start', { sessionId: funnelSessionId });
    this.notifyListeners();
    
    return funnelSessionId;
  }

  trackStep(stepName: string, data?: any): void {
    if (!this.currentFunnel) return;

    const step = this.currentFunnel.steps.find(s => s.name === stepName);
    if (step && !step.completed) {
      step.completed = true;
      step.timestamp = new Date();
      step.data = data;

      this.addEvent('step_completed', { stepName, data });
      this.notifyListeners();
    }
  }

  markAbandonment(stepName: string, reason?: string): void {
    if (!this.currentFunnel || this.currentFunnel.isCompleted) return;

    this.currentFunnel.isAbandoned = true;
    this.currentFunnel.abandonedAt = stepName;
    this.currentFunnel.abandonmentReason = reason;

    this.addEvent('funnel_abandoned', { 
      abandonedAt: stepName, 
      reason,
      completedSteps: this.currentFunnel.steps.filter(s => s.completed).length,
      totalSteps: this.currentFunnel.steps.length
    });
    
    this.notifyListeners();
  }

  completeFunnel(value?: number, currency?: string): void {
    if (!this.currentFunnel || this.currentFunnel.isAbandoned) return;

    this.currentFunnel.isCompleted = true;
    this.currentFunnel.completedAt = new Date();
    this.currentFunnel.totalValue = value;
    this.currentFunnel.currency = currency;

    // Mark final step as completed
    const finalStep = this.currentFunnel.steps[this.currentFunnel.steps.length - 1];
    if (finalStep && !finalStep.completed) {
      finalStep.completed = true;
      finalStep.timestamp = new Date();
    }

    this.addEvent('funnel_completed', { 
      value, 
      currency,
      duration: this.getFunnelDuration(),
      stepsCompleted: this.currentFunnel.steps.filter(s => s.completed).length
    });

    this.notifyListeners();
  }

  private addEvent(type: string, data?: any): void {
    if (!this.currentFunnel) return;

    this.currentFunnel.events.push({
      timestamp: new Date(),
      stepName: type,
      data,
      sessionId: this.currentFunnel.sessionId
    });
  }

  private generateSessionId(): string {
    return `funnel_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getFunnelDuration(): number {
    if (!this.currentFunnel || this.currentFunnel.events.length === 0) return 0;
    
    const startEvent = this.currentFunnel.events[0];
    const endEvent = this.currentFunnel.events[this.currentFunnel.events.length - 1];
    
    return endEvent.timestamp.getTime() - startEvent.timestamp.getTime();
  }

  subscribe(listener: (funnel: ConversionFunnel) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    if (this.currentFunnel) {
      this.listeners.forEach(listener => listener(this.currentFunnel!));
    }
  }

  getFunnelData(): ConversionFunnel | null {
    return this.currentFunnel;
  }

  getAnalytics() {
    if (!this.currentFunnel) return null;

    const completedSteps = this.currentFunnel.steps.filter(s => s.completed);
    const conversionRate = (completedSteps.length / this.currentFunnel.steps.length) * 100;

    return {
      sessionId: this.currentFunnel.sessionId,
      totalSteps: this.currentFunnel.steps.length,
      completedSteps: completedSteps.length,
      conversionRate,
      isCompleted: this.currentFunnel.isCompleted,
      isAbandoned: this.currentFunnel.isAbandoned,
      abandonedAt: this.currentFunnel.abandonedAt,
      totalValue: this.currentFunnel.totalValue,
      duration: this.getFunnelDuration(),
      events: this.currentFunnel.events
    };
  }

  reset(): void {
    this.currentFunnel = null;
    this.notifyListeners();
  }
}

// React Hook for Enhanced Conversion Funnel
export function useEnhancedConversionFunnel() {
  const [funnel, setFunnel] = React.useState<ConversionFunnel | null>(null);
  const tracker = EnhancedConversionFunnelTracker.getInstance();
  const { trackSuiteView, trackDateSelection, trackBookingAttempt, trackBookingSuccess, trackBookingAbandonment } = useBookingTracking();

  useEffect(() => {
    return tracker.subscribe(setFunnel);
  }, [tracker]);

  const startFunnel = useCallback((sessionId?: string) => {
    return tracker.startFunnel(sessionId);
  }, [tracker]);

  const trackStep = useCallback((stepName: string, data?: any) => {
    tracker.trackStep(stepName, data);
    
    // Also send to analytics service
    switch (stepName) {
      case 'suite_view':
        if (data?.suite_id && data?.suite_name) {
          trackSuiteView(data.suite_id, data.suite_name);
        }
        break;
      case 'date_selection':
        if (data?.check_in && data?.check_out && data?.guests) {
          trackDateSelection(data.check_in, data.check_out, data.guests);
        }
        break;
      case 'guest_details':
        if (data?.suite_id) {
          trackBookingAttempt(data);
        }
        break;
      case 'booking_confirmation':
        if (data?.transaction_id) {
          trackBookingSuccess(data);
        }
        break;
    }
  }, [tracker, trackSuiteView, trackDateSelection, trackBookingAttempt, trackBookingSuccess]);

  const markAbandonment = useCallback((stepName: string, reason?: string) => {
    tracker.markAbandonment(stepName, reason);
    trackBookingAbandonment(stepName, reason);
  }, [tracker, trackBookingAbandonment]);

  const completeFunnel = useCallback((value?: number, currency?: string) => {
    tracker.completeFunnel(value, currency);
  }, [tracker]);

  const getAnalytics = useCallback(() => {
    return tracker.getAnalytics();
  }, [tracker]);

  const reset = useCallback(() => {
    tracker.reset();
  }, [tracker]);

  return {
    funnel,
    startFunnel,
    trackStep,
    markAbandonment,
    completeFunnel,
    getAnalytics,
    reset
  };
}

// Export the enhanced tracker
export { EnhancedConversionFunnelTracker };