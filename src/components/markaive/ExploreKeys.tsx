"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QuickContacts = () => {
  // Using useInView hook to trigger animation on scroll
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  const [ref6, inView6] = useInView({ triggerOnce: false });

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-[600px] h-[700px]">
      {/* Animated Title */}
      <motion.h2
        className="text-2xl font-semibold text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Quick Contacts
      </motion.h2>

      {/* Animated Paragraphs */}
      <motion.p
        className="mt-4 text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        At Synacal, we’re dedicated to helping businesses like yours achieve their digital transformation goals. Whether you’re looking to build a new software product, improve your IT strategy, or streamline your operations with AI and data analytics, our team of specialists is here to help.
      </motion.p>
      <motion.p
        className="mt-4 text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        We understand that every business is unique, and that’s why we offer personalized consultations to discuss your specific needs and goals.
      </motion.p>

      {/* Contact Info with Animated Icons */}
      <div className="mt-6 space-y-4">
        {/* Phone Section */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              y: [0, -5, 0],
            }}
            whileHover={{
              scale: 1.5,
              rotate: 5,
              y: -10,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{
              scale: 0.8,
              rotate: -10,
              y: 10,
              transition: { type: "spring", stiffness: 400 },
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-[40px] h-[40px] relative cursor-pointer"
          >
            <Image src="/logo/call.png" alt="Phone Icon" layout="fill" objectFit="contain" />
          </motion.div>
          <p className="text-black font-medium">+94 70 457 5691</p>
        </motion.div>

        {/* Email Section */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              y: [0, -5, 0],
            }}
            whileHover={{
              scale: 1.5,
              rotate: 5,
              y: -10,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{
              scale: 0.8,
              rotate: -10,
              y: 10,
              transition: { type: "spring", stiffness: 400 },
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-[40px] h-[40px] relative cursor-pointer"
          >
            <Image src="/logo/email.png" alt="Email Icon" layout="fill" objectFit="contain" />
          </motion.div>
          <p className="text-black font-medium">hello@synacal.ai</p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -100 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              y: [0, -5, 0],
            }}
            whileHover={{
              scale: 1.5,
              rotate: 5,
              y: -10,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{
              scale: 0.8,
              rotate: -10,
              y: 10,
              transition: { type: "spring", stiffness: 400 },
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-[40px] h-[40px] relative cursor-pointer"
          >
            <Image src="/logo/map.png" alt="Map Icon" layout="fill" objectFit="contain" />
          </motion.div>
          <p className="text-black font-medium">Address Here</p>
        </motion.div>
      </div>
    </div>
  );
};

export default QuickContacts;
