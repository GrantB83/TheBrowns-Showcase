import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  cls: number;
  fid: number;
  ttfb: number;
  score: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const ttfb = navigation.responseStart - navigation.requestStart;
      
      // Simulate other metrics (in real implementation, use web-vitals library)
      const lcp = fcp + Math.random() * 1000; // Simulate LCP
      const cls = Math.random() * 0.1; // Simulate CLS
      const fid = Math.random() * 100; // Simulate FID
      
      // Calculate performance score
      const fcpScore = fcp < 1800 ? 100 : Math.max(0, 100 - (fcp - 1800) / 10);
      const lcpScore = lcp < 2500 ? 100 : Math.max(0, 100 - (lcp - 2500) / 10);
      const clsScore = cls < 0.1 ? 100 : Math.max(0, 100 - (cls - 0.1) * 1000);
      const fidScore = fid < 100 ? 100 : Math.max(0, 100 - (fid - 100) / 2);
      const ttfbScore = ttfb < 800 ? 100 : Math.max(0, 100 - (ttfb - 800) / 5);
      
      const score = Math.round((fcpScore + lcpScore + clsScore + fidScore + ttfbScore) / 5);

      setMetrics({
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        cls: Math.round(cls * 1000) / 1000,
        fid: Math.round(fid),
        ttfb: Math.round(ttfb),
        score
      });
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  if (process.env.NODE_ENV !== 'development' || !metrics) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getMetricStatus = (value: number, good: number, poor: number) => {
    if (value <= good) return { color: 'text-green-600', icon: CheckCircle };
    if (value <= poor) return { color: 'text-yellow-600', icon: Clock };
    return { color: 'text-red-600', icon: AlertTriangle };
  };

  if (!isVisible) {
    return (
      <Button
        size="sm"
        variant="outline"
        className="fixed bottom-4 right-4 z-50"
        onClick={() => setIsVisible(true)}
      >
        <Zap className="h-4 w-4 mr-2" />
        Performance
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm flex items-center">
            <Zap className="h-4 w-4 mr-2" />
            Performance Metrics
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge className={`${getScoreColor(metrics.score)} text-white`}>
              {metrics.score}
            </Badge>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsVisible(false)}
            >
              ×
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {[
          { label: 'FCP', value: metrics.fcp, unit: 'ms', good: 1800, poor: 3000 },
          { label: 'LCP', value: metrics.lcp, unit: 'ms', good: 2500, poor: 4000 },
          { label: 'CLS', value: metrics.cls, unit: '', good: 0.1, poor: 0.25 },
          { label: 'FID', value: metrics.fid, unit: 'ms', good: 100, poor: 300 },
          { label: 'TTFB', value: metrics.ttfb, unit: 'ms', good: 800, poor: 1800 }
        ].map((metric) => {
          const status = getMetricStatus(metric.value, metric.good, metric.poor);
          const Icon = status.icon;
          
          return (
            <div key={metric.label} className="flex items-center justify-between">
              <span className="text-sm font-medium">{metric.label}</span>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${status.color}`}>
                  {metric.value}{metric.unit}
                </span>
                <Icon className={`h-3 w-3 ${status.color}`} />
              </div>
            </div>
          );
        })}
        
        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            Target: All metrics in green zone for optimal performance
          </p>
        </div>
      </CardContent>
    </Card>
  );
}