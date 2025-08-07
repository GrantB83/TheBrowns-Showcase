import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageTransition } from "@/components/ui/page-transition";
import { SkipToContent } from "@/components/ui/accessibility";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";
import { AccessibilityTester } from "@/components/ui/accessibility-tester";
import { BookingTester } from "@/components/ui/booking-tester";

export function Layout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1">
          <BreadcrumbNavigation className="container mx-auto px-4 py-4" />
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
        <PerformanceMonitor />
        <AccessibilityTester />
        <BookingTester />
      </div>
    </ErrorBoundary>
  );
}