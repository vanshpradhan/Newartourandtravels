import React, { memo, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

const fallbackDataUri =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236b7280" font-family="Arial, sans-serif" font-size="32">Image unavailable</text></svg>';

function BaseImage({ src, alt, className, containerClassName, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [fallbackSrc, setFallbackSrc] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    setFallbackSrc(null);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden bg-gray-200", containerClassName)}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" aria-hidden="true" />
      )}

      {error && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}

      <img
        src={fallbackSrc || src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy={props.referrerPolicy}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!fallbackSrc) {
            setFallbackSrc(fallbackDataUri);
            setError(true);
          }
        }}
        className={cn(
          "transition-opacity duration-500 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
}

export const Image = memo(BaseImage);
