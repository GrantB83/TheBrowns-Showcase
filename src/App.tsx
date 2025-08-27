import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnalyticsProvider } from "@/components/layout/AnalyticsProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { MobileQuickActionsProvider } from "@/hooks/use-mobile-quick-actions";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";

// Lazy load all components with error handling
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Suites = lazy(() => import("./pages/Suites"));
const Gallery = lazy(() => import("./pages/Gallery"));
const DullstroomGuide = lazy(() => import("./pages/DullstroomGuide"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AnalyticsProvider>
        <MobileQuickActionsProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <Index />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="about" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <About />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="accommodation" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <Suites />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="accommodations" element={<Navigate to="/accommodation" replace />} />
                <Route path="suites" element={<Navigate to="/accommodation" replace />} />
                <Route path="gallery" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <Gallery />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="activities" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <Blog />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="dullstroom-accommodation-travel-guide" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <DullstroomGuide />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="contact" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <Contact />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="blog" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <Blog />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="blog/:slug" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <BlogPost />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="privacy" element={
                  <ErrorBoundary>
                    <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                      <Privacy />
                    </Suspense>
                  </ErrorBoundary>
                } />
              </Route>
              <Route path="*" element={
                <ErrorBoundary>
                  <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
                    <NotFound />
                  </Suspense>
                </ErrorBoundary>
              } />
            </Routes>
          </BrowserRouter>
        </MobileQuickActionsProvider>
      </AnalyticsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
