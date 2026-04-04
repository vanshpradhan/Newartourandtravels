import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export function Image({ src, alt, className, containerClassName, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [fallbackSrc, setFallbackSrc] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    setFallbackSrc(null);
  }, [src]);

  // You can use a local fallback image or a generic placeholder
  const defaultFallback =
    "https://placehold.co/600x400?text=Image+Not+Available";

  return (
    <div className={cn("relative overflow-hidden bg-gray-200", containerClassName)}>
      {/* Skeleton / Placeholder */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}

      {/* Error State */}
      {error && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}

      {/* Actual Image or Fallback */}
      <img
        src={fallbackSrc || src}
        alt={alt}
        loading="lazy"
        referrerPolicy={props.referrerPolicy || "no-referrer"}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!fallbackSrc) {
            setFallbackSrc(defaultFallback);
            setError(true);
          }
        }}
        className={cn(
          "transition-opacity duration-700 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
}
