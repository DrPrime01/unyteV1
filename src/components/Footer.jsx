import UnyteLogo from "../assets/icons/UnyteLogo.svg";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
	const productsList = [
		{
			page: "Launch",
			link: "products/launch",
		},
		{
			page: "Health",
			link: "products/health",
		},
		{
			page: "Student Protection",
			link: "products/studentProtection",
		},
		{
			page: "Logistics/GIT",
			link: "#",
		},
		{
			page: "Credit Life",
			link: "products/creditLife",
		},
		{
			page: "Motor Reg/ Insurance",
			link: "products/motorRegInsurance",
		},
		{
			page: "Device Protection",
			link: "products/deviceProtection",
		},
		{
			page: "Travel Cover",
			link: "products/travelCover",
		},
	];

	const IndustriesList = [
		{
			page: "Fintech",
			link: "industries/fintech",
		},
		{
			page: "Banks",
			link: "industries/banks",
		},
		{
			page: "Logistics Companies",
			link: "industries/logistics",
		},
		{
			page: "Ecommerce",
			link: "industries/ecommerce",
		},
		{
			page: "Education",
			link: "industries/education",
		},
	];
	const legalList = [
		{
			page: "Developer policy",
			link: "#",
		},
		{
			page: "Privacy policy",
			link: "policies/privacypolicy",
		},
		{
			page: "Cookie policy",
			link: "#",
		},
		{
			page: "End user agreement",
			link: "#",
		},
		{
			page: "End user privacy policy",
			link: "#",
		},
	];
	const developersList = [
		{
			page: "Get started",
			link: "#",
		},
		{
			page: "API Status",
			link: "#",
		},
		{
			page: "API Reference",
			link: "#",
		},
		{
			page: "Developer docs",
			link: "developers/documentation",
		},
		{
			page: "Libraries",
			link: "#",
		},
		{
			page: "Developer community",
			link: "#",
		},
	];
	const products = productsList.map((product) => {
		return (
			<li key={product.page} className="mb-4">
				<NavLink to={product.link}>{product.page}</NavLink>
			</li>
		);
	});
	const industries = IndustriesList.map((industry) => {
		return (
			<li key={industry.page} className="mb-4">
				<NavLink to={industry.link}>{industry.page}</NavLink>
			</li>
		);
	});
	const legals = legalList.map((legal) => {
		return (
			<li key={legal.page} className="mb-4">
				<NavLink to={legal.link}>{legal.page}</NavLink>
			</li>
		);
	});
	const developers = developersList.map((developer) => {
		return (
			<li key={developer.page} className="mb-4">
				<NavLink to={developer.link}>{developer.page}</NavLink>
			</li>
		);
	});

	return (
		<footer className="bg-white">
			<div className="mx-auto w-full max-w-screen-xl md:px-12 xl:px-5 px-5 py-6 lg:py-8">
				<div className="md:flex md:justify-between md:space-x-36">
					<div className="mb-6 md:mb-0 md:flex-none">
						<a href="#" className="flex items-center">
							<img src={UnyteLogo} className="h-8 mr-3" alt="Unyte Logo" />
							<span className="self-center text-2xl font-semibold whitespace-nowrap text-[#033401]">
								unyte
							</span>
						</a>
						<p className="font-medium text-[#101323] text-xl mt-6">
							We empower all <br />
							businesses to deliver <br />
							insurance solutions
						</p>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:flex-1">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
								Products
							</h2>
							<ul className="text-gray-500 text-sm">{products}</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
								Industries
							</h2>
							<ul className="text-gray-500 text-sm">{industries}</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
								Legal
							</h2>
							<ul className="text-gray-500 text-sm">{legals}</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
								Developers
							</h2>
							<ul className="text-gray-500 text-sm">{developers}</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center ">
						© 2021{" "}
						<a href="https://flowbite.com/" className="hover:underline">
							Unyte Africa
						</a>
						. All Rights Reserved.
					</span>
					<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<a href="#" className="text-[#033401]">
							<GrInstagram />
							<span className="sr-only">Instagram Page</span>
						</a>
						<a href="#" className="text-[#033401]">
							<GrTwitter />
							<span className="sr-only">Twitter Page</span>
						</a>
						<a href="#" className="text-[#033401]">
							<FaLinkedinIn />
							<span className="sr-only">LinkedIn page</span>
						</a>
						<a href="#" className="text-[#033401]">
							<FaFacebookF />
							<span className="sr-only">Facebook Page</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
