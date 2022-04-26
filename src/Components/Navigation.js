import React from "react";
import logo from "../Assets/Logo/logo.png";

const Navigation = () => {
  return (
    <div className="w-full lg:absolute lg:h-full lg:top-0">
      <div className="flex justify-between lg:h-20 items-center lg:px-10 px-3 py-5 ">
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-full" />
        </div>
        <nav>
          <ul>
            <li className="bg-[#FF6666] text-white px-6 py-4 cursor-pointer">Contact us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
