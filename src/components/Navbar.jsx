import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

import UnyteLogo from "../assets/icons/UnyteLogo.svg";
import LaunchNav from "../assets/icons/LaunchNav.svg";
import HealthNav from "../assets/icons/HealthNav.svg";
import EducationNav from "../assets/icons/EducationNav.svg";
import SecurityNav from "../assets/icons/SecurityNav.svg";
import MotorNav from "../assets/icons/MotorNav.svg";
import Credit from "../assets/icons/Credit.svg";
import Travel from "../assets/icons/Travel.svg";
import BanksIcon from "../assets/icons/BanksIcon.svg";
import ContactUsIcon from "../assets/icons/ContactUsIcon.svg";
import EcommerceIcon from "../assets/icons/EcommerceIcon.svg";
import EducationIcon from "../assets/icons/EducationIcon.svg";
import FintechIcon from "../assets/icons/FintechIcon.svg";
import WhyUnyteIcon from "../assets/icons/WhyUnyteIcon.svg";
import LogisticsIcon from "../assets/icons/LogisticsIcon.svg";

function Navbar() {
	const [dropdown1, setDropdown1] = useState(false);
	const [dropdown2, setDropdown2] = useState(false);
	const [dropdown3, setDropdown3] = useState(false);
	const [dropdown4, setDropdown4] = useState(false);
	const [mobileDropdown, setMobileDropdown] = useState(false);

	const location = useLocation();

	const handleDropdown1 = () => {
		setDropdown2(false);
		setDropdown3(false);
		setDropdown4(false);
		setDropdown1(!dropdown1);
	};
	const handleDropdown2 = () => {
		setDropdown1(false);
		setDropdown3(false);
		setDropdown4(false);
		setDropdown2(!dropdown2);
	};
	const handleDropdown3 = () => {
		setDropdown1(false);
		setDropdown2(false);
		setDropdown4(false);
		setDropdown3(!dropdown3);
	};
	const handleDropdown4 = () => {
		setDropdown1(false);
		setDropdown2(false);
		setDropdown3(false);
		setDropdown4(!dropdown4);
	};

	useEffect(() => {
		setDropdown1(false);
		setDropdown2(false);
		setDropdown3(false);
		setDropdown4(false);
		setMobileDropdown(false);
	}, [location]);

	const navbarRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (navbarRef.current && !navbarRef.current.contains(e.target)) {
				setDropdown1(false);
				setDropdown2(false);
				setDropdown3(false);
				setDropdown4(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<nav
				className="bg-white fixed w-screen top-0 z-50 shadow-md md:shadow-none"
				ref={navbarRef}
			>
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 md:px-12 xl:px-5 px-5">
					<NavLink to="/" className="flex items-center">
						<img src={UnyteLogo} className="h-8 mr-3" alt="Unyte Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap text-[#033401]">
							unyte
						</span>
					</NavLink>
					<div className="flex md:order-2">
						<div className="md:flex gap-x-4 items-center justify-between hidden">
							<button
								type="button"
								className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
							>
								Get started
							</button>
							<a
								to="#"
								className="text-[#101323] font-medium flex items-center group gap-x-2"
							>
								<span>Login</span>
								<AiOutlineArrowRight className="transform transition-transform origin-bottom group-hover:scale-x-150" />
							</a>
						</div>
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							onClick={() => setMobileDropdown(!mobileDropdown)}
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
							aria-controls="navbar-sticky"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<div
						className={`items-center justify-between ${
							mobileDropdown ? "block" : "hidden"
						} w-full md:flex md:w-auto md:order-1 min-h-screen md:min-h-0 md:h-auto`}
						id="navbar-sticky"
					>
						<ul className="flex flex-col py-4 md:p-0 mt-4 font-medium bg-[#F9FAFB] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-[#101323]">
							<li className="md:relative">
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									onClick={handleDropdown1}
									className="flex items-center justify-between w-full py-4 md:py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
								>
									Products
									<svg
										className="w-2.5 h-2.5 ml-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								<div
									id="dropdownNavbarMobile"
									className={`z-10 ${
										dropdown1 ? "block md:hidden" : "hidden"
									} font-normal bg-white w-full`}
								>
									<ul
										className="py-2 text-sm text-[#667085] ml-2"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavLink to="products/launch" className="block px-4 py-3">
												Launch
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/creditLife"
												className="block px-4 py-3"
											>
												Credit Life
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/deviceProtection"
												className="block px-4 py-3"
											>
												Device Protection
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/travelCover"
												className="block px-4 py-3"
											>
												Travel Cover
											</NavLink>
										</li>
										<li>
											<NavLink to="products/health" className="block px-4 py-3">
												Health
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/motorRegInsurance"
												className="block px-4 py-3"
											>
												Motor Registration / Insurance
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/studentProtection"
												className="block px-4 py-2 hover:bg-gray-100"
											>
												Student Protection
											</NavLink>
										</li>
									</ul>
								</div>
								<div
									id="dropdownNavbar"
									className={`z-10 ${
										dropdown1 ? "md:block hidden" : "hidden"
									} font-normal bg-white divide-y divide-gray-100 shadow-lg w-screen inset-x-0 md:fixed md:top-16 md:px-[6.25rem] md:py-10`}
								>
									<div className="mb-4">Products</div>
									<ul
										className="pt-8 text-sm text-gray-700 grid grid-cols-1 md:grid-cols-4 gap-5"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavLink
												to="products/launch"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={LaunchNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Launch
													</p>
													<p className="text-sm text-[#667085]">
														Integrate insurance seamlessly and unlock new
														revenue streams.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/health"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={HealthNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Health
													</p>
													<p className="text-sm text-[#667085]">
														Embrace comprehensive health coverage for
														individuals and families.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/deviceProtection"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={SecurityNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Device Protection
													</p>
													<p className="text-sm text-[#667085]">
														Shield your electronic devices from unexpected
														mishaps.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/creditLife"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={Credit} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Credit Life
													</p>
													<p className="text-sm text-[#667085]">
														Safeguard financial commitments with credit life
														insurance.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/studentProtection"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={EducationNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Student Protection
													</p>
													<p className="text-sm text-[#667085]">
														Prioritize the safety and well-being of educational
														institutions and students.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/motorRegInsurance"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={MotorNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Motor Reg/Insurance
													</p>
													<p className="text-sm text-[#667085]">
														Simplify vehicle registration and secure the right
														insurance.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="products/travelCover"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={Travel} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Travel Cover
													</p>
													<p className="text-sm text-[#667085]">
														Ensure worry-free travels with our comprehensive
														insurance plans.
													</p>
												</div>
											</NavLink>
										</li>
									</ul>
								</div>
							</li>
							<li className="md:relative">
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									onClick={handleDropdown2}
									className="flex items-center justify-between w-full py-4 md:py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
								>
									Developers
									<svg
										className="w-2.5 h-2.5 ml-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								{/* Dropdown Nav for mobile */}
								<div
									id="dropdownNavbarMobile"
									className={`z-10 ${
										dropdown2 ? "block md:hidden" : "hidden"
									} font-normal bg-white w-full`}
								>
									<ul
										className="py-2 text-sm text-[#667085] ml-2"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavLink
												to="#"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Get Started
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												API Reference
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												API Status
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Libraries
											</NavLink>
										</li>
										<li>
											<NavLink
												to="developers/documentation"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Developer Docs
											</NavLink>
										</li>
									</ul>
								</div>
								{/* Dropdown Nav for tablet and desktops */}
								<div
									id="dropdownNavbar"
									className={`z-10 ${
										dropdown2 ? "hidden md:block" : "hidden"
									} font-normal bg-white divide-y divide-gray-100 shadow-lg w-screen inset-x-0 md:fixed md:top-16 md:px-[6.25rem] md:py-10`}
								>
									<div className="mb-4">Developers</div>
									<ul
										className="pt-8 text-sm text-gray-700 grid grid-cols-1 md:grid-cols-4 gap-5"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavLink
												to="#"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={LaunchNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Get Started
													</p>
													<p className="text-sm text-[#667085]">
														Integrate insurance seamlessly and unlock new
														revenue streams.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={HealthNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														API Reference
													</p>
													<p className="text-sm text-[#667085]">
														Embrace comprehensive health coverage for
														individuals and families.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={SecurityNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														API Status
													</p>
													<p className="text-sm text-[#667085]">
														Shield your electronic devices from unexpected
														mishaps.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={Credit} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Libraries
													</p>
													<p className="text-sm text-[#667085]">
														Safeguard financial commitments with credit life
														insurance.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="developers/documentation"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={EducationNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Developer Docs
													</p>
													<p className="text-sm text-[#667085]">
														Prioritize the safety and well-being of educational
														institutions and students.
													</p>
												</div>
											</NavLink>
										</li>
									</ul>
								</div>
							</li>
							<li className="md:relative">
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									onClick={handleDropdown3}
									className="flex items-center justify-between w-full py-4 md:py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
								>
									Industries
									<svg
										className="w-2.5 h-2.5 ml-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								<div
									id="dropdownNavbarMobile"
									className={`z-10 ${
										dropdown3 ? "block md:hidden" : "hidden"
									} font-normal bg-white w-full`}
								>
									<ul
										className="py-2 text-sm text-[#667085] ml-2"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavLink
												to="industries/fintech"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Fintech
											</NavLink>
										</li>
										<li>
											<NavLink
												to="industries/banks"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Banks
											</NavLink>
										</li>
										<li>
											<NavLink
												to="industries/logistics"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Logistic Companies
											</NavLink>
										</li>
										<li>
											<NavLink
												to="industries/ecommerce"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Ecommerce
											</NavLink>
										</li>
										<li>
											<NavLink
												to="industries/education"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Education
											</NavLink>
										</li>
									</ul>
								</div>
								<div
									id="dropdownNavbar"
									className={`z-10 ${
										dropdown3 ? "hidden md:block" : "hidden"
									} font-normal bg-white divide-y divide-gray-100 shadow-lg w-screen inset-x-0 md:fixed md:top-16 md:px-[6.25rem] md:py-10`}
								>
									<div className="mb-4">Industries</div>
									<ul
										className="pt-8 text-sm text-gray-700 grid grid-cols-1 md:grid-cols-4 gap-5"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavLink
												to="industries/fintech"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={FintechIcon} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Fintech
													</p>
													<p className="text-sm text-[#667085]">
														Integrate insurance seamlessly and unlock new
														revenue streams.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="industries/banks"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={BanksIcon} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Banks
													</p>
													<p className="text-sm text-[#667085]">
														Embrace comprehensive health coverage for
														individuals and families.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img
														src={LogisticsIcon}
														alt="icon"
														className="mb-4"
													/>
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Logistic Companies
													</p>
													<p className="text-sm text-[#667085]">
														Shield your electronic devices from unexpected
														mishaps.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img
														src={EcommerceIcon}
														alt="icon"
														className="mb-4"
													/>
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Ecommerce
													</p>
													<p className="text-sm text-[#667085]">
														Safeguard financial commitments with credit life
														insurance.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="#"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img
														src={EducationIcon}
														alt="icon"
														className="mb-4"
													/>
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Education
													</p>
													<p className="text-sm text-[#667085]">
														Prioritize the safety and well-being of educational
														institutions and students.
													</p>
												</div>
											</NavLink>
										</li>
									</ul>
								</div>
							</li>
							<li className="md:relative">
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									onClick={handleDropdown4}
									className="flex items-center justify-between w-full py-4 md:py-2  pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
								>
									Company
									<svg
										className="w-2.5 h-2.5 ml-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								<div
									id="dropdownNavbarMobile"
									className={`z-10 ${
										dropdown4 ? "block md:hidden" : "hidden"
									} font-normal bg-white w-full`}
								>
									<ul
										className="py-2 text-sm text-[#667085] ml-2"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavLink
												to="company/about"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												About Unyte
											</NavLink>
										</li>
										<li>
											<NavLink
												to="company/contact"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Contact Us
											</NavLink>
										</li>
										<li>
											<NavLink
												to="company/learn"
												className="block px-4 py-3 hover:bg-gray-100"
											>
												Learn
											</NavLink>
										</li>
									</ul>
								</div>
								<div
									id="dropdownNavbar"
									className={`z-10 ${
										dropdown4 ? "hidden md:block" : "hidden"
									} font-normal bg-white divide-y divide-gray-100 shadow-lg w-screen inset-x-0 md:fixed md:top-16 md:px-[6.25rem] md:py-10`}
								>
									<div className="mb-4">Company</div>
									<ul
										className="pt-8 text-sm text-gray-700 grid grid-cols-1 md:grid-cols-4 gap-5"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavLink
												to="company/about"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={WhyUnyteIcon} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														About Unyte
													</p>
													<p className="text-sm text-[#667085]">
														Integrate insurance seamlessly and unlock new
														revenue streams.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="company/contact"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img
														src={ContactUsIcon}
														alt="icon"
														className="mb-4"
													/>
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Contact Us
													</p>
													<p className="text-sm text-[#667085]">
														Embrace comprehensive health coverage for
														individuals and families.
													</p>
												</div>
											</NavLink>
										</li>
										<li>
											<NavLink
												to="company/learn"
												className="block p-4 hover:bg-[#E6FFF3B2] rounded-2xl"
											>
												<div className="">
													<img src={SecurityNav} alt="icon" className="mb-4" />
													<p className="mb-2 text-sm text-[#101323] font-semibold">
														Learn
													</p>
													<p className="text-sm text-[#667085]">
														Shield your electronic devices from unexpected
														mishaps.
													</p>
												</div>
											</NavLink>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
