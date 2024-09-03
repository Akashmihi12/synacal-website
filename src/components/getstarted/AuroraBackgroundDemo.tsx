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
          <div className="text-[40px] font-medium leading-[48px] dark:text-white text-center">
            <div className="flex items-center justify-center">
              <motion.div
                className="cursor-pointer"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                whileHover={{
                  scale: 1.5,
                  rotate: 20,
                  y: -15,
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                  y: 10,
                  transition: { type: "spring", stiffness: 400 },
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ fontSize: "2rem" }}
              >
                ✌️
              </motion.div>
              <div className="ml-4">Ready to Get Started?</div>
            </div>
          </div>

          <div className="text-[20px] font-medium leading-[32px]  dark:text-white text-center">
            <span>
              Whether you need a MVP or extra bandwidth, every engagement starts
              with a discovery call. Connect with one of our specialists at a
              time that&apos;s convenient to you.
            </span>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          drag
          dragConstraints={{
            top: -5,
            left: -5,
            right: 5,
            bottom: 5,
          }}
          className="bg-transparent  rounded-full border-white text-white border-[1px] w-fit  px-4 py-2
          cursor-pointer 
      hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] hover:border-gradient"
        >
          <span>Let`s Innovate Together</span>
        </motion.button>
      </motion.div>
    </AuroraBackground>
  );
}
