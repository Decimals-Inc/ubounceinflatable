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
		<div className="w-full">
			<NavigationContent />

			<div className="bg-[#F8F8F9] ">
				<div className="w-5/6 mx-auto">
					<div className="lg:flex justify-between items-center lg:px-20 py-40 ">
						<SecondContent
							icons={"hi"}
							heading={"We care"}
							content={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
							}
						/>
						<SecondContent
							icons={"hi"}
							heading={"We love"}
							content={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
							}
						/>
						<SecondContent
							icons={"hi"}
							heading={"We feel"}
							content={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
							}
						/>
					</div>
				</div>
			</div>

			<div className="w-5/6 mx-auto">
				<div className="lg:flex justify-between items-center py-40">
					<div className="lg:w-1/2 w-full">
						<img
							src={second}
							alt="Second"
							className="w-5/6 mx-auto"
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

			<div className="flex space-x-10 w-full overflow-x-auto p-16 lg:p-20">
				<section className="flex-shrink-0 w-80 lg:w-96 cursor-pointer">
					<img src={b1} alt="Cards" className="w-full h-72 mb-5" />
					<h4 className="py-2 text-2xl font-light">Red inflatable</h4>
					<p className="text-lg font-light">$ 80.00 per day</p>
				</section>
				<section className="flex-shrink-0 w-80 lg:w-96 cursor-pointer">
					<img src={b2} alt="Cards" className="w-full h-72 mb-5" />
					<h4 className="py-2 text-2xl font-light">Red inflatable</h4>
					<p className="text-lg font-light">$ 80.00 per day</p>
				</section>
				<section className="flex-shrink-0 w-80 lg:w-96 cursor-pointer">
					<img src={b3} alt="Cards" className="w-full h-72 mb-5" />
					<h4 className="py-2 text-2xl font-light">Red inflatable</h4>
					<p className="text-lg font-light">$ 80.00 per day</p>
				</section>
				<section className="flex-shrink-0 w-80 lg:w-96 cursor-pointer">
					<img src={b4} alt="Cards" className="w-full h-72 mb-5" />
					<h4 className="py-2 text-2xl font-light">Red inflatable</h4>
					<p className="text-lg font-light">$ 80.00 per day</p>
				</section>
				<section className="flex-shrink-0 w-80 lg:w-96 cursor-pointer">
					<img src={b5} alt="Cards" className="w-full h-72 mb-5" />
					<h4 className="py-2 text-2xl font-light">Red inflatable</h4>
					<p className="text-lg font-light">$ 80.00 per day</p>
				</section>
				<section className="flex-shrink-0 w-80 lg:w-96 cursor-pointer">
					<img src={b6} alt="Cards" className="w-full h-72 mb-5" />
					<h4 className="py-2 text-2xl font-light">Red inflatable</h4>
					<p className="text-lg font-light">$ 80.00 per day</p>
				</section>
			</div>

			<div className="w-5/6 mx-auto">
				<div className="lg:flex justify-between items-center py-40">
					<div className="lg:w-1/2 lg:p-24">
						<h3 className="text-4xl font-bold py-6">
							We care. We love. We see. We hope.{" "}
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
							className="w-5/6 mx-auto"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default HomePage;
