"use client";
import React from "react";
import DocumentAssistanceText from "./DocumentAssistanceText";
import ImageSection from "./ImageSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DocumentAssistance() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  const data = [
    {
      title: "Discover DOXPLORE Your Intelligent Document Assistant",
      description:
        "Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets.",
      dataContent: [
        "Quickly find relevant information within large document sets.",
        "Gain deeper understanding with context-aware analysis.",
        "Receive concise summaries of lengthy documents.",
      ],
    },
    {
      title: "Discover MarkAIve Your Intelligent Document Assistant",
      description:
        "Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets.",
      dataContent: [
        "Quickly find relevant information within large document sets.",
        "Gain deeper understanding with context-aware analysis.",
        "Receive concise summaries of lengthy documents.",
      ],
    },
  ];
  return (
    <div className="w-full h-[1492.71px] ">
      <div className="h-full w-full grid grid-rows-2 gap-y-[113.29px] grid-cols-2 gap-x-[0.8%]">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: -200 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full rounded-2xl "
          style={{
            backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
          }}
        >
          <ImageSection />
        </motion.div>
        <div className="w-full h-full flex ml-[15%] items-center ">
          <div className="w-[65%] h-[538px] ">
            <DocumentAssistanceText
              title={data[0].title}
              content={data[0].description}
              dataContent={data[0].dataContent}
            />
          </div>
        </div>
        <div className="w-full h-full flex ml-[20%] items-center">
          <div className="w-[65%] h-[538px] ">
            <DocumentAssistanceText
              title={data[1].title}
              content={data[1].description}
              dataContent={data[1].dataContent}
            />
          </div>
        </div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 200 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full rounded-2xl"
          style={{
            backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
          }}
        >
          <ImageSection />
        </motion.div>
      </div>
    </div>
  );
}

export default DocumentAssistance;
