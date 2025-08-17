import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ScrollRestoration } from "@/components/ui/scroll-restoration";
import { PageTransition } from "@/components/ui/page-transition";
import { SkipToContent } from "@/components/ui/accessibility";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-contact";

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <ErrorBoundary>
      <ScrollRestoration />
      <div className="min-h-screen flex flex-col">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1">
          {!isHomePage && (
            <BreadcrumbNavigation className="container mx-auto px-4 py-4" />
          )}
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppFloatingButton />
      </div>
    </ErrorBoundary>
  );
}