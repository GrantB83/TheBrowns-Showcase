import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Keyboard, Volume2, Palette, CheckCircle, AlertTriangle, X } from 'lucide-react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  suggestion?: string;
}

export function AccessibilityTester() {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const runAccessibilityTests = () => {
    setIsRunning(true);
    const foundIssues: AccessibilityIssue[] = [];

    // Check for missing alt attributes
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      foundIssues.push({
        type: 'error',
        message: `Image missing alt attribute`,
        element: `Image ${index + 1}`,
        suggestion: 'Add descriptive alt text for screen readers'
      });
    });

    // Check for low contrast ratios (simplified)
    const elements = document.querySelectorAll('*');
    elements.forEach((element, index) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color === 'rgb(255, 255, 255)' && backgroundColor === 'rgb(255, 255, 255)') {
        foundIssues.push({
          type: 'error',
          message: 'White text on white background detected',
          element: `Element ${index + 1}`,
          suggestion: 'Ensure sufficient color contrast (4.5:1 for normal text)'
        });
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input, index) => {
      const hasLabel = document.querySelector(`label[for="${input.id}"]`);
      const inputElement = input as HTMLInputElement;
      if (!hasLabel && inputElement.type !== 'hidden') {
        foundIssues.push({
          type: 'warning',
          message: 'Form input missing label',
          element: `Input ${index + 1}`,
          suggestion: 'Add proper label or aria-label attribute'
        });
      }
    });

    // Check for keyboard navigation
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) {
      foundIssues.push({
        type: 'warning',
        message: 'No focusable elements found',
        suggestion: 'Ensure interactive elements are keyboard accessible'
      });
    }

    // Check for heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (index === 0 && currentLevel !== 1) {
        foundIssues.push({
          type: 'warning',
          message: 'Page should start with h1',
          element: `${heading.tagName} ${index + 1}`,
          suggestion: 'Use proper heading hierarchy starting with h1'
        });
      } else if (currentLevel > previousLevel + 1) {
        foundIssues.push({
          type: 'warning',
          message: 'Heading hierarchy skipped',
          element: `${heading.tagName} ${index + 1}`,
          suggestion: 'Do not skip heading levels'
        });
      }
      previousLevel = currentLevel;
    });

    // Add some positive findings
    if (foundIssues.length === 0) {
      foundIssues.push({
        type: 'info',
        message: 'No accessibility issues found in basic tests',
        suggestion: 'Consider running more comprehensive accessibility tools'
      });
    }

    setIssues(foundIssues);
    setIsRunning(false);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isVisible) {
      runAccessibilityTests();
    }
  }, [isVisible]);

  if (process.env.NODE_ENV !== 'development') return null;

  if (!isVisible) {
    return (
      <Button
        size="sm"
        variant="outline"
        className="fixed bottom-16 right-4 z-50"
        onClick={() => setIsVisible(true)}
      >
        <Eye className="h-4 w-4 mr-2" />
        A11y Test
      </Button>
    );
  }

  const errorCount = issues.filter(issue => issue.type === 'error').length;
  const warningCount = issues.filter(issue => issue.type === 'warning').length;
  const infoCount = issues.filter(issue => issue.type === 'info').length;

  return (
    <Card className="fixed bottom-16 right-4 z-50 w-96 max-h-96 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm flex items-center">
            <Eye className="h-4 w-4 mr-2" />
            Accessibility Tests
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant={errorCount > 0 ? 'destructive' : 'default'}>
              {errorCount} errors
            </Badge>
            <Badge variant={warningCount > 0 ? 'secondary' : 'default'}>
              {warningCount} warnings
            </Badge>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="issues" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="issues">Issues</TabsTrigger>
            <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
            <TabsTrigger value="color">Color</TabsTrigger>
          </TabsList>
          
          <TabsContent value="issues" className="p-4 max-h-64 overflow-y-auto">
            {isRunning ? (
              <div className="text-center text-sm text-muted-foreground">
                Running accessibility tests...
              </div>
            ) : (
              <div className="space-y-3">
                {issues.map((issue, index) => {
                  const Icon = issue.type === 'error' ? AlertTriangle : 
                              issue.type === 'warning' ? Volume2 : CheckCircle;
                  const iconColor = issue.type === 'error' ? 'text-red-500' : 
                                   issue.type === 'warning' ? 'text-yellow-500' : 'text-green-500';
                  
                  return (
                    <div key={index} className="border-l-2 border-l-muted pl-3">
                      <div className="flex items-start gap-2">
                        <Icon className={`h-4 w-4 mt-0.5 ${iconColor}`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{issue.message}</p>
                          {issue.element && (
                            <p className="text-xs text-muted-foreground">{issue.element}</p>
                          )}
                          {issue.suggestion && (
                            <p className="text-xs text-blue-600 mt-1">{issue.suggestion}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={runAccessibilityTests}
                  className="w-full mt-3"
                >
                  Rerun Tests
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="keyboard" className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Keyboard className="h-4 w-4" />
                <span className="text-sm font-medium">Keyboard Navigation</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Tab: Navigate forward</p>
                <p>• Shift+Tab: Navigate backward</p>
                <p>• Enter/Space: Activate buttons</p>
                <p>• Arrow keys: Navigate menus</p>
                <p>• Escape: Close dialogs</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  const focusable = document.querySelector('button, [href], input') as HTMLElement;
                  focusable?.focus();
                }}
              >
                Test Focus
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="color" className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="text-sm font-medium">Color Contrast</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Normal text: 4.5:1 contrast ratio</p>
                <p>• Large text: 3:1 contrast ratio</p>
                <p>• Interactive elements: Clear focus indicators</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-primary text-primary-foreground p-2 rounded">
                  Primary Text
                </div>
                <div className="bg-secondary text-secondary-foreground p-2 rounded">
                  Secondary Text
                </div>
                <div className="bg-muted text-muted-foreground p-2 rounded">
                  Muted Text
                </div>
                <div className="bg-accent text-accent-foreground p-2 rounded">
                  Accent Text
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}