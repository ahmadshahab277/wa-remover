import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { motion, AnimatePresence } from "framer-motion";

// Backgrounds per category
import animalBg from "../../assets/Images/sofa-bg.avif";
import carBg from "../../assets/Images/car-bg.webp";
import productBg from "../../assets/Images/test-bg.jpg";

// PNG overlays per category
import animalPng from "../../assets/Images/cat.png";
import car from "../../assets/Images/car.png";
import productPng from "../../assets/Images/bags.png";

// Common background removed image
import bgRemoved from "../../assets/Images/bgPNGFinal.jpg";
// import ThreeD from "../ThreeD";
// import BounceBall from "../BounceBall";
// import ImageThreeD from "../ImageThreeD";

const imageSets = {
  Animals: {
    bg: animalBg,
    png: animalPng,
  },
  Car: {
    bg: carBg,
    png: car,
  },
  Products: {
    bg: productBg,
    png: productPng,
  },
};

const tabs = Object.keys(imageSets);

export default function BgRemover() {
  const [activeTab, setActiveTab] = useState("Animals");

  return (
    <div className="relative flex flex-col items-center w-full py-10 max-w-5xl mx-auto">
      {/* <div className="absolute right-0 top-0">
        <ThreeD />
      </div>
      <div className="absolute bottom-0 left-0 z-10">
        <BounceBall />
        <ImageThreeD/>
      </div> */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[40px] md:text-[48px] font-bold tracking-tighter text-[var(--tog-color)] mb-8"
      >
        Stunning Quality
      </motion.h2>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 mb-6"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-[var(--tog-color)] text-white scale-105 shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Compare Slider with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-[500px]"
        >
          <ReactCompareSlider
            itemOne={
              <div className="relative w-full h-full">
                <ReactCompareSliderImage
                  src={imageSets[activeTab].bg}
                  alt={`${activeTab} Original Background`}
                />
                <img
                  src={imageSets[activeTab].png}
                  alt={`${activeTab} PNG`}
                  className="absolute inset-0 m-auto max-w-[90%] max-h-[90%] object-contain pointer-events-none drop-shadow-xl transition-all duration-500"
                />
              </div>
            }
            itemTwo={
              <div className="relative w-full h-full">
                <ReactCompareSliderImage
                  src={bgRemoved}
                  alt="Background Removed"
                />
                <img
                  src={imageSets[activeTab].png}
                  alt={`${activeTab} PNG`}
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
      </AnimatePresence>
    </div>
  );
}
