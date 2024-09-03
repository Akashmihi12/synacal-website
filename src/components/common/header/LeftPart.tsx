"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function LeftPart() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        y: [0, -5, 0],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/logo/synacal_logo.png"
        alt="Synacal Logo"
        width={148}
        height={20}
      />
    </motion.div>
  );
}

export default LeftPart;
