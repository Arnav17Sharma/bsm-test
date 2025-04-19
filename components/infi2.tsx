"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BarChart3, Truck, Package, DollarSign, ChartLine, Database, Route } from "lucide-react";

interface InfiniteCarouselProps {
  items: {
    name: string;
    logo: string;
  }[];
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export default function InfiniteCarousel2({
  items,
  className,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
}: InfiniteCarouselProps) {
  const [duplicatedItems, setDuplicatedItems] = useState<typeof items>([]);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Duplicate items to create seamless loop
    setDuplicatedItems([...items, ...items, ...items]);
  }, [items]);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 3);
    }
  }, [duplicatedItems]);

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="flex flex-row justify-center">
      <div className="px-8 py-4">
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          className="flex h-[200px] w-[180px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
        >
          <BarChart3 className="h-10 w-10 text-blue-500" />
          <h3 className="mt-2 text-center font-medium">Smart <br />Demand <br /> Planning</h3>
        </motion.div>
      </div>
      <div className="px-8 py-4">
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          className="flex h-[200px] w-[180px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
        >
          <Route className="h-10 w-10 text-blue-500" />
          <h3 className="mt-2 text-center font-medium">Flexible <br /> Order <br />Routing</h3>
        </motion.div>
      </div>
      <div className="px-8 py-4">
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          className="flex h-[200px] w-[180px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
        >
          <Package className="h-10 w-10 text-blue-500" />
          <h3 className="mt-2 text-center font-medium">Live <br />Inventory <br /> Sync</h3>
        </motion.div>
      </div>
      <div className="px-8 py-4">
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          className="flex h-[200px] w-[180px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
        >
          <ChartLine className="h-10 w-10 text-blue-500" />
          <h3 className="mt-2 text-center font-medium">Reliable <br />Fullfillment <br /> (99.9% SLA)</h3>
        </motion.div>
      </div>
      <div className="px-8 py-4">
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          className="flex h-[200px] w-[180px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
        >
          <Database className="h-10 w-10 text-blue-500" />
          <h3 className="mt-2 text-center font-medium">Data-backed <br />Operations</h3>
        </motion.div>
      </div>
    </div>
    </div>
  );
}