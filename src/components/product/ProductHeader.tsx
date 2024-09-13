"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AuroraBackground } from "../getstarted/Aurora_background";

function ProductHeader() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });

  return (
    <AuroraBackground>
      <div className="h-[450px] w-full bg-black flex items-center">
        <div className="h-[252px] w-[32.55%] ml-[23.25%] mr-[11%] flex flex-col">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: -50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 6,
              delay: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 150,
            }}
            className="w-full h-[114px]"
          >
            <motion.span className="text-[48px] font-semibold leading-[57.28px] text-[#FFFFFF]">
              Smart Products Made for Success
            </motion.span>
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={inView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 2, delay: 1 }}
            className="w-full h-[64px] mt-[8px]"
          >
            <span className="text-[20px] font-normal leading-[32px] text-[#EDEDED]">
              Explore our innovative products that drive your success and
              efficiency.
            </span>
          </motion.div>
          <div className="w-full h-[66px] flex items-end gap-[4px]">
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, rotate: -5 }}
              animate={inView3 ? { opacity: 1, rotate: 0 } : {}}
              transition={{
                duration: 4,
                delay: 2,
                type: "spring",
                stiffness: 300,
              }}
              className="h-[42px] w-[27.85%] cursor-pointer"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="h-[42px] rounded-[57px] gap-[4px] border-[1px] border-white text-center flex items-center justify-center text-white font-semibold text-[14px]
                text-main-gradient hover:text-transparent hover:bg-clip-text 
                hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] cursor-pointer"
              >
                See All Products
              </motion.div>
            </motion.div>
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, rotate: -5 }}
              animate={inView4 ? { opacity: 1, rotate: 0 } : {}}
              transition={{
                duration: 4,
                delay: 2.3,
                type: "spring",
                stiffness: 300,
              }}
              className="h-[42px] w-[27.85%] flex items-center justify-center 
              text-main-gradient hover:text-transparent hover:bg-clip-text 
              hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] cursor-pointer user-select-none"
            >
              <motion.span
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="text-[14px] font-semibold leading-[16.71px] text-[#FFFFFF] cursor-pointer *:text-main-gradient hover:text-transparent hover:bg-clip-text 
                hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] user-select-none"
              >
                Get a demo
              </motion.span>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={
            inView5 ? { opacity: 1, scale: 1, rotate: 0, type: "spring" } : {}
          }
          whileHover={{ scale: 0.9, rotate: 10 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            type: "spring",
            stiffness: 120,
          }}
          className="w-[28%] h-[91.53%] cursor-pointer"
        >
          <Image
            src="/product/Icon.webp"
            alt="Cubic"
            width={411.84}
            height={411.84}
          />
        </motion.div>
      </div>
    </AuroraBackground>
  );
}

export default ProductHeader;
