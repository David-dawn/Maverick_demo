"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LoadingImageProps = ImageProps & {
  containerClassName?: string;
  spinnerClassName?: string;
};

export function LoadingImage({
  className,
  containerClassName,
  spinnerClassName,
  onLoad,
  onError,
  fill,
  ...props
}: LoadingImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      className={cn(
        "relative block",
        fill ? "h-full w-full" : "inline-block",
        containerClassName
      )}
    >
      {!loaded && (
        <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/50">
          <span
            className={cn(
              "h-8 w-8 animate-spin rounded-full border-2 border-secondary border-t-transparent",
              spinnerClassName
            )}
            aria-hidden
          />
        </span>
      )}
      <Image
        {...props}
        fill={fill}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setLoaded(true);
          onError?.(event);
        }}
      />
    </span>
  );
}
