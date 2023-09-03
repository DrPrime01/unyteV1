import { NavLink } from "react-router-dom";

function NavigationBanner() {
	return (
		<div className="bg-[#F9FAFB] fixed w-screen top-20 z-50">
			<div className="max-w-screen-xl flex flex-nowrap items-center py-3 md:px-12 xl:px-5 mx-5 md:mx-12 overflow-x-auto">
				<p className="text-sm text-[#101323] font-semibold mr-[3.75rem] md:mr-[11.25rem] whitespace-nowrap">
					All Products
				</p>
				<div id="nav-links" className="flex space-x-3 items-center">
					<NavLink
						to="/products/launch"
						className="text-[#667085] text-sm hover:bg-[#5CC758] rounded-[4px] p-2 hover:text-white whitespace-nowrap"
					>
						Launch
					</NavLink>
					<NavLink
						to="/products/health"
						className="text-[#667085] text-sm hover:bg-[#5CC758] rounded-[4px] p-2 hover:text-white whitespace-nowrap"
					>
						Health
					</NavLink>
					<NavLink
						to="/products/student-protection"
						className="text-[#667085] text-sm hover:bg-[#5CC758] rounded-[4px] p-2 hover:text-white whitespace-nowrap"
					>
						Student Protection
					</NavLink>
					<NavLink
						to="/products/logistics-git"
						className="text-[#667085] text-sm hover:bg-[#5CC758] rounded-[4px] p-2 hover:text-white whitespace-nowrap"
					>
						Logistics/GIT
					</NavLink>
					<NavLink
						to="/products/credit-life"
						className="text-[#667085] text-sm hover:bg-[#5CC758] rounded-[4px] p-2 hover:text-white whitespace-nowrap"
					>
						Credit Life
					</NavLink>
					<NavLink
						to="/products/motor-reg-insurance"
						className="text-[#667085] text-sm hover:bg-[#5CC758] rounded-[4px] p-2 hover:text-white whitespace-nowrap"
					>
						Motor Reg/Insurance
					</NavLink>
					<NavLink
						to="/products/device-protection"
						className="text-[#667085] text-sm hover:bg-[#5CC758] rounded-[4px] p-2 hover:text-white whitespace-nowrap"
					>
						Device Protection
					</NavLink>
					<NavLink
						to="/products/travel-cover"
						className="text-[#667085] text-sm hover:bg-[#5CC758] rounded-[4px] p-2 hover:text-white whitespace-nowrap"
					>
						Travel Cover
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default NavigationBanner;
