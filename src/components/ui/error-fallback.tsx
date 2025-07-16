import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
  title?: string;
  description?: string;
}

export function ErrorFallback({ 
  error, 
  resetError, 
  title = "Something went wrong",
  description = "We encountered an unexpected error. Please try again."
}: ErrorFallbackProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            {description}
          </p>
          
          {error && process.env.NODE_ENV === 'development' && (
            <details className="bg-muted p-3 rounded text-xs">
              <summary className="cursor-pointer font-medium">Error Details</summary>
              <pre className="mt-2 overflow-auto whitespace-pre-wrap">{error.toString()}</pre>
            </details>
          )}

          {resetError && (
            <Button onClick={resetError} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Network Error Component
export function NetworkError({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorFallback
      title="Connection Error"
      description="Unable to connect to our servers. Please check your internet connection and try again."
      resetError={onRetry}
    />
  );
}

// 404 Component
export function NotFoundError() {
  return (
    <ErrorFallback
      title="Page Not Found"
      description="The page you're looking for doesn't exist. Please check the URL or return to the homepage."
      resetError={() => window.location.href = '/'}
    />
  );
}