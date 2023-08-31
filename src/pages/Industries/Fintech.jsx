import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";

import PolarisLogo from "../../assets/icons/PolarisLogo.svg";
import WemaLogo from "../../assets/icons/WemaLogo.svg";
import MintynLogo from "../../assets/icons/MintynLogo.svg";
import Database from "../../assets/icons/Database.svg";
import CodeblockIcon from "../../assets/icons/CodeblockIcon.svg";
//import Laptop from "../../assets/images/Laptop.jpg";

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
				className="mt-48 md:mt-32 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between"
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
							className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl px-6 py-3 text-center mr-3 md:mr-0"
						>
							Get started
						</button>
						<a
							href="#"
							className="text-[#101323] group font-medium flex items-center gap-x-2 px-6 py-3"
						>
							<span>Contact sales</span>
							<BsArrowRight className="transform transition-transform origin-bottom group-hover:scale-x-150" />
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
					<div className="bg-[#F9FAFB] mb-6 w-[19.325rem] h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={PolarisLogo} alt="company logo" />
					</div>
					<div className="bg-[#F9FAFB] mb-6 w-[19.325rem] h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={WemaLogo} alt="company logo" />
					</div>
					<div className="bg-[#F9FAFB] w-[19.325rem] h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={MintynLogo} alt="company logo" />
					</div>
				</div>
			</section>
			{/*<section className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5 flex flex-col md:flex-row space-x-12 md:space-x-0">
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
							className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl px-6 py-3 text-center mr-3 md:mr-0"
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
	</section> */}
			<section className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5 flex flex-col">
				<div className="mb-20 md:mb-16 text-center md:text-left">
					<h3 className="text-xl font-medium text-[#0CD704] mb-4 uppercase">
						benefits
					</h3>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
						Enhancing Financial Well-being
					</h2>
					<p className="text-[#667085] text-base leading-7 mb-10">
						Discover the advantages and value-added benefits that our
						partnership brings, empowering you to{" "}
						<br className="hidden md:block" />
						achieve financial success.
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-between space-y-[3.5rem] md:space-y-0 space-x-0 md:space-x-6">
					<div className="text-center px-[2.125rem] md:px-[3.5625rem] pt-[4.125rem] pb-[2.125rem] md:pb-[5.25rem] rounded-2xl bg-[#F9FAFB] h-[18.75rem] w-auto md:w-[24.8125rem] md:h-[21.875rem] relative">
						<img
							src={Database}
							alt="database icon"
							className="absolute -top-7 left-[9.5rem]  md:left-[10.5rem]"
						/>
						<p className="text-[#101323] text-xl mb-4 font-semibold">
							Cash add
						</p>
						<p className="text-[#667085]">
							we let you focus on your core business while seamlessly receiving
							substantial commissions from products sold on your platform. An
							easy way to commercialize your user base
						</p>
					</div>
					<div className="text-center px-[2.125rem] md:px-[3.5625rem] pt-[4.125rem] pb-[2.125rem] md:pb-[5.25rem] rounded-2xl bg-[#F9FAFB] h-[18.75rem] w-auto md:w-[24.8125rem] md:h-[21.875rem] relative">
						<img
							src={CodeblockIcon}
							alt="database icon"
							className="absolute -top-7 left-[9.5rem] md:left-[10.5rem]"
						/>
						<p className="text-[#101323] text-xl mb-4 font-semibold">
							Hassel free
						</p>
						<p className="text-[#667085]">
							simplified operations monitoring captured on a detailed merchant
							dashboard containing policy submissions, renewals, claim requests,
							revenue report and so on
						</p>
					</div>
					<div className="text-center px-[2.125rem] md:px-[3.5625rem] pt-[4.125rem] pb-[2.125rem] md:pb-[5.25rem] rounded-2xl bg-[#F9FAFB] h-[18.75rem] w-auto md:w-[24.8125rem] md:h-[21.875rem] relative">
						<img
							src={Database}
							alt="database icon"
							className="absolute -top-7 left-[9.5rem] md:left-[10.5rem]"
						/>
						<p className="text-[#101323] text-xl mb-4 font-semibold">
							Supercharge
						</p>
						<p className="text-[#667085]">
							we enable you supercharge your proposition by mitigating risks in
							existing products (i.e., loans) through embedded insurance.
						</p>
					</div>
				</div>
			</section>
			<section className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5 flex flex-col">
				<div className="mb-12">
					<h3 className="text-xl font-medium text-[#0CD704] mb-4 uppercase">
						case studies
					</h3>
					<div className="flex flex-col md:flex-row justify-between">
						<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] flex-1 mb-4 md:mb-0 mr-0 md:mr-[6.5625rem]">
							Mint-Finex MFB sees a 3x increase in conversion rate for launch
							customers
						</h2>
						<p className="text-xl text-[#667085] leading-7 flex-1">
							Mint-Finex partnered with Unyte to transform the digital lending
							experience, seamlessly integrating comprehensive insurance
							solutions for enhanced borrower protection and peace of mind.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between">
					<div className="flex-1 mr-0 md:mr-[6.5625rem]">
						<div className="mb-6">
							<div className="mb-4 flex items-center">
								<RxDividerVertical className="text-[#0CD704] mr-4" />
								<p className="font-semibold text-[#101323]">Challenge</p>
							</div>
							<p className="text-[#667085] ml-7">
								Traditional lending platforms overlook insurance coverage,
								leaving borrowers vulnerable. Mint-Finex aimed to bridge this
								gap by integrating comprehensive insurance solutions,
								prioritizing borrower financial protection.
							</p>
						</div>
						<div className="mb-6">
							<div className="mb-4 flex items-center">
								<RxDividerVertical className="text-[#0CD704] mr-4" />
								<p className="font-semibold text-[#101323]">The Solution</p>
							</div>
							<p className="text-[#667085] ml-7">
								By partnering with Unyte, we seamlessly embedded insurance
								offerings within our lending platform, empowering borrowers with
								tailored coverage options for enhanced financial security
								throughout their borrowing journey.
							</p>
						</div>
						<div className="mb-6">
							<div className="mb-4 flex items-center">
								<RxDividerVertical className="text-[#0CD704] mr-4" />
								<p className="font-semibold text-[#101323]">Challenge</p>
							</div>
							<div className="ml-7 grid grid-cols-1 md:grid-cols-2">
								<div className="gap-x-2 flex items-center mb-2">
									<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
										<GiCheckMark className="text-[#5CC758] text-sm" />
									</div>
									<p className="text-base leading-7 text-[#667085]">
										Expanded Reach
									</p>
								</div>
								<div className="gap-x-2 flex items-center mb-2">
									<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
										<GiCheckMark className="text-[#5CC758] text-sm" />
									</div>
									<p className="text-base leading-7 text-[#667085]">
										Enhanced Offerings
									</p>
								</div>
								<div className="gap-x-2 flex items-center mb-2">
									<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
										<GiCheckMark className="text-[#5CC758] text-sm" />
									</div>
									<p className="text-base leading-7 text-[#667085]">
										Increased Revenue
									</p>
								</div>
							</div>
						</div>
					</div>
					<div id="stacked-card" className="flex-1">
						<div className="h-[24rem] w-auto md:w-[33rem] bg-[#E6F6FF] rounded-2xl shadow p-5 md:p-10 pb-0">
							<img src={MintynLogo} alt="mintyn logo" className="h-6 mb-4" />
							<div className="bg-white p-5 text-center rounded-t-3xl pb-4">
								<h4 className="md:text-xl text-lg font-semibold mb-6">
									Some fancy headline praising Unyte x{" "}
									<br className="hidden md:block" />
									mansard’s partnership
								</h4>
								<p className="text-sm md:text-base mb-6 leading-7 text-[#667085]">
									Through our collaboration with Unyte, we have revolutionized
									the lending experience, providing our customers with a
									comprehensive financial solution that combines lending
									services with robust insurance coverage.
								</p>
								<div className="flex items-center justify-center">
									<button
										type="button"
										className="text-[#101323] group bg-transparent border border-[#D0D5DD] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-6 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
									>
										<span>Learn more</span>{" "}
										<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
					<div id="testimonial-desktop" className="hidden md:block">
						<TestimonialSwiper slides={testimonials} slidesPerView={3} />
					</div>
					<div id="testimonial-mobile" className="block md:hidden">
						<TestimonialSwiper slides={testimonials} slidesPerView={1} />
					</div>
				</div>
			</section>
		</>
	);
}

export default Fintech;
