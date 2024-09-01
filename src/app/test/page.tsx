"use client";
import App from "@/components/textStyles/TextAnimation";
import React from "react";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="bg-red-400 h-[1000px] w-full">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 300 }}
        className="w-[100px] h-[100px] bg-green-500"
      ></motion.div>
    </div>
  );
}

export default page;
