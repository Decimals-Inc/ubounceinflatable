import React from "react";
import Navigation from "./Navigation";
import nav from "../Assets/Images/nav.png";
import Button from "./Button";

const NavigationContent = () => {
  return (
    <div className="h-screen">
      <Navigation />
      <div className="flex justify-between items-center ">
        <div className="w-1/2 px-10">
          <h1 className="text-6xl font-bold py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <Button/>
        </div>
        <div className="h-full w-1/2">
          <img src={nav} alt={"ubounceimage"} className="w-full h-screen" />
        </div>
      </div>
    </div>
  );
};

export default NavigationContent;
