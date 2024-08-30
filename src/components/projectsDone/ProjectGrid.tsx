'use client'
import React from "react";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import DescriptionCard from "./DescriptionCard";
import Image from "next/image";

function ProjectGrid() {

  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  return (
    <div className=" w-full h-full flex justify-center">
      <div className="w-[73.55%] h-[864px] grid grid-rows-2 gap-y-[14px]">
        <div className="grid grid-cols-[40%,60%] h-full gap-x-2">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: -200 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className=" rounded-[26px]">
            <DescriptionCard text1="100+" text2="Projects" text3="Deceived" />
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: 250 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-[424px] rounded-[26px]">
            <div className="w-full h-full rounded-[26px] overflow-hidden relative ">
              <Image
                src="/videothumbnail1.svg"
                alt="video tag Tag"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-[60%,40%] h-full gap-x-2">
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -250 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-[424px] rounded-[26px]">
            <div className="w-full h-[424px] rounded-[26px] overflow-hidden relative ">
              <Image
                src="/videothumbnail2.svg"
                alt="video tag Tag"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 200 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className=" rounded-[26px]">
            <DescriptionCard text1="20+" text2="Satisfied" text3="Clients" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
