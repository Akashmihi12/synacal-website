'use client'
import React from "react";
import { motion } from 'framer-motion'

function HeadNotice() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] h-[286px] flex flex-col">
        <motion.div
          className="flex flex-col items-center h-[144px] bg-background-color font-semibold text-[64px] leading-[72px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <motion.span
              style={{
                backgroundImage: "linear-gradient(90deg, #272727, #191919)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Tech boosts
            </motion.span>
            <motion.span
              whileTap={{ scale: 1.2 }}
              style={{
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {" "}
              biz growth.
            </motion.span>

          </div>

          <motion.span
            style={{
              backgroundImage: "linear-gradient(90deg, #272727, #191919)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {" "}
            We’ve got you Covered.
          </motion.span>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
        >
          <div className="w-[72%] h-[48px] mt-[20px] flex items-center justify-center">
            <motion.span
              className="text-[16px] font-medium leading-[24px] text-head-notice-text-color text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Embracing technology is crucial for the growth of your business,
              and our cutting-edge solutions empower you to thrive in the
              ever-evolving digital landscape.
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="w-full h-full flex items-end justify-center"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.3, type: "spring", stiffness: 300 }}
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            drag
            dragConstraints={{
              top: -5,
              left: -5,
              right: 5,
              bottom: 5,
            }
            }
            className="h-[42px] rounded-[57px] w-[192px] gap-[4px] border-[1px] border-black text-center 
            flex items-center justify-center text-black font-semibold text-[14px] cursor-grab
             hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2]">
            <span className="cursor-pointer ">Let’s Innovate Together</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeadNotice;
