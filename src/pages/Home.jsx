import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

import UnyteHero from "../assets/images/UnyteHero.png";
import AxaMansardLogo from "../assets/icons/AxaMansardLogo.svg";
import PolarisLogo from "../assets/icons/PolarisLogo.svg";
import Sterling from "../assets/icons/Sterling.svg";
//import NPF from "../assets/icons/NPF.svg";
import NIC from "../assets/icons/NIC.svg";
import NIIC from "../assets/icons/NIIC.svg";
import UniversalInsurance from "../assets/icons/UniversalInsurance.svg";
import WemaLogo from "../assets/icons/WemaLogo.svg";
import MintynLogo from "../assets/icons/MintynLogo.svg";
//import InterswitchLogo from "../assets/icons/InterswitchLogo.svg";
import StacoLogo from "../assets/icons/StacoLogo.svg";
import LeadwayAssuranceLogo from "../assets/icons/LeadwayAssuranceLogo.svg";
import HeirsLifeLogo from "../assets/icons/HeirsLifeLogo.svg";
import LaunchNav from "../assets/icons/LaunchNav.svg";
import HealthNav from "../assets/icons/HealthNav.svg";
import EducationNav from "../assets/icons/EducationNav.svg";
import SecurityNav from "../assets/icons/SecurityNav.svg";
import MotorNav from "../assets/icons/MotorNav.svg";
import LaunchGrow from "../assets/icons/LaunchGrow.svg";
import CustomizeIcon from "../assets/icons/CustomizeIcon.svg";
import IntegrateIcon from "../assets/icons/IntegrateIcon.svg";
import UmbrellaIcon from "../assets/icons/UmbrellaIcon.svg";
import CodeSection from "../assets/images/CodeSection.png";
import OmbreBG from "../assets/images/OmbreBG.svg";
import DashboardIllustration from "../assets/images/DashboardIllustration.png";

import TestimonialCard from "../components/TestimonialCard";
import TestimonialSwiper from "../components/TestimonialSwiper";

