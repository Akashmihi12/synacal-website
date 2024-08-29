"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./Aurora_background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="h-[500px]">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="w-[50%]">
          <div className="text-[40px] font-medium leading-[48px]  dark:text-white text-center">
            ✌️ Ready to Get Started?
          </div>
          <div className="text-[20px] font-medium leading-[32px]  dark:text-white text-center">
            <span>
              Whether you need a MVP or extra bandwidth, every engagement starts
              with a discovery call. Connect with one of our specialists at a
              time that&apos;s convenient to you.
            </span>
          </div>
        </div>
        <button className="bg-transparent  rounded-full border-white text-white border-[1px] w-fit  px-4 py-2">
          Let`s Innovate Together
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
