import { BsArrowRight } from "react-icons/bs";

import PolarisLogo from "../../assets/icons/PolarisLogo.svg";
import WemaLogo from "../../assets/icons/WemaLogo.svg";
import MintynLogo from "../../assets/icons/MintynLogo.svg";
import Laptop from "../../assets/images/Laptop.jpg";

import TestimonialCard from "../../components/TestimonialCard";
import TestimonialSwiper from "../../components/TestimonialSwiper";

function Fintech() {
	const testimonials = [
		TestimonialCard,
		TestimonialCard,
		TestimonialCard,
		TestimonialCard,
		TestimonialCard,
	];
	return (
		<>
			<section
				id="fintech"
				className="mt-24 md:mt-32 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between"
			>
				<div className="pb-16 md:pb-0 flex-1 md:mr-[4.375rem] mr-0">
					<h4 className="text-base md:text-sm font-semibold mb-2 md:mb-4 text-[#0CD704] uppercase">
						fintech
					</h4>
					<h3 className="font-semibold md:font-bold text-2xl md:text-5xl text-[#033401] mb-6">
						Empowering <span className="text-[#5CC758]">Fintech</span>{" "}
						Innovators with Strategic Solutions
					</h3>
					<p className="text-base md:text-xl text-[#667085] md:leading-8 mb-12">
						Unlock new opportunities and drive digital transformation in the
						fintech landscape with Unyte&apos;s tailored solutions and industry
						expertise.
					</p>
					<div className="flex items-center gap-x-2.5">
						<button
							type="button"
							className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl px-4 py-2 text-center mr-3 md:mr-0"
						>
							Get started
						</button>
						<a
							href="#"
							className="text-[#101323] font-medium flex items-center gap-x-2 px-4 py-2"
						>
							<span>Contact sales</span>
							<BsArrowRight />
						</a>
					</div>
				</div>
				<div className="flex-1"></div>
			</section>
			<section
				id="sponsors"
				className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5"
			>
				<div id="sponsors-text" className="text-center mb-10">
					<h3 className="text-xl font-semibold text-[#101323] mb-8">
						Businesses building and embedding with us
					</h3>
					<p className="text-[#667085] leading-7">
						Be a part of the top businesses engaging and connecting with their
						customers using Unyte.
					</p>
				</div>
				<div
					id="sponsors-companies"
					className="flex flex-col md:flex-row items-center justify-between px-5 md:px-[5.125rem]"
				>
					<div className="bg-[#F9FAFB] w-auto md:w-[19.325rem] h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={PolarisLogo} alt="company logo" />
					</div>
					<div className="bg-[#F9FAFB] w-auto md:w-[19.325rem] h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={WemaLogo} alt="company logo" />
					</div>
					<div className="bg-[#F9FAFB] w-auto md:w-[19.325rem] h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={MintynLogo} alt="company logo" />
					</div>
				</div>
			</section>
			<section className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5 flex flex-col md:flex-row">
				<div className="mb-8 md:mb-0 w-auto xl:w-[31.5625rem]">
					<h3 className="text-xl font-medium text-[#0CD704] mb-4 uppercase">
						overview
					</h3>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
						Unleash Fintech Potential
					</h2>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#667085] mb-6">
						with Innovative Solutions.
					</h2>
					<p className="text-[#667085] text-base leading-7 mb-10">
						In the fast-evolving world of Fintech, we understand the unique
						challenges you face. At Unyte, we empower Fintech companies to fuel
						growth, drive digital innovation, and stay ahead of the competition.
						Discover how our tailored solutions can transform your business.
					</p>
					<div className="flex items-center gap-x-2.5">
						<button
							type="button"
							className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl px-4 py-2 text-center mr-3 md:mr-0"
						>
							Get started
						</button>
						<a
							href="#"
							className="text-[#101323] font-medium flex items-center gap-x-2 px-4 py-2"
						>
							<span>Contact sales</span>
							<BsArrowRight />
						</a>
					</div>
				</div>
				<div className="">
					<img src={Laptop} alt="laptop" />
				</div>
			</section>
			<section className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5"></section>
			<section className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5"></section>
			<section
				className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5"
				id="testimonials"
			>
				<div className="flex flex-col lg:space-y-16 md:space-y-12 space-y-10">
					<div id="developers-text">
						<h3 className="text-xl font-medium text-[#0CD704] mb-4 uppercase">
							testimonials
						</h3>
						<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
							Loved by business builders
						</h2>
						<h2 className="text-[#667085] md:text-3xl text-2xl lg:text-4xl font-medium mb-4">
							See what others are saying
						</h2>
					</div>
					<div id="testimonial-slide">
						<TestimonialSwiper slides={testimonials} />
					</div>
				</div>
			</section>
		</>
	);
}

export default Fintech;
