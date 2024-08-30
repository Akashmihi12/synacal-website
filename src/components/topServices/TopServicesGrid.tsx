'use client'
import React from "react";
import TopServicesBlock from "./TopServicesBlock";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function TopServicesGrid() {

  const [refParent, inViewParent] = useInView({ triggerOnce: false });

  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });

  return (
    <motion.div
      ref={refParent}
      initial="hidden"
      animate={inViewParent ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.7,
          },
        },
      }}
      className="h-full w-full grid grid-cols-2 grid-rows-2 gap-[40px]"
    >
      <motion.div
        ref={ref2}
        className="h-full w-full"
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <TopServicesBlock
          imageUrl="/services/AI.svg"
          title="AI Solution"
          description="We develop custom solutions using AI/ML to automate operations and enhance customer experience"
        />
      </motion.div>

      <motion.div
        ref={ref3}
        className="h-full w-full"
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <TopServicesBlock
          imageUrl="/services/Data.svg"
          title="Data Analytics"
          description="We help businesses make informed decisions and drive growth through actionable insights."
        />
      </motion.div>

      <motion.div
        ref={ref4}
        className="h-full w-full"
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, delay: 1 }}
      >
        <TopServicesBlock
          imageUrl="/services/Design.svg"
          title="Digital Transformation"
          description="We help businesses modernize their operations and processes using emerging technologies."
        />
      </motion.div>

      <motion.div
        ref={ref5}
        className="h-full w-full"
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <TopServicesBlock
          imageUrl="/services/Software.svg"
          title="Software Development"
          description="We provide end-to-end software solutions for developing, testing, and deploying applications"
        />
      </motion.div>
    </motion.div>
  );
}

export default TopServicesGrid;
