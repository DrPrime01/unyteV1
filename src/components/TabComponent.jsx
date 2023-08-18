import { useState } from "react";
import PropTypes from "prop-types";

function TabComponent() {
	const [isJsActive, setIsJsActive] = useState(true);
	const [isTerraActive, setIsTerraActive] = useState(false);
	const [isReactActive, setIsReactActive] = useState(false);
	const [isVueActive, setIsVueActive] = useState(false);
	const [isAndroidActive, setIsAndroidActive] = useState(false);
	const [isIosActive, setIsIosActive] = useState(false);

	const handleJsClick = () => {
		setIsJsActive(true);
		setIsTerraActive(false);
		setIsReactActive(false);
		setIsVueActive(false);
		setIsAndroidActive(false);
		setIsIosActive(false);
	};
	const handleTerraClick = () => {
		setIsTerraActive(true);
		setIsJsActive(false);
		setIsReactActive(false);
		setIsVueActive(false);
		setIsAndroidActive(false);
		setIsIosActive(false);
	};
	const handleReactClick = () => {
		setIsReactActive(true);
		setIsTerraActive(false);
		setIsJsActive(false);
		setIsVueActive(false);
		setIsAndroidActive(false);
		setIsIosActive(false);
	};
	const handleVueClick = () => {
		setIsVueActive(true);
		setIsTerraActive(false);
		setIsReactActive(false);
		setIsJsActive(false);
		setIsAndroidActive(false);
		setIsIosActive(false);
	};
	const handleAndroidClick = () => {
		setIsAndroidActive(true);
		setIsTerraActive(false);
		setIsReactActive(false);
		setIsVueActive(false);
		setIsJsActive(false);
		setIsIosActive(false);
	};
	const handleIosClick = () => {
		setIsIosActive(true);
		setIsTerraActive(false);
		setIsReactActive(false);
		setIsVueActive(false);
		setIsAndroidActive(false);
		setIsJsActive(false);
	};

	return (
		<ul className="flex justify-between flex-wrap text-sm font-medium text-center text-gray-500 mb-8">
			<li className="mr-2">
				<a
					onClick={handleJsClick}
					className={` ${
						isJsActive ? "bg-gray-800 text-[#0CD704]" : ""
					} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
				>
					Javascript
				</a>
			</li>
			<li className="mr-2">
				<a
					onClick={handleTerraClick}
					className={` ${
						isTerraActive ? "bg-gray-800 text-[#0CD704]" : ""
					} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
				>
					Terraform
				</a>
			</li>
			<li className="mr-2">
				<a
					onClick={handleReactClick}
					className={` ${
						isReactActive ? "bg-gray-800 text-[#0CD704]" : ""
					} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
				>
					React
				</a>
			</li>
			<li className="mr-2">
				<a
					onClick={handleVueClick}
					className={` ${
						isVueActive ? "bg-gray-800 text-[#0CD704]" : ""
					} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
				>
					Vue
				</a>
			</li>
			<li className="mr-2">
				<a
					onClick={handleAndroidClick}
					className={` ${
						isAndroidActive ? "bg-gray-800 text-[#0CD704]" : ""
					} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
				>
					Android
				</a>
			</li>
			<li className="mr-2">
				<a
					onClick={handleIosClick}
					className={` ${
						isIosActive ? "bg-gray-800 text-[#0CD704]" : ""
					} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
				>
					iOS
				</a>
			</li>
		</ul>
	);
}

TabComponent.propTypes = {
	codeTab: PropTypes.array.isRequired,
};

export default TabComponent;
