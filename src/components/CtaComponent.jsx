import { BsArrowUpRight } from "react-icons/bs";

import UnyteLogoBig from "../assets/icons/UnyteLogoBig.svg";
import CTA from "../assets/images/CTA.svg";

function CtaComponent() {
	return (
		<section
			className="py-20 bg-cover bg-center bg-no-repeat px-5 max-h-screen my-10"
			id="cta"
			style={{ backgroundImage: `url(${CTA})` }}
		>
			<div className="flex flex-col justify-center items-center">
				<img src={UnyteLogoBig} alt="large unyte logo" className="mb-12" />
				<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
					Built for the future.
				</h2>
				<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
					Available today.
				</h2>
				<p className="text-base mb-8 leading-7 text-[#667085] text-center">
					Access high-quality insurance API and start processing leads for your{" "}
					<br />
					businesses
				</p>
				<div className="flex items-center gap-x-2.5">
					<button
						type="button"
						className="text-white bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
					>
						Get started for free
					</button>
					<a
						href="#"
						className="text-[#667085] text-[0.75rem] font-medium flex items-center gap-x-2 px-4 py-2"
					>
						<span>Contact sales</span>
						<BsArrowUpRight />
					</a>
				</div>
			</div>
		</section>
	);
}

export default CtaComponent;
