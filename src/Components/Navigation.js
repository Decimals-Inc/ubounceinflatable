import React from "react";
import logo from "../Assets/Logo/logo.png";

const Navigation = () => {
  return (
    <div className="w-full fixed ">
      <div className="flex justify-between h-20 items-center px-10 py-5">
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
