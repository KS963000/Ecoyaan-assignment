import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdHorizontalRule } from "react-icons/md";

export const Slider = () => {
    const slides = [
      {
        url: "https://ecoyaan.com/images/carousel-1.png",
        title: "Buy Less, Buy Better!",
        text: "Authentic source of truth for your sustainability needs.",
        button: "About Us",
      },
      {
        url: "https://ecoyaan.com/images/carousel-2.png",
        title: "Follow us on Instagram",
        text: "For climate news, lifestyle tips, & updates",
        button: "Follow Us",
      },
      {
        url: "https://ecoyaan.com/images/carousel-3.png",
        title: "Are you a business that truly cares about sustainability?",
        text: "We would love to work with you",
        button: "Get In Touch",
      },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

    useEffect(() => {
      const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      return () => clearInterval(intervalId);
    }, [currentIndex]);

  return (
    <div className="max-w-full max-h-fit w-full m-auto  relative group overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
        }}
        className="w-full h-full bg-cover bg-center duration-500"
      >
        <div className="min-fit md:h-[600px]">
          <div className="flex justify-start">
            <div className="flex flex-col mb-24 pt-3 pl-3 pr-16 md:mt-40 ">
              <div className="md:mx-20 mr-10">
                <div className="text-md md:text-2xl font-bold">
                  {slides[currentIndex].title}
                </div>
                <div className=" text-sm md:text-lg">
                  {slides[currentIndex].text}
                </div>
                <button className="bg-green-500 text-white hover:scale-110 px-2 py-2 mt-2 text-sm md:text-lg rounded-lg">
                  {slides[currentIndex].button}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end h-full">
            <div className="text-2xl absolute bottom-0">
              <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer"
                  >
                    <MdHorizontalRule />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

