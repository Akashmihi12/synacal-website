"use client";
import React from "react";
import { motion } from "framer-motion";

function GradientBorderDiv() {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={{ top: -2, left: -2, right: 2, bottom: 2 }}
      className="relative h-[42px] rounded-[57px] w-[128px] flex items-center 
      justify-center text-black border-black font-semibold text-[14px] 
      cursor-grab border-[1px] hover:border-main-gradient "
    >
      {/* Content */}
      <div className="relative z-10 text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] ">
        <span className="cursor-pointer">Contact Us</span>
      </div>
    </motion.div>
  );
}

export default GradientBorderDiv;
