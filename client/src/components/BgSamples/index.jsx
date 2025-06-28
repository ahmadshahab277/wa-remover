import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { motion } from "framer-motion";

// Product images
import productBg from "../../assets/Images/test-bg.jpg";
import productPng from "../../assets/Images/bags.png";
import bgRemoved from "../../assets/Images/bgPNGFinal.jpg";

export default function BgSamples() {
  return (
    <div className="flex flex-col items-center w-full py-10 max-w-5xl mx-auto">
      {/* <motion.h2 */}
        {/* initial={{ opacity: 0, y: -20 }} */}
        {/* animate={{ opacity: 1, y: 0 }} */}
        {/* transition={{ duration: 0.6 }} */}
        {/* className="text-[40px] md:text-[48px] font-bold tracking-tighter text-[var(--tog-color)] mb-8" */}
      {/* > */}
        {/* Stunning Quality */}
      {/* </motion.h2> */}

      {/* Compare Slider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-[500px]"
      >
        <ReactCompareSlider
          itemOne={
            <div className="relative w-full h-full">
              <ReactCompareSliderImage src={productBg} alt="Original Background" />
              <img
                src={productPng}
                alt="Product PNG"
                className="absolute inset-0 m-auto max-w-[90%] max-h-[90%] object-contain pointer-events-none drop-shadow-xl transition-all duration-500"
              />
            </div>
          }
          itemTwo={
            <div className="relative w-full h-full">
              <ReactCompareSliderImage src={bgRemoved} alt="Background Removed" />
              <img
                src={productPng}
                alt="Product PNG"
                className="absolute inset-0 m-auto max-w-[90%] max-h-[90%] object-contain pointer-events-none drop-shadow-xl transition-all duration-500"
              />
            </div>
          }
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        />
      </motion.div>
    </div>
  );
}
