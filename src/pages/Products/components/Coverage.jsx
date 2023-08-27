import { useState, useEffect } from "react";

import WalletIcon from "../../../assets/icons/WalletIcon.svg";
import CardIcon from "../../../assets/icons/CardIcon.svg";
import PiechartIcon from "../../../assets/icons/PiechartIcon.svg";
import BankIcon from "../../../assets/icons/BankIcon.svg";
import SmallSplash from "../../../assets/icons/SmallSplash.svg";
import Splash from "../../../assets/icons/Splash.svg";
import DarkUnyteLogo from "../../../assets/icons/DarkUnyteLogo.svg";
import "./coverage.css";

function Coverage() {
	const [activeDiv, setActiveDiv] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveDiv((prev) => (prev + 1) % 4);
		}, 4000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="h-auto w-auto md:h-[35rem] md:w-[35rem] md:p-8 relative">
			<img
				src={SmallSplash}
				alt="small splash"
				className="absolute md:-top-1 md:-left-0.5 -left-5 -top-5"
			/>
			<img
				src={DarkUnyteLogo}
				alt="unyte logo"
				className="absolute md:top-[15.5rem] md:left-[15.5rem] left-[9rem] top-[10.5rem] z-20"
			/>
			<img
				src={SmallSplash}
				alt="small splash"
				className="absolute -top-1 -left-0.5"
			/>
			<div className="flex flex-wrap h-[25rem] w-auto md:w-[31rem] md:h-[31rem] md:gap-4 gap-1.5">
				<div
					className={`rounded-[10px] ${
						activeDiv === 0 ? "marching" : "shadow-lg"
					} z-10 bg-white py-10 flex flex-col items-center justify-center md:w-[calc(50%-1rem)] w-[calc(50%-0.5rem)] h-1/2 border transition-all duration-300 delay-150`}
				>
					<img src={BankIcon} alt="bank icon" className="mb-4 md:mb-6" />
					<div className="text-center px-[1.375rem]">
						<p className="mb-[5.6px] md:mb-2 font-bold text-[#101323] text-xl md:text-[26px]">
							95%
						</p>
						<p className="md:leading-7 md:text-[15px] md:font-medium text-sm text-[#98A2B3]">
							High claim approval rate
						</p>
					</div>
				</div>
				<div
					className={`rounded-[10px] ${
						activeDiv === 1 ? "marching" : "shadow-lg"
					} z-10 bg-white py-10 flex flex-col items-center justify-center md:w-[calc(50%-1rem)] w-[calc(50%-0.5rem)] h-1/2 border transition-all duration-300 delay-150`}
				>
					<img src={WalletIcon} alt="wallet icon" className="mb-4 md:mb-6" />
					<div className="text-center px-[1.375rem]">
						<p className="mb-[5.6px] md:mb-2 font-bold text-[#101323] text-xl md:text-[26px]">
							$1 Million
						</p>
						<p className="md:leading-7 md:text-[15px] md:font-medium text-sm text-[#98A2B3]">
							Coverage for major medical expenses
						</p>
					</div>
				</div>
				<div
					className={`rounded-[10px] ${
						activeDiv === 2 ? "marching" : "shadow-lg"
					} z-10 bg-white py-10 flex flex-col items-center justify-center md:w-[calc(50%-1rem)] w-[calc(50%-0.5rem)] h-1/2 border transition-all duration-300 delay-150`}
				>
					<img src={CardIcon} alt="card icon" className="mb-4 md:mb-6" />
					<div className="text-center px-[1.375rem]">
						<p className="mb-[5.6px] md:mb-2 font-bold text-[#101323] text-xl md:text-[26px]">
							1000+
						</p>
						<p className="md:leading-7 md:text-[15px] md:font-medium text-sm text-[#98A2B3]">
							Extensive network of healthcare providers
						</p>
					</div>
				</div>
				<div
					className={`rounded-[10px] ${
						activeDiv === 3 ? "marching" : "shadow-lg"
					} z-10 bg-white py-10 flex flex-col items-center justify-center md:w-[calc(50%-1rem)] w-[calc(50%-0.5rem)] h-1/2 border transition-all duration-300 delay-150`}
				>
					<img
						src={PiechartIcon}
						alt="Piechart icon"
						className="mb-4 md:mb-6"
					/>
					<div className="text-center px-[1.375rem]">
						<p className="mb-[5.6px] md:mb-2 font-bold text-[#101323] text-xl md:text-[26px]">
							24/7
						</p>
						<p className="md:leading-7 md:text-[15px] md:font-medium text-sm text-[#98A2B3]">
							Access to round-the-clock customer support
						</p>
					</div>
				</div>
			</div>
			<img
				src={Splash}
				alt="small splash"
				className="absolute md:right-0 md:-bottom-2 -bottom-6 -right-5"
			/>
		</div>
	);
}

export default Coverage;
