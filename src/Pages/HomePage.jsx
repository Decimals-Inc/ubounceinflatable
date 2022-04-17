import React from "react";
import NavigationContent from "../Components/NavigationContent";
import second from "../Assets/Images/second.png";
import b1 from "../Assets/Images/1.jpeg";
import b2 from "../Assets/Images/2.jpeg";
import b3 from "../Assets/Images/3.jpeg";
import b4 from "../Assets/Images/4.jpeg";
import b5 from "../Assets/Images/5.jpeg";
import b6 from "../Assets/Images/6.jpeg";
import Button from "../Components/Button";
import SecondContent from "../Components/SecondContent";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavigationContent />
      <div className="lg:flex justify-between items-center lg:px-20 py-40 bg-[#F8F8F9]">
        <SecondContent
          icons={"hi"}
          heading={"We care"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        />
        <SecondContent
          icons={"hi"}
          heading={"We care"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        />
        <SecondContent
          icons={"hi"}
          heading={"We care"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        />
      </div>
      <div className="lg:flex justify-between items-center lg:p-20">
        <div className="lg:w-1/2 w-full">
          <img src={second} alt="Second" className="w-11/12 mx-auto" />
        </div>
        <div className="lg:w-1/2 w-full">
          <h3 className="text-4xl font-bold py-6">
            We care. We love. We see. We hope.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <Button />
        </div>
      </div>
      <div className="text-center my-3">
        <h3 className="text-4xl">Rentals</h3>
        <p>Available inflatable for rental</p>
      </div>
      <div className="w-full flex overflow-y-scroll py-8">
        <img src={b1} className="w-80 h-80  mx-8" alt="rentals" />
        <img src={b2} className="w-80 h-80  mx-8" alt="rentals" />
        <img src={b3} className="w-80 h-80  mx-8" alt="rentals" />
        <img src={b4} className="w-80 h-80  mx-8" alt="rentals" />
        <img src={b5} className="w-80 h-80  mx-8" alt="rentals" />
        <img src={b6} className="w-80 h-80  mx-8" alt="rentals" />
      </div>
      <div className="lg:flex justify-between items-center lg:p-20">
        <div className="lg:w-1/2">
          <h3  className="text-4xl font-bold py-6">We care. We love. We see. We hope. </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <Button />
        </div>
        <div className="lg:w-1/2">
          <img src={second} alt="Second" className="w-11/12 mx-auto" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
