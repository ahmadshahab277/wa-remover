import React from "react";
import img1 from "../../assets/Images/img-1.jpg";
import img2 from "../../assets/Images/img-2.jpg";
import img3 from "../../assets/Images/img-3.jpg";
import img4 from "../../assets/Images/img-4.jpg";

const imageData = [
  { src: img1, title: "Original" },
  { src: img2, title: "Transparent Background" },
  { src: img3, title: "New Background" },
  { src: img4, title: "Endless Possibilites" },
];

const Picture = () => {
  return (
    <div className="container bg-[#F3F4F6] py-16 px-4 md:px-8 lg:px-20">
      <h2
        className="md:text-4xl font-bold text-center mb-5"
        style={{ color: "var(--primary-color)" }}
      >
        Just picture it
      </h2>

      <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-8">
        {imageData.map((item, index) => (
          <div key={index} className="text-center ">
            <img
              src={item.src}
              alt={item.title}
              className="w-full object-cover rounded-[8px] shadow-md mb-4"
            />
            <p
              className=" font-semibold"
              style={{ color: "var(--secondary-color)" }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picture;
