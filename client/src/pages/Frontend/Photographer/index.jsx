import React from "react";
import BgSamples from "../../../components/BgSamples";
import dogShirt from "../../../assets/Images/dog-shirt.png";
import bgVideo from "../../../assets/Images/bgremove.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestPic from "../../../components/TestPic";
import UploadPage from "../UploadPage";

export default function Photographer() {
  const testimonials = [
    {
      name: "Ayesha M.",
      review:
        "Amazing background remover! It saved me hours for my Etsy store listings.",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Omar R.",
      review:
        "Clean, fast, and super easy to use. Perfect for my design workflow.",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
    {
      name: "Sana K.",
      review:
        "I used it to create transparent logos — worked flawlessly every time!",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Junaid A.",
      review:
        "One of the most accurate BG removers I've tested. Highly recommend.",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
  ];
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-[#F3F4F6]">
        <div className="mx-auto w-full px-8 max-w-5xl py-10 flex  justify-center ">
          <div className="flex items-center flex-col gap-4">
            <p className="text-center !text-[18px] font-bold text-[#666]">
              Erase image background
            </p>
            <h1 className="font-bold text-center max-w-3xl">
              Backgrounds for Photographer
            </h1>
            <a
              href="/upload"
              className="bg-white button-2 text-[var(--secondary-color)] px-4 py-2 rounded-[8px] font-medium hover:bg-[var(--ter-color)] cursor-pointer transition duration-200 flex items-center space-x-2"
            >
              {" "}
              Background Remove
            </a>
          </div>
        </div>
        {/* Background Samples */}
        <div className="mx-auto w-full px-8 max-w-7xl py-10">
          <BgSamples />
        </div>

        {/* Content Section */}
        <div className="w-full py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-bold text-gray-900 mb-6">
                Why remove the background
                <br /> from your picture?
              </h2>
              <p className="text-[#333]">
                Removing the background from an image lets you place your
                subject in new creative settings. Whether you want to
                <span className="font-semibold text-black">
                  {" "}
                  enhance a presentation
                </span>
                ,
                <span className="text-[var(--tog-color)] font-medium cursor-pointer">
                  {" "}
                  clean up a logo
                </span>
                , or design a{" "}
                <span className="font-semibold text-black">
                  custom product
                </span>{" "}
                like a mug or a T-shirt— background removal ensures your design
                looks clean, professional, and impactful.
              </p>
            </div>

            {/* Right Visual */}
            <div className=" w-full h-full flex justify-center items-center">
              {/* Image Stack */}
              <div className="">
                <img src={dogShirt} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Content video Section */}
        <div className="w-full py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Right Visual */}
            <div className=" w-full h-full flex justify-center items-center">
              {/* video Stack */}
              <div className="">
                <video
                  src={bgVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-[12px] w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Left Content */}
            <div>
              <h2 className="font-bold text-gray-900 mb-6">
                Why remove the background
                <br /> from your picture?
              </h2>
              <p className="text-[#333]">
                Removing the background from an image lets you place your
                subject in new creative settings. Whether you want to
                <span className="font-semibold text-black">
                  {" "}
                  enhance a presentation
                </span>
                ,
                <span className="text-[var(--tog-color)] font-medium cursor-pointer">
                  {" "}
                  clean up a logo
                </span>
                , or design a{" "}
                <span className="font-semibold text-black">
                  custom product
                </span>{" "}
                like a mug or a T-shirt— background removal ensures your design
                looks clean, professional, and impactful.
              </p>
            </div>
          </div>
        </div>

        {/* Test Images */}
        <div className="w-full">
          <TestPic />
        </div>
        {/* Testimonials Section */}
        <div className="w-full pb-16 bg-[#F3F4F6]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-bold text-[var(--tog-color)] mb-8">
              What Users Are Saying
            </h2>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl shadow-md px-6 py-8 mx-4 flex flex-col items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4 border-2 border-[var(--ter-color)] object-cover"
                    />
                    <p className="text-[#333] italic mb-4">
                      "{testimonial.review}"
                    </p>
                    <h4 className="font-semibold text-[#333]">
                      — {testimonial.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-full">
          <UploadPage />
        </div>
      </section>
    </>
  );
}
