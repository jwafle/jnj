"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { Suspense } from 'react';

const LifespanTimer = () => {
  // Calculate the end date: January 4, 2077
  const endDate = new Date(2077, 0, 9).getTime();

  // useState hook to manage the seconds state
  const [secondsLeft, setSecondsLeft] = useState(
    (endDate - new Date().getTime()) / 1000
  );

  const [isClient, setIsClient] = useState(false)

  // useEffect hook to set up an interval
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((seconds) => {
        if (seconds <= 0) {
          clearInterval(interval);
          return 0;
        }
        return seconds - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsClient(true)
  })

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
        <p>tick, tick</p>
              <p className="text-zinc-500">{isClient ? Math.floor(secondsLeft) : "unkwn"}</p>
        </TooltipTrigger>
        <TooltipContent className="border-0 shadow-none underline underline-offset-2">approx seconds remaining in average lifespan</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LifespanTimer;
