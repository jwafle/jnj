'use client'
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils"
import { Pixelify_Sans } from 'next/font/google';
import { useTheme } from "next-themes"

const pixelfy = Pixelify_Sans({ subsets: ["latin"] })


const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  return (
      <div className={`flex mx-5 my-5 justify-start`}>
        <h1
          className={`text-center min-w-12 min-h-12 text-3xl md:text-3xl ${pixelfy.className} font-light tracking-tighter leading-tight rounded p-1 shadow-xl`}
          onClick={toggleTheme}
        >
          {`O/D`}
        </h1>
      </div>
  );
};

export default ThemeToggle
