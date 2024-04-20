import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="flex flex-row bg-white h-[60px]">
        <div className="flex-1 flex justify-between pagePadding shadow-md items-center">
          <div className="text-xl md:text-2xl flex flex-row justify-center items-center">
            {/* Toggle menu on click */}
            <span className="text-center mx-4 md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </span>
            <span className="brand-title">Ecoyaan</span>
          </div>
          {/* Display menu items based on isMenuOpen */}
          <div
            className={`hidden md:justify-items-center gap-6 sm:hidden md:flex flex-row ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {/* Your menu items go here */}
            <div className="h-full flex justify-center items-center p-5 relative cursor-pointer nav-buttons">
              <div className="underline-offset-0 text-green-500 h-[0.2rem] rounded-full w-[90%] ml-[0.2rem] bottom-0 absolute"></div>
              <span className="ml-1">Home</span>
            </div>
            <div className="h-full flex justify-center items-center p-5 relative cursor-pointer nav-buttons">
              <span className="ml-1">About Us</span>
            </div>
            <div className="h-full flex justify-center items-center p-5 relative cursor-pointer nav-buttons">
              <span className="ml-1">Sell on Ecoyaan</span>
            </div>
            <div className="h-full flex justify-center items-center p-5 relative cursor-pointer nav-buttons">
              <span className="ml-1">Careers</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
