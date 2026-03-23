import React, { useState, useEffect } from "react";

interface StatusBarProps {
  /** Time string to display (e.g. "3:40"). */
  time?: string;
  /** Optional extra class names for styling. */
  className?: string;
}

export function StatusBar({ time, className = "" }: StatusBarProps) {
  const [currentTime, setCurrentTime] = useState(time || "");

  useEffect(() => {
    if (!time) {
      const updateTime = () => {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, "0");
        setCurrentTime(`${hours}:${minutes}`);
      };
      
      updateTime();
      const interval = setInterval(updateTime, 60000);
      return () => clearInterval(interval);
    }
  }, [time]);

  return (
    <div className={`flex items-center justify-center px-6 pt-3 pb-2 ${className}`}>
      <span className="text-xs font-medium tracking-wide">{time || currentTime}</span>
    </div>
  );
}
