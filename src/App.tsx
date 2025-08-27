import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnalyticsProvider } from "@/components/layout/AnalyticsProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { MobileQuickActionsProvider } from "@/hooks/use-mobile-quick-actions";
import Index from "./pages/Index";
import About from "./pages/About";
import Suites from "./pages/Suites";
import Gallery from "./pages/Gallery";
import DullstroomGuide from "./pages/DullstroomGuide";

import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

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
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="accommodation" element={<Suites />} />
            <Route path="accommodations" element={<Navigate to="/accommodation" replace />} /> {/* Legacy route redirect */}
            <Route path="suites" element={<Navigate to="/accommodation" replace />} /> {/* Legacy route redirect */}
            <Route path="gallery" element={<Gallery />} />
            <Route path="activities" element={<Blog />} />
            <Route path="dullstroom-accommodation-travel-guide" element={<DullstroomGuide />} />
            
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </MobileQuickActionsProvider>
      </AnalyticsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
