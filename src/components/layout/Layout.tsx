import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageTransition } from "@/components/ui/page-transition";
import { SkipToContent } from "@/components/ui/accessibility";
import { ErrorBoundary } from "@/components/ui/error-boundary";

export function Layout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}