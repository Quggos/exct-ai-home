import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  mobileSrc?: string; // Optional mobile-specific source
}

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: string;
  }
}

export function OptimizedImage({
  src,
  alt,
  aspectRatio,
  fill = false,
  sizes,
  priority = false,
  fallbackSrc = '/placeholder.svg',
  className,
  containerClassName,
  width,
  height,
  mobileSrc,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const isMobile = useIsMobile();
  
  // Choose the appropriate image source based on device
  const imageSource = isMobile && mobileSrc ? mobileSrc : src;
  
  // Handle image loading
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  // Handle image error
  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  // The actual source to use
  const actualSrc = error ? fallbackSrc : imageSource;
  
  // Helper to generate srcSet for responsive images
  const generateSrcSet = (imageSrc: string): string | undefined => {
    if (!imageSrc || imageSrc.startsWith('data:') || imageSrc === fallbackSrc) return undefined;
    
    // For Unsplash images, we can use their built-in image optimization
    if (imageSrc.includes('unsplash.com')) {
      return `${imageSrc}&w=640 640w, ${imageSrc}&w=750 750w, ${imageSrc}&w=828 828w, ${imageSrc}&w=1080 1080w, ${imageSrc}&w=1200 1200w`;
    }
    
    return undefined;
  };
  
  // Adaptive sizes value based on device
  const adaptiveSizes = sizes || (isMobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw");

  
  // Generate appropriate width and height for smaller screens
  const mobileWidth = isMobile && width ? Math.min(width, window.innerWidth) : width;
  const mobileHeight = isMobile && height ? Math.floor(height * (mobileWidth || 0) / (width || 1)) : height;
  
  // Determine if we're using aspect ratio container
  if (aspectRatio) {
    return (
      <div className={cn("overflow-hidden", containerClassName)}>
        <AspectRatio ratio={aspectRatio} className="relative bg-muted/20">
          <img
            src={actualSrc}
            alt={alt}
            sizes={adaptiveSizes}
            srcSet={generateSrcSet(actualSrc)}
            className={cn(
              "object-cover w-full h-full transition-all duration-300",
              isLoading ? "blur-sm" : "blur-0",
              className
            )}
            loading={priority ? "eager" : "lazy"}
            onLoad={handleLoad}
            onError={handleError}
            width={isMobile ? mobileWidth : width}
            height={isMobile ? mobileHeight : height}
            {...props}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
              <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
        </AspectRatio>
      </div>
    );
  }
  
  // Handle fill mode (container must be positioned relative)
  if (fill) {
    return (
      <>
        <img
          src={actualSrc}
          alt={alt}
          sizes={adaptiveSizes}
          srcSet={generateSrcSet(actualSrc)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-300",
            isLoading ? "blur-sm" : "blur-0",
            className
          )}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
          width={isMobile ? mobileWidth : width}
          height={isMobile ? mobileHeight : height}
          {...props}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}
      </>
    );
  }
  
  // Standard image
  return (
    <div className={cn("relative inline-block", containerClassName)}>
      <img
        src={actualSrc}
        alt={alt}
        sizes={adaptiveSizes}
        srcSet={generateSrcSet(actualSrc)}
        className={cn(
          "transition-all duration-300",
          isLoading ? "blur-sm" : "blur-0",
          className
        )}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        onLoad={handleLoad}
        onError={handleError}
        width={isMobile ? mobileWidth : width}
        height={isMobile ? mobileHeight : height}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
          <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
