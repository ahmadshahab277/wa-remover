import React from "react";
import { Upload, Sparkles, ImagePlus, Download } from "lucide-react";
import "./works.css";

const Works = () => {
  return (
    <>
      {/* How It Works Section */}
      <section
        id="works"
        className="w-full py-8 md:py-12 bg-[#F3F4F6] mt-[50px] lg:py-16 relative overflow-hidden"
      >
        {/* Background animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[color-mix(in srgb,var(--ter-color) 20%,transparent)] to-transparent animate-slide-x" />
        </div>

        <div className="px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
            <div className="space-y-2">
              {/* Inline Badge */}
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-[var(--primary-color)] bg-[var(--ter-color)] animate-bounce-gentle">
                How It Works
              </div>
              <h2 className=" font-bold tracking-tighter text-[var(--tog-color)]">
                Remove Backgrounds in 3 Simple Steps
              </h2>
              <p className="max-w-[900px] text-[var(--secondary-color)] md:/relaxed lg:text-base/relaxed xl:/relaxed">
                No technical skills required. Just upload, process, and
                download.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-4 text-center animate-fade-in-up animation-delay-300 group">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white  font-bold group-hover:scale-110 transition-transform duration-300 animate-pulse-gentle">
                1
              </div>
              <h3 className="font-bold text-[var(--tog-color)]">
                Upload Your Image
              </h3>
              <p className="text-[var(--secondary-color)]">
                Drag and drop or click to upload your image. We support all
                formats.
              </p>
              <div className="w-full h-32 bg-white rounded-[8px] border-2 border-dashed border-[var(--ter-color)] flex items-center justify-center group-hover:border-[var(--primary-color)] transition-colors duration-300 hover:scale-105">
                <Upload className="h-8 w-8 text-[var(--primary-color)] group-hover:animate-bounce" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-4 text-center animate-fade-in-up animation-delay-500 group">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white  font-bold group-hover:scale-110 transition-transform duration-300 animate-pulse-gentle animation-delay-500">
                2
              </div>
              <h3 className=" font-bold text-[var(--tog-color)]">
                AI Processing
              </h3>
              <p className="text-[var(--secondary-color)]">
                AI automatically detects and removes backgrounds with precision.
              </p>
              <div className="w-full h-32 bg-white rounded-[8px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-[var(--primary-color)] animate-spin" />
                  <span className="text-[var(--primary-color)] font-medium animate-pulse">
                    Processing...
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-4 text-center animate-fade-in-up animation-delay-700 group">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white  font-bold group-hover:scale-110 transition-transform duration-300 animate-pulse-gentle animation-delay-1000">
                3
              </div>
              <h3 className=" font-bold text-[var(--tog-color)]">
                Download Result
              </h3>
              <p className="text-[var(--secondary-color)]">
                Download your image with a transparent background in HD.
              </p>
              <div className="w-full h-32 bg-white rounded-[8px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <button className="inline-flex items-center px-4 py-2 bg-[var(--primary-color)] text-white text-sm font-medium rounded-md hover:bg-[var(--tog-color)] transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
