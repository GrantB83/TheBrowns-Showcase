import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

// Routing fallback for hosting platforms that don't support proper SPA routing
(function() {
  // Check if we're on a valid route
  const currentPath = window.location.pathname;
  const validRoutes = ['/', '/blog', '/about', '/accommodation', '/gallery', '/contact', '/privacy', '/activities'];
  const isValidRoute = validRoutes.some(route => currentPath === route || currentPath.startsWith(route + '/'));
  
  if (!isValidRoute && currentPath !== '/') {
    console.log('Invalid route detected, attempting to handle:', currentPath);
    
    // If this looks like a blog post URL, let it through
    if (currentPath.startsWith('/blog/')) {
      console.log('Blog post route detected, allowing to continue');
      return;
    }
    
    // For other invalid routes, redirect to home
    console.log('Redirecting invalid route to home');
    window.location.href = '/';
    return;
  }
})();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
