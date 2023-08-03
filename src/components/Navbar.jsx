import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import UnyteLogo from "../assets/icons/UnyteLogo.svg";

function Navbar() {
	const [dropdown1, setDropdown1] = useState(false);
	const [dropdown2, setDropdown2] = useState(false);
	const [mobileDropdown, setMobileDropdown] = useState(false);

	const handleDropdown1 = () => {
		setDropdown2(false);
		setDropdown1(!dropdown1);
	};
	const handleDropdown2 = () => {
		setDropdown1(false);
		setDropdown2(!dropdown2);
	};
	return (
		<>
			<nav className="bg-white border-gray-200">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 md:px-12 xl:px-5 px-5">
					<NavLink to="/" className="flex items-center">
						<img src={UnyteLogo} className="h-8 mr-3" alt="Unyte Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap text-[#033401]">
							unyte
						</span>
					</NavLink>
					<div className="flex md:order-2">
						<div className="flex gap-x-4 items-center justify-between">
							<button
								type="button"
								className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
							>
								Get started
							</button>
							<a
								href="#"
								className="text-[#101323] font-medium flex items-center gap-x-2"
							>
								<span>Login</span>
								<AiOutlineArrowRight />
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
						} w-full md:flex md:w-auto md:order-1`}
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-[#101323]">
							<li className="md:relative">
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									onClick={handleDropdown1}
									className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
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
									id="dropdownNavbar"
									className={`z-10 ${
										dropdown1 ? "block" : "hidden"
									} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:absolute md:top-8 md:-left-10`}
								>
									<ul
										className="py-2 text-sm text-gray-700"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Developers
											</a>
										</li>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Settings
											</a>
										</li>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Earnings
											</a>
										</li>
									</ul>
									<div className="py-1">
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											Sign out
										</a>
									</div>
								</div>
							</li>
							<li className="md:relative">
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									onClick={handleDropdown2}
									className="flex items-center justify-between w-full py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
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

								<div
									id="dropdownNavbar"
									className={`z-10 ${
										dropdown2 ? "block" : "hidden"
									} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:absolute md:top-8 md:-left-8`}
								>
									<ul
										className="py-2 text-sm text-gray-700"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Dashboard
											</a>
										</li>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Settings
											</a>
										</li>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Earnings
											</a>
										</li>
									</ul>
									<div className="py-1">
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											Sign out
										</a>
									</div>
								</div>
							</li>
							<li>
								<NavLink
									to="about"
									className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
								>
									Why Unyte?
								</NavLink>
							</li>
							<li>
								<NavLink
									to="contact"
									className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
