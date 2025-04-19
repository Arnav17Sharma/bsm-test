"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);

      let startTime: number | null = null;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp; // Initialize startTime on the first frame
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end); // Ensure the final value is set
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}