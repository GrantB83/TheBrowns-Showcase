import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnalyticsProvider } from "@/components/layout/AnalyticsProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Suites from "./pages/Suites";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Location from "./pages/Location";
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
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="accommodation" element={<Suites />} />
            <Route path="accommodations" element={<Suites />} /> {/* Legacy route redirect */}
            <Route path="suites" element={<Suites />} /> {/* Legacy route redirect */}
            <Route path="gallery" element={<Gallery />} />
            <Route path="activities" element={<Blog />} />
            <Route path="booking" element={<Booking />} />
            <Route path="location" element={<Location />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AnalyticsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
