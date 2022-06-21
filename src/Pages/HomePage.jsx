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
import InflatableComponent from "../Components/InflatableComponent";

const HomePage = () => {
	return (
		<div className="w-full">
			<NavigationContent />

			<div className="bg-[#F8F8F9] ">
				<div className="w-5/6 mx-auto">
					<div className="lg:flex justify-between items-center lg:px-20 py-40 ">
						<SecondContent
							icons={"Inflatable"}
							heading={"We care"}
							content={
								"We make sure to give you the best experience."
							}
						/>
						<SecondContent
							icons={"Love"}
							heading={"We love"}
							content={
								"At Ubounce Inflatables , our customers safety is our top priority. "
							}
						/>
						<SecondContent
							icons={"Happiness"}
							heading={"We feel"}
							content={
								"Put a smiles on childrens face."
							}
						/>
					</div>
				</div>
			</div>

			<div className="w-5/6 mx-auto">
				<div className="lg:flex justify-between items-center py-20 lg:py-40">
					<div className="lg:w-1/2 w-full">
						<img
							src={second}
							alt="Second"
							className="lg:w-5/6 mx-auto"
						/>
					</div>
					<div className="lg:w-1/2 w-full lg:p-24">
						<h3 className="text-4xl font-bold py-6">
							We care. We love. We see. We hope.
						</h3>
						<p>
							At Ubounce Inflatables, we offer the best and most
							secure inflatables for all occasions. We take pride
							in offering low-cost, clean inflatables.
						</p>
						<Button />
					</div>
				</div>

				<div className="text-center py-3">
					<h3 className="text-4xl font-bold">Rentals</h3>
					<p className="text-lg py-3">
						Available inflatable for rental
					</p>
				</div>
			</div>

			<div className="flex space-x-10 w-full overflow-x-auto p-8 lg:p-20">
				<InflatableComponent
					image={b1}
					name={"Inflatable Package 1"}
					price={"80.00"}
				/>
				<InflatableComponent
					image={b2}
					name={"Inflatable Package 2"}
					price={"80.00"}
				/>
				<InflatableComponent
					image={b3}
					name={"Inflatable Package 3"}
					price={"80.00"}
				/>
				<InflatableComponent
					image={b4}
					name={"Inflatable Package 4"}
					price={"80.00"}
				/>
				<InflatableComponent
					image={b5}
					name={"Inflatable Package 5"}
					price={"80.00"}
				/>
				<InflatableComponent
					image={b6}
					name={"Inflatable Package 6"}
					price={"80.00"}
				/>
			</div>

			<div className="w-5/6 mx-auto">
				<div className="lg:flex justify-between items-center py-20 lg:py-40">
					<div className="lg:w-1/2 lg:p-24">
						<h3 className="text-4xl font-bold py-6">
							Our goal
						</h3>
						<p>
							Our goal is to provide individuals, groups, and
							organizations with safe, affordable, clean, and
							high-quality inflatables for all occasions.
						</p>
						<Button />
					</div>
					<div className="lg:w-1/2">
						<img
							src={second}
							alt="Second"
							className="lg:w-5/6 mx-auto"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default HomePage;
