import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import UnyteLogoBig from "../assets/icons/UnyteLogoBig.svg";
import CTA from "../assets/images/CTA.svg";

function CtaComponent() {
	return (
		<section
			className="py-20 bg-cover bg-center bg-no-repeat md:px-12 xl:px-5 px-5 max-h-screen my-10 mt-[5.25rem]"
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
				<div className="flex md:flex-row flex-col space-y-2.5 md:space-y-0 items-center gap-x-2.5 w-full md:w-auto">
					<Link
						to="company/contact"
						className="text-white bg-[#5CC758] text-base focus:ring-4 w-full md:w-auto focus:outline-none font-medium rounded-3xl md:text-sm px-4 py-3 text-center mr-3 md:mr-0"
					>
						Get started
					</Link>
					<a
						href="#"
						className="text-[#667085] group text-[0.75rem] text-base md:text-sm w-full md:w-auto font-medium flex items-center md:justify-start justify-center gap-x-2 px-4 py-3"
					>
						<span>Contact sales</span>
						<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default CtaComponent;
