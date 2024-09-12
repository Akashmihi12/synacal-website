"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const QuickContacts = () => {
  return (
    <motion.div
      className="p-6 bg-gray-100 rounded-lg shadow-lg w-[600px] h-[700px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
    >
      {/* Title */}
      <motion.h2
        className="text-2xl font-semibold text-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Quick Contacts
      </motion.h2>

      {/* Paragraph 1 */}
      <motion.p
        className="mt-4 text-black"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        At Synacal, we’re dedicated to helping businesses like yours achieve their digital transformation goals. Whether you’re looking to build a new software product, improve your IT strategy, or streamline your operations with AI and data analytics, our team of specialists is here to help.
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        className="mt-4 text-black"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        We understand that every business is unique, and that’s why we offer personalized consultations to discuss your specific needs and goals.
      </motion.p>

      {/* Contact Information */}
      <div className="mt-6 space-y-4">
        {/* Phone Section */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
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
    </motion.div>
  );
};

export default QuickContacts;
