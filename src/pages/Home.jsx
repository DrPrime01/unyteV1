import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";

import BigCubes from "../assets/icons/BigCubes.svg";
import AxaMansardLogo from "../assets/icons/AxaMansardLogo.svg";
import HeirsLifeLogo from "../assets/icons/HeirsLifeLogo.svg";
import LeadwayAssuranceLogo from "../assets/icons/LeadwayAssuranceLogo.svg";
import StacoLogo from "../assets/icons/StacoLogo.svg";
import MintynLogo from "../assets/icons/MintynLogo.svg";
import InterswitchLogo from "../assets/icons/InterswitchLogo.svg";
import Ideas from "../assets/icons/Ideas.svg";
import Health from "../assets/icons/Health.svg";
import Education from "../assets/icons/Education.svg";
import Security from "../assets/icons/Security.svg";
import Motor from "../assets/icons/Motor.svg";
import Dice from "../assets/icons/Dice.svg";
import OmbreBG from "../assets/images/OmbreBG.svg";
import CTA from "../assets/images/CTA.svg";

import TabComponent from "../components/TabComponent";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialSwiper from "../components/TestimonialSwiper";
import Accordion from "../components/Accordion";

function Home() {
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
				id="hero"
				className="flex flex-col md:space-y-8 space-y-4 mt-32 mb-6 p-4 max-w-screen-xl mx-auto"
			>
				<div id="hero-texts" className="text-center">
					<div className="gap-x-4 flex items-center justify-center mb-6">
						<span className="text-[#5CC758] text-[0.75rem] bg-[#B1FDAD] bg-opacity-30 border border-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-3 py-1.5 text-center mr-3 md:mr-0">
							What&apos;s new?
						</span>
						<a
							href="#"
							className="text-[#667085] text-[0.75rem] font-medium flex items-center gap-x-2"
						>
							<span>July release notes</span>
							<AiOutlineArrowRight />
						</a>
					</div>
					<h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-[#101323] mb-4">
						Modernizing Insurance
					</h2>
					<h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-[#667085] mb-4">
						One Step at a Time With Seamless Integration
					</h2>
					<p className="text-[#667085] text-base leading-7">
						At Unyte, we&apos;re on a mission to modernize the insurance
						industry. We believe <br className="hidden lg:block" />
						that the industry runs on old technology, and we&apos;re here to
						change that.
					</p>
					<div className="flex items-center justify-center mt-6">
						<button
							type="button"
							className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
						>
							Get started for free
						</button>
					</div>
				</div>
				<div className="relative">
					<img src={BigCubes} alt="dice" className="absolute -top-20 -left-6" />
					<div className="grid grid-cols-6 grid-rows-4 gap-4 md:h-96">
						<div className="bg-[#C8FFC6] rounded-2xl row-span-full"></div>
						<div className="bg-[#F9FAFB] rounded-2xl row-start-1 row-end-3"></div>
						<div className="bg-[#F9FAFB] rounded-2xl row-start-1 row-end-3"></div>
						<div className="bg-[#F9FAFB] rounded-2xl row-span-full"></div>
						<div className="bg-[#F9FAFB] rounded-2xl row-start-3 row-end-5"></div>
						<div className="bg-[#F9FAFB] rounded-2xl col-start-3 col-end-5 row-start-2 row-end-5"></div>
						<div className="bg-[#F9FAFB] rounded-2xl row-start-3 row-end-5"></div>
					</div>
				</div>
			</section>
			<section id="sponsors" className="py-10 max-w-screen-xl mx-auto px-4">
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
					className="flex items-center justify-between"
				>
					<img src={AxaMansardLogo} alt="company logo" />
					<img src={HeirsLifeLogo} alt="company logo" />
					<img src={LeadwayAssuranceLogo} alt="company logo" />
					<img src={StacoLogo} alt="company logo" />
					<img src={MintynLogo} alt="company logo" />
					<img src={InterswitchLogo} alt="company logo" />
				</div>
			</section>
			<section
				id="unlocking possibilities"
				className="py-10 max-w-screen-xl mx-auto px-4"
			>
				<div className="mb-8">
					<h3 className="text-xl font-medium text-[#0CD704] mb-4 uppercase">
						Unlocking Possibilities
					</h3>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
						Everything You Need To Embed
					</h2>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#667085] mb-6">
						Insurance Into Your Products.
					</h2>
					<p className="text-[#667085] text-base leading-7">
						Discover Unyte Africa, where insurance meets technology. We&apos;re
						dedicated to demystifying insurance and{" "}
						<br className="hidden lg:block" />
						making it easier for businesses to offer robust coverage to their
						customers. With our cutting-edge solutions,{" "}
						<br className="hidden lg:block" />
						you can embrace the future of insurance
					</p>
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6 lg:gap-12 mb-12">
					<div>
						<div className="gap-x-2 flex items-center mb-2">
							<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
								<GiCheckMark className="text-[#5CC758] text-sm" />
							</div>
							<h4 className="font-semibold">Top Insurance Providers</h4>
						</div>
						<p className="text-[#667085] pl-8 leading-7">
							You can contact top insurance companies directly thanks to our
							consolidated platform. Stop struggling to manage numerous
							partnerships.
						</p>
					</div>
					<div>
						<div className="gap-x-2 flex items-center mb-2">
							<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
								<GiCheckMark className="text-[#5CC758] text-sm" />
							</div>
							<h4 className="font-semibold">White Label Solution</h4>
						</div>
						<p className="text-[#667085] pl-8 leading-7">
							Utilize the possibilities of our open insurance API by utilizing
							our white labeling services, which allow for faster insurance
							product customisation.
						</p>
					</div>
					<div>
						<div className="gap-x-2 flex items-center mb-2">
							<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
								<GiCheckMark className="text-[#5CC758] text-sm" />
							</div>
							<h4 className="font-semibold">Omni Channel Solution</h4>
						</div>
						<p className="text-[#667085] pl-8 leading-7">
							Distribute insurance products effectively through online or
							offline channels, with simple access to policy administration.
						</p>
					</div>
					<div>
						<div className="gap-x-2 flex items-center mb-2">
							<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
								<GiCheckMark className="text-[#5CC758] text-sm" />
							</div>
							<h4 className="font-semibold">Multiple Insurance Products</h4>
						</div>
						<p className="text-[#667085] pl-8 leading-7">
							Learn about a variety of insurance products that span several
							industries and have the possibility to jointly design your own
							unique products.
						</p>
					</div>
					<div>
						<div className="gap-x-2 flex items-center mb-2">
							<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
								<GiCheckMark className="text-[#5CC758] text-sm" />
							</div>
							<h4 className="font-semibold">Seamless Claim Management</h4>
						</div>
						<p className="text-[#667085] pl-8 leading-7">
							Through end-to-end claims API, your clients receive automated
							claim service, including alerts, loss assessments, and rapid
							reimbursements.
						</p>
					</div>
					<div>
						<div className="gap-x-2 flex items-center mb-2">
							<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
								<GiCheckMark className="text-[#5CC758] text-sm" />
							</div>
							<h4 className="font-semibold">End-to-End Support</h4>
						</div>
						<p className="text-[#667085] pl-8 leading-7">
							Take advantage of thorough support at every stage of the insurance
							procedure.
						</p>
					</div>
				</div>
				<div>
					<button
						type="button"
						className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-8 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
					>
						<span>Learn more</span> <BsArrowUpRight />
					</button>
				</div>
			</section>
			<section id="products" className="py-20 max-w-screen-xl mx-auto px-4">
				<div className="mb-8">
					<h3 className="text-xl font-medium text-[#0CD704] mb-4">PRODUCTS</h3>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
						Build for the future of
					</h2>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#667085] mb-6">
						digital Insurance
					</h2>
					<p className="text-[#667085] leading-7">
						Lörem ipsum dekande deren ovins ponat, båsulig prepreska. Katosamma
						otoktig <br className="hidden lg:block" />
						solig även om tinehet. Epikism teralåv, oaktat gärar. Mobil klubb
						vihosm <br className="hidden lg:block" />
						heterorade fast plattfilm eukössa.
					</p>
				</div>
				<div className="grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12">
					<div className="col-start-1 col-end-3 bg-[#FFF5E6] rounded-xl p-6">
						<img src={Ideas} alt="icons" className="mb-6" />
						<h4 className="mb-2 text-[#101323] text-xl font-semibold">
							Launch
						</h4>
						<p className="mb-10 text-[#667085] leading-7">
							Enables seamless integration of insurance offerings into{" "}
							<br className="hidden lg:block" />
							platforms for businesses in banking and fintech sectors,{" "}
							<br className="hidden lg:block" />
							facilitating the launch of new insurance products.
						</p>
						<button
							type="button"
							className="text-[#101323] bg-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span> <BsArrowRight />
						</button>
					</div>
					<div className="col-start-3 col-end-4 bg-[#E6FFF3B2] rounded-xl p-6">
						<img src={Education} alt="icons" className="mb-6" />
						<h4 className="mb-2 text-[#101323] text-xl font-semibold">
							Student Protection
						</h4>
						<p className="mb-10 text-[#667085] leading-7">
							Tailored insurance solutions for educational institutions and
							students, providing coverage for health emergencies, accidents,
							and unforeseen circumstances.
						</p>
						<button
							type="button"
							className="text-[#101323] bg-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span> <BsArrowRight />
						</button>
					</div>
					<div className="col-start-1 col-end-2 bg-[#E6F6FF] rounded-xl p-6">
						<img src={Health} alt="icons" className="mb-6" />
						<h4 className="mb-2 text-[#101323] text-xl font-semibold">
							Health
						</h4>
						<p className="mb-10 text-[#667085] leading-7">
							Comprehensive health insurance products for businesses, allowing
							easy integration into platforms for individuals and families
							seeking health coverage.
						</p>
						<button
							type="button"
							className="text-[#101323] bg-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span> <BsArrowRight />
						</button>
					</div>
					<div className="col-start-2 col-end-4 bg-[#FFF5E6] rounded-xl p-6">
						<img src={Motor} alt="icons" className="mb-6" />
						<h4 className="mb-2 text-[#101323] text-xl font-semibold">
							Motor Reg/Insurance
						</h4>
						<p className="mb-10 text-[#667085] leading-7">
							Streamlines motor vehicle registration and insurance services{" "}
							<br className="hidden lg:block" />
							for businesses, providing a convenient experience for{" "}
							<br className="hidden lg:block" />
							customers.
						</p>
						<button
							type="button"
							className="text-[#101323] bg-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span> <BsArrowRight />
						</button>
					</div>
					<div className="col-span-3 bg-[#E6FFF3B2] bg-opacity-70 rounded-xl p-6">
						<img src={Security} alt="icons" className="mb-6" />
						<h4 className="mb-2 text-[#101323] text-xl font-semibold">
							Device Protection
						</h4>
						<p className="mb-10 text-[#667085] leading-7">
							Insurance coverage for electronic devices, allowing{" "}
							<br className="hidden lg:block" />
							businesses to integrate device protection plans for added{" "}
							<br className="hidden lg:block" />
							security.
						</p>
						<button
							type="button"
							className="text-[#101323] bg-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span> <BsArrowRight />
						</button>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<button
						type="button"
						className="text-[#101323] bg-transparent border border-[#D0D5DD] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 flex items-center gap-x-2"
					>
						<span>View all products</span> <BsArrowUpRight />
					</button>
				</div>
			</section>
			<section className="py-10 max-w-screen-xl mx-auto px-4">
				<div className="text-center mb-6">
					<h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-[#101323] mb-2">
						The Infrastructure Powering Embedded
					</h2>
					<h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-[#667085] mb-3">
						Insurance Across Sectors in Africa
					</h2>
				</div>
				<div className="flex items-center justify-center rounded-2xl h-[28rem] bg-[#F2F4F7]">
					<p className="text-[#667085] opacity-60">
						Unyte serves as a middle man providing insurance products to a
						variety of <br />
						industries and sectors. An illustration that potrays this would be
						great here.
					</p>
				</div>
			</section>
			<section
				className="py-10 px-4 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${OmbreBG})` }}
			>
				<div className="max-w-screen-xl mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div>
							<h3 className="text-xl font-medium text-[#0CD704] mb-2">
								HOW IT WORKS
							</h3>
							<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
								Discover the simplicity of integrating
							</h2>
							<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#667085] mb-4">
								Unyte Africa&apos;s insurance solutions
							</h2>
							<p className="text-[#667085] leading-7">
								Our seamless integration process makes it easy for you to offer{" "}
								<br />
								comprehensive coverage to your customers. Here&apos;s how it
								works:
							</p>
						</div>
						<div className="block space-y-6 h-[33rem] overflow-y-auto pr-5">
							<div className="p-6 bg-white rounded-3xl lg:h-80">
								<img src={Dice} alt="dice" />
								<h4 className="mb-2 mt-16 text-[#033401] text-xl font-semibold">
									Choose Your Coverage
								</h4>
								<p className="text-[#667085] leading-7">
									Select the insurance coverage that suits your needs from our{" "}
									<br />
									range of comprehensive options.
								</p>
							</div>
							<div className="p-6 bg-white rounded-3xl lg:h-80">
								<img src={Dice} alt="dice" />
								<h4 className="mb-2 mt-16 text-[#033401] text-xl font-semibold">
									Choose Your Coverage
								</h4>
								<p className="text-[#667085] leading-7">
									Select the insurance coverage that suits your needs from our{" "}
									<br />
									range of comprehensive options.
								</p>
							</div>
							<div className="p-6 bg-white rounded-3xl lg:h-80">
								<img src={Dice} alt="dice" />
								<h4 className="mb-2 mt-16 text-[#033401] text-xl font-semibold">
									Choose Your Coverage
								</h4>
								<p className="text-[#667085] leading-7">
									Select the insurance coverage that suits your needs from our{" "}
									<br />
									range of comprehensive options.
								</p>
							</div>
							<div className="p-6 bg-white rounded-3xl lg:h-80">
								<img src={Dice} alt="dice" />
								<h4 className="mb-2 mt-16 text-[#033401] text-xl font-semibold">
									Choose Your Coverage
								</h4>
								<p className="text-[#667085] leading-7">
									Select the insurance coverage that suits your needs from our{" "}
									<br />
									range of comprehensive options.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 max-w-screen-xl mx-auto px-4" id="developers">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div id="developers-text">
						<h3 className="text-xl font-medium text-[#0CD704] mb-4 uppercase">
							made for developers by developers
						</h3>
						<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
							Made for builders, <br />
							founders, scholars, <br />
							dabblers, and dreamers
						</h2>
						<p className="text-[#667085] leading-7 mb-4">
							Implement any or all of Unyte’s products with just a few lines of
							code <br />
							in any language!
						</p>
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
						<div className="gap-x-2 flex items-center mb-6">
							<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
								<GiCheckMark className="text-[#5CC758] text-sm" />
							</div>
							<p className="text-base leading-7 text-[#667085]">
								Trusted Collaboration
							</p>
						</div>
						<div>
							<button
								type="button"
								className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-8 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
							>
								<span>Read our docs</span> <BsArrowUpRight />
							</button>
						</div>
					</div>
					<div id="code tab">
						<TabComponent />
					</div>
				</div>
			</section>
			<section className="py-10 max-w-screen-xl mx-auto px-4" id="developers">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div id="developers-text">
						<h3 className="text-xl font-medium text-[#0CD704] mb-4 uppercase">
							partnerships
						</h3>
						<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
							Learn how partnering with us
						</h2>
						<h2 className="text-[#667085] md:text-3xl text-2xl lg:text-4xl font-medium mb-4">
							enables you offer more value
						</h2>
						<p className="text-[#667085] leading-7 mb-4">
							Discover the benefits of partnering with Unyte. Together, we can
							create new <br />
							opportunities, drive innovation, and deliver exceptional value to
							our <br />
							customers.
						</p>
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
						<div className="gap-x-2 flex items-center mb-6">
							<div className="flex items-center justify-center bg-[#E6FFF3B2] bg-opacity-70 rounded-full p-1">
								<GiCheckMark className="text-[#5CC758] text-sm" />
							</div>
							<p className="text-base leading-7 text-[#667085]">
								Trusted Collaboration
							</p>
						</div>
						<div>
							<button
								type="button"
								className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-8 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
							>
								<span>Build with us</span> <BsArrowUpRight />
							</button>
						</div>
					</div>
					<div
						id="stacked-card"
						className="flex items-center justify-center w-1/2"
					>
						<div className="relative flex items-center justify-center">
							<div className="h-[16rem] w-[27rem] bg-[#F2F4F7] rounded-2xl z-10 -translate-y-24 absolute shadow"></div>
							<div className="h-[19rem] w-[30rem] bg-[#F2F4F7] rounded-2xl z-20 absolute -translate-y-14 shadow"></div>
							<div className="h-[24rem] w-[33rem] bg-[#E6FFF3B2] rounded-2xl z-30 absolute shadow p-10 pb-0">
								<img
									src={AxaMansardLogo}
									alt="axa mansard logo"
									className="h-6 mb-4"
								/>
								<div className="bg-white p-5 text-center rounded-t-3xl pb-[1.795rem]">
									<h4 className="text-xl font-semibold mb-6">
										Some fancy headline praising Unyte x <br />
										mansard’s partnership
									</h4>
									<p className="text-base mb-6 leading-7 text-[#667085]">
										Lörem ipsum kovylogi nätpoker i bloggosfär tissa, <br />
										kontragen jism. Kvaside din misat syn resan tesa. <br />
										Revusm prehåd i ränade som vaning. Kaning <br />
										aläning vasm.
									</p>
									<div className="flex items-center justify-center">
										<button
											type="button"
											className="text-[#101323] bg-transparent border border-[#D0D5DD] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 flex items-center gap-x-2"
										>
											<span>Learn more</span> <BsArrowUpRight />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 max-w-screen-xl mx-auto px-4" id="developers">
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
			<section className="py-10 max-w-screen-xl mx-auto px-4" id="faq">
				<div className="flex flex-col justify-center gap-y-16 items-center text-center">
					<div id="developers-text">
						<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
							Frequently Asked Questions.
						</h2>
						<p className="text-base mb-6 leading-7 text-[#667085]">
							We are answering your most frequent questions. No worries if you
							don’t <br />
							find the exact one. You can find out more by directly contacting
							our <br />
							support.
						</p>
					</div>
					<div id="accordion" className="w-[40rem]">
						<Accordion />
					</div>
				</div>
			</section>
			<section
				className="py-10 bg-cover bg-center bg-no-repeat px-4 h-screen my-10"
				id="cta"
				style={{ backgroundImage: `url(${CTA})` }}
			>
				<div className="max-w-screen-xl mx-auto"></div>
			</section>
		</>
	);
}

export default Home;
