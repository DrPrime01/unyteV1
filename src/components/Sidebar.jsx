import { useState, useEffect, useRef } from "react";
//import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { RxDotFilled } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Sidebar() {
	const [dropdown1, setDropdown1] = useState(false);
	const [dropdown2, setDropdown2] = useState(false);
	const [dropdown3, setDropdown3] = useState(false);
	//const [mobileDropdown, setMobileDropdown] = useState(false);

	//const location = useLocation();

	const handleDropdown1 = () => {
		// setDropdown2(false);
		// setDropdown3(false);
		setDropdown1(!dropdown1);
	};
	const handleDropdown2 = () => {
		// setDropdown1(false);
		// setDropdown3(false);
		setDropdown2(!dropdown2);
	};
	const handleDropdown3 = () => {
		// setDropdown1(false);
		// setDropdown2(false);
		setDropdown3(!dropdown3);
	};

	// useEffect(() => {
	// 	setDropdown1(false);
	// 	setDropdown2(false);
	// 	setDropdown3(false);
	// 	setDropdown4(false);
	// 	setMobileDropdown(false);
	// }, [location]);

	const sidebarRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
				setDropdown1(false);
				setDropdown2(false);
				setDropdown3(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div className="relative">
			<button
				data-drawer-target="sidebar-multi-level-sidebar"
				data-drawer-toggle="sidebar-multi-level-sidebar"
				aria-controls="sidebar-multi-level-sidebar"
				type="button"
				className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			>
				<span className="sr-only">Open sidebar</span>
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						fillRule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					></path>
				</svg>
			</button>

			<aside
				id="sidebar-multi-level-sidebar"
				className={`z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`}
				aria-label="Sidebar"
				ref={sidebarRef}
			>
				<div className="h-full px-3 py-4 overflow-y-auto">
					<ul className="space-y-2 font-medium">
						<li>
							<button
								type="button"
								className="flex items-center w-full p-2 text-base justify-between transition duration-75 rounded-lg group hover:bg-gray-100  "
								aria-controls="dropdown-example"
								data-collapse-toggle="dropdown-example"
								onClick={handleDropdown1}
							>
								<span className="flex-1 text-sm text-[#667085] ml-3 text-left whitespace-nowrap">
									Introduction
								</span>
								{dropdown1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
							</button>
							<ul
								id="dropdown-example"
								className={`${dropdown1 ? "" : "hidden"} py-2 space-y-2`}
							>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">Overview</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">What is Unyte Africa?</span>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<button
								type="button"
								className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group hover:bg-gray-100  "
								aria-controls="dropdown-example"
								data-collapse-toggle="dropdown-example"
								onClick={handleDropdown2}
							>
								<span className="flex-1 ml-3 text-left whitespace-nowrap">
									Get started
								</span>{" "}
								{dropdown2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
							</button>
							<ul
								id="dropdown-example"
								className={`${dropdown2 ? "" : "hidden"} py-2 space-y-2`}
							>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">Quickstart</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">Sandbox</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">Integration checklist</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">Coverage</span>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<button
								type="button"
								className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group hover:bg-gray-100  "
								aria-controls="dropdown-example"
								data-collapse-toggle="dropdown-example"
								onClick={handleDropdown3}
							>
								<span className="flex-1 text-sm text-[#667085] ml-3 text-left whitespace-nowrap">
									Products
								</span>
								{dropdown3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
							</button>
							<ul
								id="dropdown-example"
								className={`${dropdown3 ? "" : "hidden"} py-2 space-y-2`}
							>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">Unyte Student Protection</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">Unyte Launch</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex text-sm text-[#667085] items-center w-full p-2  transition duration-75 rounded-lg pl-6 group hover:bg-gray-100  "
									>
										<RxDotFilled className="text-[#5CC758] h-5 w-5" />{" "}
										<span className="ml-1.5">Unyte Health</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
}

Sidebar.propTypes = {
	position: PropTypes.string,
};

export default Sidebar;
