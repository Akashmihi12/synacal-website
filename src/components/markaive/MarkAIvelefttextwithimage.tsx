"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MarkAIvelefttextwithimage = () => {
  // Using useInView hook to trigger animation on scroll
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });

  // Button animation configuration
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.1,
      color: "#CF71ED",
      backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[85%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Left Text Section with animation from left to right */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-semibold text-black mb-4">
            A tool that works for you
          </h2>
          <p className="text-gray-600 mb-4">
            Digital transformation is more than just a buzzword – it’s a critical process that can help your business thrive in today’s ever-changing landscape.
          </p>
          <p className="text-gray-600 mb-6">
            At its core, digital transformation is about leveraging data, automation, and innovation to create a more agile, efficient, and customer-centric organization.
          </p>

          {/* Tag buttons with new animations */}
          <div className="flex flex-wrap gap-2">
            <motion.button
              ref={ref2}
              variants={buttonVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              whileHover="hover"
              custom={0.1}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full"
            >
              Insightful
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              whileHover="hover"
              custom={0.2}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full"
            >
              Strategic
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              whileHover="hover"
              custom={0.3}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full"
            >
              Actionable
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              whileHover="hover"
              custom={0.4}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full"
            >
              Clarity
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              whileHover="hover"
              custom={0.5}
              className="px-4 py-2 bg-white border border-black text-sm font-semibold rounded-full"
            >
              Discernment
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Section with animation from right to left */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: 100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/markaive/MarkAIve_lefttext_with_image.png"
            alt="MarkAIve Left Side Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MarkAIvelefttextwithimage;
