"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ResearchPage = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-[85%] max-w-7xl">
        <motion.h1
          className="text-4xl font-bold text-black mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Research Articles
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Welcome to our research page. Here you will find the latest and most insightful articles on various technologies and innovations.
        </motion.p>

        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Example Research Content */}
          <h2 className="text-2xl font-semibold mb-4">Innovative Technologies and Their Impact on Operational Efficiency</h2>
          <p className="text-gray-600 mb-4">
            This article discusses the latest advancements in AI, machine learning, and automation, and their potential to revolutionize operational efficiency.
          </p>
          <span className="text-sm text-gray-400">Published 20 November, 2024</span>
        </motion.div>

        {/* Add more research articles in similar format */}
      </div>
    </div>
  );
};

export default ResearchPage;
