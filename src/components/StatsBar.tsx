"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedNumber({ value }: { value: string }) {
  return <span>{value}</span>;
}

export default function StatsBar() {
  return (
    <section className="relative lg:py-16 py-11 bg-[#fafbff]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-white to-cyan-50/30" />
      <div className="absolute inset-0 border-y border-violet-100/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="relative text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-sm sm:text-base text-muted font-medium">
                {stat.label}
              </div>
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-violet-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
