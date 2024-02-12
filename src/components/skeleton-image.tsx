"use client"
import { useState } from 'react';
import Image from 'next/image';

export function SkeletonImage({ src, alt } : { src: string, alt: string }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div> // Skeleton
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover rounded transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadingComplete={() => setImageLoaded(true)}
      />
    </>
  );
}
