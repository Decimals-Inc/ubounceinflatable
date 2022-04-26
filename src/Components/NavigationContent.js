import React from "react";
import Navigation from "./Navigation";
import nav from "../Assets/Images/wallpaper.png";
import Button from "./Button";

const NavigationContent = () => {
	return (
		<div className="lg:h-screen w-full">
			<Navigation />
			<div className="lg:flex justify-between items-center">
				<div className="lg:w-1/2 px-10  mt-36">
					<h1 className="lg:text-6xl font-bold lg:py-6">
						Ubounce Inflatables
					</h1>
					<p className="py-6">
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
						className="w-full lg:h-screen"
					/>
				</div>
			</div>
		</div>
	);
};

export default NavigationContent;
