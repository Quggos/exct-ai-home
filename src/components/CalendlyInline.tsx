
import React, { useEffect, useRef } from "react";

const CalendlyInline: React.FC<{ url?: string; height?: number }> = ({ 
  url = "https://calendly.com/daniel-exct/30min",
  height = 800 
}) => {
  const calendlyContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendlyContainer.current) {
      // Check if script already exists to prevent duplicate loading
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.head.appendChild(script);
      }
    }
    
    // Cleanup function
    return () => {
      // No cleanup needed as the script should persist
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ width: "100%", height: `${height}px`, overflow: "hidden" }}
      ref={calendlyContainer}
    />
  );
};

export default CalendlyInline;
