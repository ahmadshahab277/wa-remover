import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Local Images
import avatar1 from "../../assets/Images/img-1.jpg";
import avatar2 from "../../assets/Images/img-2.jpg";
import avatar3 from "../../assets/Images/img-3.jpg";
import avatar4 from "../../assets/Images/img-4.jpg";
import avatar5 from "../../assets/Images/img-5.jpg";
import avatar6 from "../../assets/Images/img-6.jpg";
import avatar7 from "../../assets/Images/img-7.jpg";

const images = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7];

export default function TestPic() {
  const [index, setIndex] = useState(0);

  // Auto shuffle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get 3 rotating images
  const getVisibleImages = () => {
    return [
      { image: images[index % images.length], position: "front", key: index },
      {
        image: images[(index + 1) % images.length],
        position: "middle",
        key: index + 1,
      },
      {
        image: images[(index + 2) % images.length],
        position: "back",
        key: index + 2,
      },
    ];
  };

  return (
    <div className="bg-[#F1F2F4] text-white min-h-screen px-4 py-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        {/* Info Column */}
        <div className="space-y-6 px-4 max-w-md text-center md:text-left">
          <h2 className="font-bold text-[var(--tog-color)]">Endless Posibilites</h2>
          <p className="text-[var(--primary-color)]">
            Experience our <span className="text-[var(--tog-color)]">Background Remover</span> in action!
            Preview how your uploaded images will look once the background is
            cleanly removed using our advanced AI model.
          </p>
          <p className="text-[var(--primary-color)]">
            The image cards below rotate automatically or can be swiped
            manually, giving you a real-time feel for the transformation.
          </p>
        </div>

        {/* Card Column */}
        <div className="relative h-[450px] w-[350px]">
          <AnimatePresence mode="popLayout">
            {getVisibleImages().map((item) => (
              <TestimonialCard
                key={item.key}
                image={item.image}
                position={item.position}
                handleShuffle={() =>
                  setIndex((prev) => (prev + 1) % images.length)
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ handleShuffle, position, image }) {
  const dragRef = useRef(0);
  const isFront = position === "front";

  const scaleMap = {
    front: 1,
    middle: 0.95,
    back: 0.9,
  };

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: scaleMap[position],
        rotate:
          position === "front"
            ? "-6deg"
            : position === "middle"
            ? "0deg"
            : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      drag
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      className={`absolute left-0 top-0 grid h-[350px] w-[250px] select-none place-content-center rounded-[8px] border-2 border-[var(--secondary-color)] bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={image}
        alt="User avatar"
        className="pointer-events-none mx-auto h-full w-full rounded-[8px] object-cover"
      />
    </motion.div>
  );
}
