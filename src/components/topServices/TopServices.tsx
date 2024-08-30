'use client'
import React from "react";
import DivideLine from "../common/header/Divider";
import TopServicesGrid from "./TopServicesGrid";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
function TopServices() {
  const [refParent, inViewParent] = useInView({ triggerOnce: false });
  return (
    <div className="h-[908px] w-full flex justify-center">
      <div className="w-[65%]  h-[908px] rounded-[28px] flex flex-col items-center bg-top-services-bg">
        <motion.div
          ref={refParent}
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={inViewParent ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 3, }}
          className="h-[32px] w-[80%]  mt-[32px]">
          <motion.span className="text-[24px] font-semibold leading-[32px] text-[#000000]"
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3, }}
          >
            Top Services to Meet Your Needs
          </motion.span>
        </motion.div>
        <DivideLine
          color="#D7D7E7"
          thickness="1px"
          width="80%"
          margin="48px 0"
        />
        <div className="h-[716px] w-[80%]   ">
          <TopServicesGrid />
        </div>
      </div>
    </div>
  );
}

export default TopServices;
