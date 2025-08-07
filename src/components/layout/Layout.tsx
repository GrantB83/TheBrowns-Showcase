import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageTransition } from "@/components/ui/page-transition";
import { SkipToContent } from "@/components/ui/accessibility";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-contact";

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
        <WhatsAppFloatingButton />
      </div>
    </ErrorBoundary>
  );
}