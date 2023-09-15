import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { useParams } from "react-router-dom";

import PolarisLogo from "../../assets/icons/PolarisLogo.svg";
import WemaLogo from "../../assets/icons/WemaLogo.svg";
import MintynLogo from "../../assets/icons/MintynLogo.svg";
import WavyArrow from "../../assets/icons/WavyArrow.svg";
import Dice from "../../assets/icons/Dice.svg";
import CodeSection from "../../assets/images/CodeSection.png";
import OmbreBG from "../../assets/images/OmbreBG.svg";

import CoverageAccordion from "../../components/CoverageAccordion";
import Coverage from "./components/Coverage.jsx";

import { products } from "../../Data/products";

function Products() {
	const { productType } = useParams();
	const product = products[productType];
	return (
		<>
			<section
				id="modernizing insurance"
				className="mt-64 md:mt-48 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between"
			>
				<div className="pb-16 md:pb-0 flex-1 md:mr-[4.375rem] mr-0">
					<h4 className="text-base md:text-sm font-semibold mb-2 md:mb-4 text-[#0CD704] uppercase">
						unyte {product.name}
					</h4>
					<h3 className="font-semibold md:font-bold text-2xl md:text-5xl text-[#033401] mb-6">
						{product.header}
					</h3>
					<p className="text-base md:text-xl text-[#667085] md:leading-8 mb-12">
						{product.desc}
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
							className="text-[#101323] font-medium flex items-center gap-x-2 px-4 py-2 group"
						>
							<span>Contact sales</span>
							<BsArrowRight className="transform transition-transform origin-bottom group-hover:scale-x-125" />
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
			<section
				className="py-20 md:pb-0 bg-[#101323] md:px-12 xl:px-5 px-5"
				id="developers"
			>
				<div className="max-w-screen-xl mx-auto">
					<div className="flex flex-col">
						<div className="flex flex-col md:flex-row items-center justify-between">
							<div
								id="developers-text"
								className="flex-1 md:mr-[4.375rem] mr-0 mb-[9.5rem] mt-[9.625rem] md:mt-0 md:mb-0"
							>
								<h3 className="text-xl font-medium text-[#0CD704] mb-4 uppercase">
									made for developers by developers
								</h3>
								<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#ffffff] mb-4">
									Seamlessly integrated
									<br className="hidden md:block" />
									with all your languages
								</h2>
								<p className="text-[#667085] leading-7 mb-8">
									Implement any or all of Unyte’s products with just a few lines
									of code in <br className="hidden md:block" />
									any language!
								</p>
								<div>
									<button
										type="button"
										className="text-white bg-[#5CC758] group focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-8 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
									>
										<span>Read our docs</span>{" "}
										<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
									</button>
								</div>
							</div>
							<div id="code tab" className="flex-1">
								<img src={CodeSection} alt="code section" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*<section
				className="py-16 md:py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5 flex flex-col items-center"
				id="benefits"
			>
				<div
					id="benefits-texts"
					className="text-center mb-12 w-auto md:w-[45.875rem]"
				>
					<p className="text-[#0CD704] font-medium text-base md:text-xl uppercase mb-4">
						benefits
					</p>
					<h3 className="mb-6 font-medium text-[#101323] text-2xl md:text-[2.438rem] leading-12">
						Streamline Integration with Robust API Solutions
					</h3>
					<p className="text-[#667085]">
						With Unyte Launch, you can streamline the integration process
						effortlessly. Our robust API solutions provide a seamless connection
						between your platform and insurance offerings, eliminating
						complexities and reducing implementation time.
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
					<div className="h-[9.8125rem] w-[9.8125rem] md:w-[18rem] flex items-center justify-center bg-[#F9FAFB] rounded-2xl">
						<div className="text-white text-center">
							<p className="mb-4 font-bold text-[2rem] md:text-[2.5rem] text-[#101323]">
								99.99%
							</p>
							<p className="text-[#667085]">Reliance</p>
						</div>
					</div>
					<div className="h-[9.8125rem] w-[9.8125rem] md:w-[18rem] flex items-center justify-center bg-[#F9FAFB] rounded-2xl">
						<div className="text-white text-center">
							<p className="mb-4 font-bold text-[2rem] md:text-[2.5rem] text-[#101323]">
								99.99%
							</p>
							<p className="text-[#667085]">Uptime</p>
						</div>
					</div>
					<div className="h-[9.8125rem] w-[9.8125rem] md:w-[19rem] flex items-center justify-center bg-[#F9FAFB] rounded-2xl">
						<div className="text-white text-center">
							<p className="md:hidden mb-4 font-bold text-[2rem] md:text-[2.5rem] text-[#101323]">
								65 M<span className="hidden md:block">illion</span>
							</p>
							<p className="hidden md:block mb-4 font-bold text-[2rem] md:text-[2.5rem] text-[#101323]">
								65 Million
							</p>
							<p className="text-[#667085]">Messages/sec</p>
						</div>
					</div>
					<div className="h-[9.8125rem] w-[9.8125rem] md:w-[18rem] flex items-center justify-center bg-[#F9FAFB] rounded-2xl">
						<div className="text-white text-center">
							<p className="md:hidden mb-4 font-bold text-[2rem] md:text-[2.5rem] text-[#101323]">
								1 Billion <span className="hidden md:block">+</span>
							</p>
							<p className="hidden md:block mb-4 font-bold text-[2rem] md:text-[2.5rem] text-[#101323]">
								1 Billion +
							</p>
							<p className="text-[#667085]">Rows of Data</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-auto">
					<button
						type="button"
						className="text-white block w-full md:w-auto bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-6 py-3 text-center mr-3 md:mr-0"
					>
						Get started for free
					</button>
				</div>
	</section> */}
			<section
				className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5 flex flex-col md:flex-row space-y-12 md:space-y-0"
				id="coverage"
			>
				<div className="flex-1 md:mr-[4.375rem] mr-0">
					<p className="text-[#0CD704] font-medium text-base md:text-xl mb-4">
						coverage
					</p>
					<p className="text-[#101323] text-2xl md:text-[2.438rem] mb-4 font-medium">
						Extensive Health Coverage
					</p>
					<p className="text-[#667085] text-2xl md:text-[2.438rem] mb-4 font-medium">
						for Your Users.
					</p>
					<p className="text-[#667085] mb-6">
						Unyte Health offers a wide range of coverage options to address your
						medical requirements. Including:
					</p>
					<div id="coverage-accordion">
						<CoverageAccordion />
					</div>
				</div>
				<div className="flex-1">
					<Coverage />
				</div>
			</section>
			<section
				className="py-20 md:px-12 xl:px-5 px-5 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${OmbreBG})` }}
			>
				<div className="max-w-screen-xl mx-auto flex flex-col">
					<div id="usecases" className="mb-[4.8125rem]">
						<p className="mb-4 text-[#0CD704] font-medium text-base uppercase md:text-[#667085] md:text-xl md:font-normal">
							use cases
						</p>
						<h3 className="mb-4 text-[#101323] font-medium text-2xl md:text-[2.4375rem]">
							What can you gain with
						</h3>
						<h3 className="font-medium text-2xl md:text-[2.4375rem] text-[#667085]">
							Unyte Health?
						</h3>
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="mr-0 md:mr-[1.75rem] flex flex-col justify-between mb-[2.975rem] md:mb-0 h-[34.0625rem] md:h-[48.625rem] w-auto xl:w-[30.125rem] bg-[#E6FFF3B2] rounded-[2rem] px-5 py-[4.1875rem] relative">
							<img
								src={WavyArrow}
								alt="wavy arrow"
								className="absolute top-52 md:top-96 left-0"
							/>
							<div>
								<h4 className="mb-6 font-bold text-2xl md:text-[2.25rem] text-[#033401] md:leading-12">
									Prioritize the Well-being of your business and users with{" "}
									<span className="text-[#5CC758]">Unyte Health Insurance</span>
								</h4>
								<p className="mb-[8.3125rem] md:mb-[18.5rem] text-[#101323]">
									Comprehensive health insurance solutions designed to protect
									and enhance your physical and financial well-being.
								</p>
							</div>
							<button
								type="button"
								className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl px-6 py-3 text-center mr-3 md:mr-0"
							>
								Get started for free
							</button>
						</div>
						<div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4">
							<div className="shadow rounded-3xl bg-white p-[1.875rem]">
								<img src={Dice} alt="dice" />
								<h4 className="mb-2 mt-[6.9375rem] text-[#033401] text-xl font-semibold">
									Comprehensive Coverage
								</h4>
								<p className="text-[#667085] leading-7">
									Protection for medical expenses, hospital stays, and
									preventive care.
								</p>
							</div>
							<div className="shadow rounded-3xl bg-white p-[1.875rem]">
								<img src={Dice} alt="dice" />
								<h4 className="mb-2 mt-[6.9375rem] text-[#033401] text-xl font-semibold">
									Extensive Network
								</h4>
								<p className="text-[#667085] leading-7">
									Access to a wide network of trusted healthcare providers for
									quality care.
								</p>
							</div>
							<div className="shadow rounded-3xl bg-white p-[1.875rem]">
								<img src={Dice} alt="dice" />
								<h4 className="mb-2 mt-[6.9375rem] text-[#033401] text-xl font-semibold">
									Flexible Customization
								</h4>
								<p className="text-[#667085] leading-7">
									Tailor your health insurance plan to match your unique needs
									and budget.
								</p>
							</div>
							<div className="shadow rounded-3xl bg-white p-[1.875rem]">
								<img src={Dice} alt="dice" />
								<h4 className="mb-2 mt-[6.9375rem] text-[#033401] text-xl font-semibold">
									Telemedicine Consultations
								</h4>
								<p className="text-[#667085] leading-7">
									Convenient virtual healthcare access for medical advice and
									prescriptions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*
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
	*/}
		</>
	);
}

export default Products;
