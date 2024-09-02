"use client";
import React from "react";
import Image from "next/image";
import IconBar from "./IconBar";
import CategoryCom from "./CategoryCom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="w-full h-[523px]  mt-[100px] flex justify-center mb-12">
      <div className="w-[79%] h-full ">
        <div className="w-full h-[456px] ">
          <div
            style={{
              backgroundImage: `url('/footer/footerbackground.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="relative rounded-2xl"
          >
            <div className="w-full h-full grid grid-cols-2">
              <div className="w-full h-full flex justify-center ">
                <div className="w-[445px] h-[136px]  mt-[44px]">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[148px] h-[20px]  relative overflow-hidden"
                  >
                    <Image
                      src="/footer/company_logo.svg"
                      alt="company logo"
                      layout="fill"
                      objectFit="contain"
                      className="absolute "
                    />
                  </motion.div>
                  <div className="w-full h-[48px]  mt-4">
                    <span className="font-normal text-[14px] leading-[24px] text-[#DCDCDC]">
                      At Synacal, we&apos;re dedicated to helping businesses
                      like yours achieve their digital transformation goals.
                    </span>
                  </div>
                  <div className="w-[353px] h-[24px]  mt-7 grid grid-cols-2">
                    <div className="w-full h-full ">
                      <IconBar
                        icon="/footer/whatsapp.svg"
                        text="+94 70 457 5691"
                      />
                    </div>
                    <div className="w-full h-full ">
                      <IconBar
                        icon="/footer/email.svg"
                        text="hello@synacal.ai"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="w-[437px] h-[312px]  grid grid-cols-3 justify-between gap-[64px]">
                  <div className="w-full h-full  grid grid-rows-2">
                    <div className="w-full h-full">
                      <CategoryCom
                        Category="Company"
                        part1="Client"
                        part2="About us"
                        part3="Our Story"
                      />
                    </div>
                    <div className="w-full h-full">
                      <CategoryCom
                        Category="Careers"
                        part1="Culture"
                        part2="Team"
                        part3="Hiring process"
                        part4="Openings"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full  grid grid-rows-2">
                    <div className="w-full h-full">
                      <CategoryCom
                        Category="Insights"
                        part1="Blog"
                        part2="Research"
                        part3="Case studies"
                      />
                    </div>
                    <div className="w-full h-full">
                      <CategoryCom
                        Category="Work"
                        part1="Service"
                        part2="Product"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full ">
                    <div className="w-full h-full">
                      <CategoryCom
                        Category="Content"
                        part1="Blog"
                        part2="Research"
                        part3="Case studies"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[67px] ">
          <span
            className=" w-full h-full text-[14px] leading-[24px] font-normal flex justify-center items-end"
            style={{
              backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            © 2024 SYNACAL. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
