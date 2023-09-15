import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function NavigationBanner({ bannerType, links }) {
	const firstPath = links[0].path;
	const location = useLocation();
	const [activePath, setActivePath] = useState(firstPath);
	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);
	return (
		<div className="bg-[#F9FAFB] fixed w-screen top-[5.5rem] z-40 h-14 flex items-center">
			<div className="max-w-screen-xl flex flex-nowrap items-center py-2.5 md:px-12 xl:px-5 mx-5 md:mx-12 overflow-x-auto">
				<p className="text-sm text-[#101323] font-semibold mr-[3.75rem] md:mr-[11.25rem] whitespace-nowrap">
					{bannerType}
				</p>
				<div id="nav-links" className="flex space-x-2 items-center">
					{links.map((link) => {
						return (
							<NavLink
								key={link.label}
								to={link.path}
								className={`text-[#667085] ${
									activePath === link.path ? "bg-[#5CC758] text-white" : ""
								} text-sm hover:bg-gray-400 rounded-[4px] p-2 hover:text-white whitespace-nowrap`}
							>
								{link.label}
							</NavLink>
						);
					})}
				</div>
			</div>
		</div>
	);
}

NavigationBanner.propTypes = {
	bannerType: PropTypes.string,
	links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavigationBanner;
