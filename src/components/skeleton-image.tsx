"use client";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Define the props interface with optional width and height
interface SkeletonImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  [key: string]: any; // This allows for any other additional props
}

export const SkeletonImage: React.FC<SkeletonImageProps> = ({ src, alt, ...props}) => {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "hidden" : "inline-block";

  return (
    <div
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        position: "relative",
      }}
    >
      <Image
        className="rounded-md"
        src={src}
        alt={alt}
        fill
        style={{ ...props.style, visibility }}
        onError={() => setReveal(true)}
        onLoadingComplete={() => setReveal(true)}
      />
      <Skeleton className={`w-[${props.width}px] h-[${props.height}px] ${loader} bg-zinc-100`}/>
    </div>
  );
};
