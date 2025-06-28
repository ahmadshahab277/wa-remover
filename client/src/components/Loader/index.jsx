import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div className="relative z-[99999] w-ful h-screen flex justify-center items-center bg-white">
      <div className="loader"></div>
    </div>
  );
}
