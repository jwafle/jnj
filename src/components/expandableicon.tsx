'use client'
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils"
import { Pixelify_Sans } from 'next/font/google';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] })


const ExpandableIcon = ({ fullText, initialText, link, className }: { fullText: string, initialText: string, link: string, className: string }) => {
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
        <a href={link}>
          <div className={cn(`flex justify-center items-center min-w-10 min-h-10 rounded p-1 shadow-xl`, className)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            <h1
              className="text-xl font-light"
            >
              {text}
              {isHovered && <span className="cursor-blink text-2xl">|</span>}
            </h1>
          </div>
        </a>
      </div>
  );
};

export default ExpandableIcon
