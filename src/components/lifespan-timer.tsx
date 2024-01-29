"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect } from "react";

const LifespanTimer = () => {
  // Calculate the end date: January 4, 2077
  const endDate = new Date(2077, 0, 9).getTime();

  // useState hook to manage the seconds state
  const [secondsLeft, setSecondsLeft] = useState(
    (endDate - new Date().getTime()) / 1000
  );

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

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
        <p>tick, tick</p>
          <p className="text-zinc-500">{Math.floor(secondsLeft)}</p>
        </TooltipTrigger>
        <TooltipContent className="border-0 shadow-none underline underline-offset-2">approx seconds remaining in average lifespan</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LifespanTimer;
