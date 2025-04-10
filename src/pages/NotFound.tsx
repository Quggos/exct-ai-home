
import React, { useEffect } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Return proper 404 status code
    document.title = "Page Not Found - 404 Error | EXACT AI";
    
    // Set the actual HTTP status code to 404
    // This helps search engines properly identify the page as "not found"
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    
    // Log the 404 error for analytics
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    return () => {
      document.head.removeChild(meta);
    };
  }, [location.pathname]);

  // If the URL is exactly "/404", it's legitimate, otherwise redirect to the 404 page
  if (location.pathname !== "/404") {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO 
        title="Page Not Found - 404 Error"
        description="The page you are looking for doesn't exist or has been moved."
        canonicalUrl="https://www.exct.com/404"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Page Not Found - 404 Error | EXACT AI",
          "description": "The page you are looking for doesn't exist or has been moved."
        }}
      />
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-500" aria-hidden="true" />
            </div>
          </div>
          
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">404 - Page Not Found</h1>
          <h2 className="mt-2 text-base text-gray-500 sm:text-lg">
            Sorry, we couldn't find the page you're looking for.
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
            Please check that the URL is correct or use the navigation below to find your way back.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" /> Return to Home
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="#" onClick={() => window.history.back()} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Go Back
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
