"use client";
import React from "react";
import ResearchDataBlock from "./ResearchDataBlock";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function LatestResearch() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[78%] h-[1076px]  flex flex-col gap-y-[40px] ">
        <div className="w-full h-[48px] flex">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: -200 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full w-[89%] "
          >
            <span className="text-[40px] font-[500px] leading-[48px] text-[#0A0A0A]">
              Latest Research
            </span>
          </motion.div>
          <div className="h-full w-[11%]">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0 }}
              animate={inView1 ? { opacity: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              drag
              dragConstraints={{
                top: -5,
                left: -5,
                right: 5,
                bottom: 5,
              }}
              className="w-full h-full border-[1px] border-black rounded-[57px] flex items-center justify-center cursor-pointer bg-white text-black 
      hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] hover:border-gradient"
            >
              <span className="text-[14px] font-[600] leading-[16.71px]">
                See All
              </span>
            </motion.div>
          </div>
        </div>
        <div className="w-full h-[988px]  grid grid-rows-[57%,43%] gap-[16px]">
          <motion.div className="w-full h-full  grid grid-cols-2 gap-3">
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <ResearchDataBlock
                backgroundText="Innovative Technologies and Their Impact on Operational Efficiency"
                imageUrl="/research/research1.webp"
                date="Published 20 November, 2024"
                content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
              />
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <ResearchDataBlock
                backgroundText="Innovative Technologies and Their Impact on Operational Efficiency"
                date="Published 20 November, 2024"
                imageUrl="/research/research1.webp"
                content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
              />
            </motion.div>
          </motion.div>
          <div className="w-full h-full  grid grid-cols-3 gap-3">
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView3 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <ResearchDataBlock
                date="Published 20 November, 2024"
                imageUrl="/research/subresearch1.webp"
                content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
              />
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView3 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              <ResearchDataBlock
                date="Published 20 November, 2024"
                imageUrl="/research/subresearch2.webp"
                content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
              />
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView3 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.9 }}
            >
              <ResearchDataBlock
                date="Published 20 November, 2024"
                imageUrl="/research/subresearch3.webp"
                content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestResearch;
