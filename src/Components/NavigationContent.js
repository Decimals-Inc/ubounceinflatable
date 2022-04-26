import React from "react";
import Navigation from "./Navigation";
import nav from "../Assets/Images/wallpaper.png";
import Button from "./Button";

const NavigationContent = () => {
	return (
		<div className="h-screen w-full background">
			<Navigation />
			<div className="lg:flex justify-between items-center">
				<div className="lg:w-1/2 px-6 lg:px-10 my-60 text-white lg:text-black">
					<h1 className="text-6xl font-bold lg:py-6">
						Ubounce Inflatables
					</h1>
					<p className="py-6 text-lg text-justify">
						Ubounce Inflatables rents out inflatable structures and
						buildings for functions, schools and recreational
						purposes to individuals, groups, organisations etc. Get
						affordable and quality bouncing castles now!.
					</p>
					<div className="w-full lg:w-60">
						<Button />
					</div>
				</div>
				<div className="h-full lg:w-1/2">
					<img
						src={nav}
						alt={"ubounceimage"}
						className="w-full lg:h-screen hidden lg:block"
					/>
				</div>
			</div>
		</div>
	);
};

export default NavigationContent;
