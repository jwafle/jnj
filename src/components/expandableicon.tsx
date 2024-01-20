'use client'
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils"
import { Pixelify_Sans } from 'next/font/google';

const pixelfy = Pixelify_Sans({ subsets: ["latin"] })


const ExpandableIcon = ({ fullText, initialText, className }: { fullText: string, initialText: string, className: string }) => {
  const [text, setText] = useState(initialText);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isHovered && text.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 50); // Typing speed
    } else if (!isHovered && text.length > initialText.length) {
      timeoutId = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, 50); // "Untyping" speed
    } else if (!isHovered && text.length == initialText.length) {
      setText(initialText)
    }

    return () => clearTimeout(timeoutId);
  }, [text, initialText, isHovered, fullText]);

  return (
      <div className={`flex mx-5 my-5 justify-start`}>
        <h1
          className={cn(`text-center min-w-12 min-h-12 text-3xl md:text-3xl ${pixelfy.className} font-light tracking-tighter leading-tight rounded p-1 shadow-xl`, className)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text}
          {isHovered && <span className="cursor-blink font-family:">|</span>}
        </h1>
      </div>
  );
};

export default ExpandableIcon
