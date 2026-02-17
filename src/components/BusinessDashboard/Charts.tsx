"use client";

import React from "react";
import { motion } from "motion/react";

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      {/* Follower Growth Chart */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Follower Growth</h3>
        <div className="flex-1 w-full h-48 relative flex items-end justify-between px-2">
          {/* Y-Axis Labels */}
          <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between text-xs text-gray-400 py-2">
            <span>1500</span>
            <span>1000</span>
            <span>500</span>
            <span>0</span>
          </div>

          {/* Chart Area */}
          <div className="ml-10 w-full h-full relative">
            <svg
              viewBox="0 0 100 50"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,50 C10,48 20,30 30,35 C40,40 50,20 60,25 C70,30 80,10 90,15 L100,5 L100,50 Z"
                fill="url(#gradientArea)"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M0,50 C10,48 20,30 30,35 C40,40 50,20 60,25 C70,30 80,10 90,15 L100,5"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>
          
           {/* X-Axis Labels */}
           <div className="absolute bottom-[-20px] left-10 right-0 flex justify-between text-[10px] text-gray-400">
            <span>Jan 01</span>
            <span>Jan 02</span>
            <span>Jan 03</span>
            <span>Jan 04</span>
            <span>Jan 05</span>
            <span>Jan 06</span>
            <span>Jan 07</span>
          </div>
        </div>
      </div>

      {/* Engagement Breakdown Chart */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
         <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Engagement Breakdown</h3>
             <div className="flex gap-3 text-[10px]">
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Likes</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span>Comments</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span>Shares</div>
            </div>
         </div>
        
        <div className="flex-1 w-full h-48 relative flex items-end justify-between gap-2 sm:gap-4 px-2 sm:px-4">
             {/* Y-Axis Labels */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between text-xs text-gray-400 py-2">
                <span>100%</span>
                <span>50%</span>
                <span>0%</span>
            </div>

            <div className="ml-8 w-full h-full flex items-end justify-between gap-2">
            {[...Array(7)].map((_, i) => (
                <div key={i} className="flex gap-1 h-full items-end flex-1 justify-center">
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 40 + 20}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="w-1.5 sm:w-2 bg-blue-500 rounded-t-sm" 
                    />
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 30 + 10}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.1 }}
                        className="w-1.5 sm:w-2 bg-purple-500 rounded-t-sm" 
                    />
                     <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 20 + 5}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                        className="w-1.5 sm:w-2 bg-orange-500 rounded-t-sm" 
                    />
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