function Home() {
	const testimonialContents = [
		{
			id: "1",
			text: "Unyte revolutionized our approach to insurance, enabling us to seamlessly offer a diverse range of coverage options. Our customer satisfaction and revenue have skyrocketed.",
			name: "Mike Kalu",
			position: "Head Insuretech Heirs",
		},
		{
			id: "2",
			text: "Unyte's solutions simplified complex insurance integration, enabling us to provide efficient and comprehensive coverage to our clients. A game-changer in the industry.",
			name: "CP Tunji Disu",
			position: "PSO NPF",
		},
		{
			id: "3",
			text: "Partnering with Unyte was a turning point for us. Their innovative technology empowered our insurance services, leading to a significant increase in customer trust and loyalty.",
			name: "Alfred Egbai",
			position: "Group Head Emerging Partnerships AXA",
		},
		{
			id: "4",
			text: "Unyte's collaboration empowered us to diversify our insurance offerings, enhancing our value proposition and attracting a wider audience. A true success story.",
			name: "Isaac Osuntade (ZICO)",
			position: "Director protocol and logistics Babcock University",
		},
	];
	const testimonials = testimonialContents.map((testimonial) => {
		return (
			<TestimonialCard
				key={testimonial.id}
				testimonialText={testimonial.text}
				testimonialName={testimonial.name}
				testimonialPosition={testimonial.position}
			/>
		);
	});
	const cardContents = [
		{
			imgSrc: AxaMansardLogo,
			headline:
				"Unyte Africa, AXA Mansard Partner to Expand Access to Innovative and Affordable Insurance Products Across Africa",
			description:
				"Unyte Africa, a leading InsurTech company in Africa, is pleased to announce its partnership with AXA Mansard, a member of the AXA Group, a global leader in insurance...",
			buttonText: "Learn more",
			link: "https://techcabal.com/2023/05/23/unyte-africa-axa-mansard-partner-to-expand-access-to-innovative-and-affordable-insurance-products-across-africa/",
		},
		{
			imgSrc: HeirsLifeLogo,
			headline:
				"Unyte Africa, Heirs Life in pact to incorporate insurance products into everyday businesses",
			description:
				"Unyte Africa, an innovative InsurTech company, has announced a partnership with Heirs Life Assurance, one of the insurance companies in Africa, in order to...",
			buttonText: "Learn more",
			link: "https://businessday.ng/news/article/unyte-africa-heirs-life-in-pact-to-incorporate-insurance-products-into-everyday-businesses/",
		},
		{
			imgSrc: LeadwayAssuranceLogo,
			headline: "Leadway, Unyte Africa heighten drive for digital insurance",
			description:
				"Aimed towards revolutionising the insurance industry in Africa through innovative digital solutions, Unyte Africa, an Insurtech company that connects millions of Africans with various sectors via APIs, and Leadway Assurance...",
			buttonText: "Learn more",
			link: "https://guardian.ng/news/leadway-unyte-africa-heighten-drive-for-digital-insurance/",
		},
	];

	const [currentLargestCardContent, setCurrentLargestCardContent] = useState(
		cardContents[2]
	);

	const scrollRef = useRef(null);
	useEffect(() => {
		const scrollContainer = scrollRef.current;

		if (!scrollContainer) return;

		let scrollAmount = 0;
		let rafId; // ID for the requestAnimationFrame

		function step() {
			scrollContainer.scrollLeft += 1; // Increased to a whole number for better precision
			scrollAmount += 1;

			if (scrollAmount >= scrollContainer.scrollWidth / 2) {
				scrollContainer.scrollLeft = 0;
				scrollAmount = 0;
			}
			rafId = requestAnimationFrame(step);
		}

		function handleMouseOver() {
			cancelAnimationFrame(rafId); // Pause the animation
		}

		function handleMouseOut() {
			rafId = requestAnimationFrame(step); // Resume the animation
		}

		rafId = requestAnimationFrame(step);
		scrollContainer.addEventListener("mouseover", handleMouseOver);
		scrollContainer.addEventListener("mouseout", handleMouseOut);

		return () => {
			cancelAnimationFrame(rafId); // Important: cancel the animation on unmount
			scrollContainer.removeEventListener("mouseover", handleMouseOver);
			scrollContainer.removeEventListener("mouseout", handleMouseOut);
		};
	}, [scrollRef.current]);

	const [cards, setCards] = useState([
		{
			id: 1,
			classes:
				"h-[24rem] md:h-[16rem] w-[15.55rem] md:w-[27rem] bg-[#F2F4F7] absolute rounded-2xl -top-16 md:-top-60 z-10 shadow",
			content: cardContents[0],
		},
		{
			id: 2,
			classes:
				"h-[26rem] md:h-[19rem] w-[18.15rem] md:w-[30rem] bg-[#F2F4F7] absolute rounded-2xl -top-12 md:-top-[13.5rem] z-20 shadow",
			content: cardContents[1],
		},
		{
			id: 3,
			classes:
				"h-[28rem] md:h-[24rem] w-[21.75rem] md:w-[33rem] bg-[#E6FFF3B2] absolute rounded-2xl z-30 shadow p-5 md:p-10 pb-0",
			content: cardContents[2],
		},
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCards((prevState) => {
				setCurrentLargestCardContent(prevState[1].content); // Update the content for the largest div
				return [
					{ ...prevState[2], classes: prevState[0].classes },
					{ ...prevState[0], classes: prevState[1].classes },
					{ ...prevState[1], classes: prevState[2].classes },
				];
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<section
				id="hero"
				className="flex flex-col md:space-y-24 space-y-20 mt-48 md:mt-40 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto"
			>
				<div id="hero-texts" className="text-center">
					<div className="gap-x-4 flex items-center justify-center mb-6">
						<span className="text-[#5CC758] text-[0.75rem] bg-[#B1FDAD] bg-opacity-30 border border-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-3 py-1.5 text-center mr-3 md:mr-0">
							What&apos;s new?
						</span>
						<a
							href="#"
							className="text-[#667085] text-[0.75rem] font-medium flex items-center gap-x-2 group"
						>
							<span>July release notes</span>
							<AiOutlineArrowRight className="transform transition-transform origin-bottom  group-hover:scale-x-125" />
						</a>
					</div>
					<h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-[#101323] mb-4">
						Reliable Insurance Infrastructure
					</h2>
					<h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-[#667085] mb-4">
						For Businesses in Africa
					</h2>
					<p className="text-[#667085] text-base leading-7">
						Unyte enables businesses to seamlessly integrate insurance offerings
						into their
						<br className="hidden md:block" /> platforms enabling them to
						acquire new users, drive sales, and enhance
						<br className="hidden md:block" /> revenue.
					</p>
					<div className="flex items-center justify-center mt-6">
						<button
							type="button"
							className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-6 py-3 text-center mr-3 md:mr-0"
						>
							Get started
						</button>
					</div>
				</div>
				<div className="" id="unyte-hero">
					<img src={UnyteHero} alt="hero " />
				</div>
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
					<div className="mb-6 h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={Sterling} alt="company logo" />
					</div>
					<div className="mb-6 h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={PolarisLogo} alt="company logo" />
					</div>
					<div className="mb-6 h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={WemaLogo} alt="company logo" />
					</div>
					{/*<div className="mb-6 h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={NPF} alt="company logo" />
	</div>*/}
					<div className="h-[10.625rem] rounded-lg flex items-center justify-center">
						<img src={MintynLogo} alt="company logo" />
					</div>
				</div>
			</section>
			<section
				id="unlocking possibilities"
				className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5"
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
						className="text-white group bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-6 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
					>
						<span>Learn more</span>{" "}
						<BsArrowUpRight className="transform transition-transform origin-bottom  group-hover:scale-125" />
					</button>
				</div>
			</section>
			<section
				id="products"
				className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5"
			>
				<div className="mb-8">
					<h3 className="text-xl font-medium text-[#0CD704] mb-4">PRODUCTS</h3>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
						Build for the future of
					</h2>
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#667085] mb-6">
						digital Insurance
					</h2>
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6 lg:gap-8 mb-12">
					<div className="md:col-start-1 md:col-end-3 bg-[#FFF5E6] rounded-xl p-6">
						<img src={LaunchNav} alt="icons" className="mb-6" />
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
							className="text-[#101323] bg-white group focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span>{" "}
							<BsArrowRight className="transform transition-transform origin-bottom group-hover:scale-x-125" />
						</button>
					</div>
					<div className="md:col-start-3 md:col-end-4 bg-[#E6FFF3B2] rounded-xl p-6">
						<img src={EducationNav} alt="icons" className="mb-6" />
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
							className="text-[#101323] group bg-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span>{" "}
							<BsArrowRight className="transform transition-transform origin-bottom group-hover:scale-x-125" />
						</button>
					</div>
					<div className="md:col-start-1 md:col-end-2 bg-[#E6F6FF] rounded-xl p-6">
						<img src={HealthNav} alt="icons" className="mb-6" />
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
							className="text-[#101323] group bg-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span>{" "}
							<BsArrowRight className="transform transition-transform origin-bottom group-hover:scale-x-125" />
						</button>
					</div>
					<div className="md:col-start-2 md:col-end-4 bg-[#FFF5E6] rounded-xl p-6">
						<img src={MotorNav} alt="icons" className="mb-6" />
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
							className="text-[#101323] group bg-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span>{" "}
							<BsArrowRight className="transform transition-transform origin-bottom group-hover:scale-x-125" />
						</button>
					</div>
					<div className="md:col-span-3 bg-[#E6FFF3B2] bg-opacity-70 rounded-xl p-6">
						<img src={SecurityNav} alt="icons" className="mb-6" />
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
							className="text-[#101323] bg-white group focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
						>
							<span>Learn more</span>{" "}
							<BsArrowRight className="transform transition-transform origin-bottom group-hover:scale-x-125" />
						</button>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<Link
						to="products/launch"
						className="text-[#101323] border bg-white group focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex items-center gap-x-2"
					>
						<span>View all products</span>{" "}
						<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-x-125" />
					</Link>
				</div>
			</section>
			<section className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5">
				<div className="text-center mb-6 md:mb-16">
					<h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-[#101323] mb-2">
						The Infrastructure Powering Embedded
					</h2>
					<h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-[#667085] mb-3">
						Insurance Across Sectors in Africa
					</h2>
				</div>
				<div className="md:flex items-center justify-center hidden">
					<img src={DashboardIllustration} alt="dashboard" />
				</div>
				<div className="flex md:hidden items-center justify-center rounded-2xl h-[36.1875rem] md:h-[28rem] bg-[#F2F4F7]">
					<p className="text-[#667085] opacity-60 px-5 md:px-0 text-center">
						Unyte serves as a middle man providing insurance products to a
						variety of <br className="hidden md:block" />
						industries and sectors. An illustration that potrays this would be
						great here.
					</p>
				</div>
			</section>
			<section
				className="py-20 md:px-12 xl:px-5 px-5 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${OmbreBG})` }}
			>
				<div className="max-w-screen-xl mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
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
							<p className="text-[#667085] leading-7 mb-[5.375rem]">
								Our seamless integration process makes it easy for you to offer{" "}
								<br className="hidden md:block" />
								comprehensive coverage to your customers. Here&apos;s how it
								works:
							</p>
							<div className="md:flex items-center gap-x-2.5 hidden">
								<button
									type="button"
									className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl px-4 py-2 text-center mr-3 md:mr-0"
								>
									Get started
								</button>
								<a
									href="#"
									className="text-[#101323] font-medium flex items-center gap-x-2 px-4 py-2 group"
								>
									<span>Contact sales</span>
									<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
								</a>
							</div>
						</div>
						<div className="block space-y-6 md:h-[33rem] overflow-y-auto md:pr-5 py-8">
							<div className="p-6 bg-white rounded-3xl shadow-lg">
								<img src={UmbrellaIcon} alt="dice" />
								<h4 className="mb-2 mt-16 text-[#033401] text-xl font-semibold">
									Choose Your Coverage
								</h4>
								<p className="text-[#667085] leading-7">
									Start your Unyte journey with an initial demo. We tailor{" "}
									<br className="hidden md:block" />
									insurance solutions to your unique needs, ensuring they align{" "}
									<br className="hidden md:block" />
									seamlessly with your business objectives.
								</p>
							</div>
							<div className="p-6 bg-white rounded-3xl shadow-lg">
								<img src={CustomizeIcon} alt="dice" />
								<h4 className="mb-2 mt-16 text-[#033401] text-xl font-semibold">
									Customize Your Offerings
								</h4>
								<p className="text-[#667085] leading-7">
									Unyte provides extensive customization options. Choose{" "}
									<br className="hidden md:block" /> from diverse insurance
									divisions like health, student{" "}
									<br className="hidden md:block" /> protection, motor
									insurance, Unyte Launch, ensuring a{" "}
									<br className="hidden md:block" /> perfect fit.
								</p>
							</div>
							<div className="p-6 bg-white rounded-3xl shadow-lg">
								<img src={IntegrateIcon} alt="dice" />
								<h4 className="mb-2 mt-16 text-[#033401] text-xl font-semibold">
									Support & Integration
								</h4>
								<p className="text-[#667085] leading-7">
									Expert team offers comprehensive, real-time support for{" "}
									<br className="hidden md:block" />
									seamless API integration. Tailored to your needs, we
									prioritize <br className="hidden md:block" />
									responsiveness and simplicity for efficiency.
								</p>
							</div>
							<div className="p-6 bg-white rounded-3xl shadow-lg">
								<img src={LaunchGrow} alt="dice" />
								<h4 className="mb-2 mt-16 text-[#033401] text-xl font-semibold">
									Launch & Grow
								</h4>
								<p className="text-[#667085] leading-7">
									Post-integration, embark on a journey of growth. Expand{" "}
									<br className="hidden md:block" />
									services, customize offerings, and receive ongoing support{" "}
									<br className="hidden md:block" />
									for thriving insurance solutions.
								</p>
							</div>
						</div>
						<div className="space-y-2.5 md:hidden w-full">
							<button
								type="button"
								className="text-white w-full bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl px-6 py-3 text-center mr-3 md:mr-0"
							>
								Get started
							</button>
							<div className="text-center">
								<a
									href="#"
									className="text-[#101323] group font-medium flex items-center justify-center gap-x-2 px-6 py-3 w-full"
								>
									<span>Contact sales</span>
									<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className="py-20 md:pb-0  bg-[#101323] md:px-12 xl:px-5 px-5"
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
			<section
				className="pt-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5 hidden sm:block overflow-hidden"
				id="companies"
			>
				<div
					ref={scrollRef}
					className="flex items-center justify-between space-x-12 overflow-x-auto auto-scroll no-scrollbar"
				>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={AxaMansardLogo}
						alt="axa mansard logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={HeirsLifeLogo}
						alt="heirslife logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={LeadwayAssuranceLogo}
						alt="leadway assurance logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={StacoLogo}
						alt="staco logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={UniversalInsurance}
						alt="heirslife logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={NIC}
						alt="leadway assurance logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={NIIC}
						alt="staco logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={AxaMansardLogo}
						alt="axa mansard logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={HeirsLifeLogo}
						alt="heirslife logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={LeadwayAssuranceLogo}
						alt="leadway assurance logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={StacoLogo}
						alt="staco logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={UniversalInsurance}
						alt="heirslife logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={NIC}
						alt="leadway assurance logo"
					/>
					<img
						className="filter grayscale hover:grayscale-0 transition-all duration-300"
						src={NIIC}
						alt="staco logo"
					/>
				</div>
			</section>

			<section
				className="py-20 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5"
				id="partnerships"
			>
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div id="partnerships-text" className="mb-24">
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
							create new <br className="hidden md:block" />
							opportunities, drive innovation, and deliver exceptional value to
							our <br className="hidden md:block" />
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
								className="text-white bg-[#5CC758] focus:ring-4 group focus:outline-none font-medium rounded-3xl text-sm px-8 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
							>
								<span>Build with us</span>{" "}
								<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
							</button>
						</div>
					</div>
					<div
						id="stacked-card"
						className="flex items-center justify-center md:w-1/2 w-auto md:mt-0"
					>
						<div className="relative flex items-center justify-center flex-col">
							{cards.map((card) => (
								<div
									key={card.id}
									className={`${card.classes} transition-all duration-500`}
								>
									<div
										className={
											card.classes ===
											"h-[28rem] md:h-[24rem] w-[21.75rem] md:w-[33rem] bg-[#E6FFF3B2] absolute rounded-2xl z-30 shadow p-5 md:p-10 pb-0"
												? "opacity-100 transition-opacity duration-500 delay-150"
												: "opacity-0 transition-opacity duration-500 delay-150"
										}
									>
										<img
											src={currentLargestCardContent.imgSrc}
											alt="Logo"
											className="h-6 mb-4"
										/>
										<div className="bg-white p-5 text-center rounded-t-3xl border pb-0 h-[24.3rem] md:h-[19rem]">
											<h4 className="text-xl font-semibold mb-6">
												{currentLargestCardContent.headline}
											</h4>
											<p className="text-base mb-4 md:leading-7 text-[#667085]">
												{currentLargestCardContent.description}
											</p>
											<div className="flex items-center justify-center pb-3">
												<a
													href={currentLargestCardContent.link}
													target="blank"
													className="text-[#101323] group bg-transparent border border-[#D0D5DD] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-6 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
												>
													<span>{currentLargestCardContent.buttonText}</span>{" "}
													<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
							<div className="h-[24rem] md:h-0"></div>
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

export default Home;
