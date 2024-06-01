"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  // const [isVisible, setIsVisible] = useState(true);
  // const handleAnimationComplete = () => {
  //   setIsVisible(false);
  // };
  // const handleAnimationStart = () => {
  //   setIsVisible(true);
  // };
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-20"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
          <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default w-fit h-fit z-30"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0,
            transitionEnd: {
              display: "none",
            }
           }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut"}}
          // onAnimationStart={handleAnimationStart}
          // onAnimationComplete={handleAnimationComplete}
          >
          { pathName == '/' ? 'Home' : pathName.substring(1)}
        </motion.div>
        
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-20"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
