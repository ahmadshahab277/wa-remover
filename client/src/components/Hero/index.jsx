import React from "react";
import { Upload, Sparkles } from "lucide-react";
import {useNavigate} from 'react-router-dom'
import {useLoading} from '../../contexts/LoaderContext'

const Hero = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const heroImg = "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=800&q=80";
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[var(--primary-color)] leading-tight">
            WA Remover
            <br />
            <span className="text-[var(--secondary-color)]">100% Automatically & Free</span>
          </h1>
          <p className="text-lg text-gray-600">
            Powered by AI — Upload your image and get a clean, transparent background in seconds. No sign-up, no hassle.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[var(--primary-color)] text-white px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-[var(--secondary-color)] transition duration-300 flex items-center space-x-2" onClick={()=>{navigate("/upload") ; setLoading(true) }}>
            <Upload className="h-5 w-5" />
              <span>Upload Image</span>
            </button>
            <a
              href="#works"
              className="text-[var(--tog-color)] hover:underline font-medium flex items-center space-x-1"
            >
              <Sparkles className="h-4 w-4" />
              <span className="">How it works</span>
            </a>
          </div>
        </div>

        {/* Right Preview Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-[var(--ter-color)] opacity-30 rounded-3xl blur-2xl z-0"></div>
          <img
            src={heroImg}
            alt="Modern workspace"
            className="relative z-10 w-full max-w-xl rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
