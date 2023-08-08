import { FaArrowRight } from "react-icons/fa";

import FaqComponent from "../../components/FaqComponent";

function Contact() {
	return (
		<>
			<section className="mt-24 md:mt-32 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between space-x-0 md:space-x-32">
				<div className="pb-16 md:pb-0 mt-0 md:mt-[8rem] w-auto xl:w-[31.75rem]">
					<h4 className="uppercase text-sm mb-2 md:mb-4 font-medium text-[#0CD704]">
						Contact Us
					</h4>
					<h3 className="font-semibold md:font-medium md:text-[#033401] text-[#101323] text-2xl md:leading-12 md:text-[3.25rem] mb-6">
						How can we help?
					</h3>
					<p className="text-[#667085] text-base md:text-xl">
						Our team is here to help you access capital and grow on your terms.
						Check out the FAQs below or reach out directly if you have any
						questions.
					</p>
					<div className="hidden md:block mt-8">
						<button
							type="button"
							className="text-[#101323] bg-[#F9FAFB] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 flex items-center space-x-2"
						>
							<span>Explore integrations</span> <FaArrowRight />
						</button>
					</div>
				</div>
				<div className="w-auto xl:w-[37.625rem]">
					<div className="shadow-xl p-6 rounded-3xl">
						<form className="flex flex-col mb-12">
							<div className="mb-6 flex flex-col md:flex-row justify-between space-x-0 md:space-x-6 items-center w-full">
								<div className="mb-6 md:mb-0 w-full">
									<label
										htmlFor="firstname"
										className="text-[#101323] block mb-2"
									>
										First name
									</label>
									<input
										className="rounded-lg w-full block bg-[#F9FAFB] border border-[#EAECF0] text-[#667085] py-3 pl-4 placeholder:text-sm"
										type="text"
										name="firstname"
										placeholder="E.g John Doe"
									/>
								</div>
								<div className="w-full">
									<label
										htmlFor="lastname"
										className="text-[#101323] block mb-2"
									>
										Last name
									</label>
									<input
										className="block w-full rounded-lg bg-[#F9FAFB] border border-[#EAECF0] text-[#667085] py-3 pl-4 placeholder:text-sm"
										type="text"
										name="lastname"
										placeholder="E.g John Doe"
									/>
								</div>
							</div>
							<div className="mb-6">
								<label htmlFor="email" className="text-[#101323] block mb-2">
									Company Email
								</label>
								<input
									className="block w-full rounded-lg bg-[#F9FAFB] border border-[#EAECF0] text-[#667085] py-3 pl-4 placeholder:text-sm"
									type="email"
									name="email"
									placeholder="you@company.com"
								/>
							</div>
							<div className="mb-6 w-full">
								<label htmlFor="number" className="text-[#101323] block mb-2">
									Phone Number
								</label>
								<div className="flex flex-row items-center">
									<div>
										<select className="block rounded-lg border-e-0 rounded-e-none bg-[#F9FAFB] border border-[#EAECF0] text-[#667085] py-3 pl-4">
											<option disabled selected>
												+1
											</option>
											<option value="+234">+234</option>
											<option value="+234">+234</option>
											<option value="+234">+234</option>
											<option value="+234">+234</option>
										</select>
									</div>
									<div className="flex-1">
										<input
											className="block w-full rounded-lg bg-[#F9FAFB] border-s-0 rounded-s-none border border-[#EAECF0] text-[#667085] py-3 pl-4 placeholder:text-sm"
											type="tel"
											name="number"
											pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
											placeholder="+1 (555) 000-0000"
										/>
									</div>
								</div>
							</div>
							<div className="mb-6">
								<label htmlFor="question" className="text-[#101323] block mb-2">
									What are you building?
								</label>
								<select className="block w-full rounded-lg bg-[#F9FAFB] border border-[#EAECF0] text-[#667085] py-3 pl-4">
									<option disabled selected>
										you@company.com
									</option>
								</select>
							</div>
							<div className="">
								<label htmlFor="message" className="text-[#101323] block mb-2">
									Message
								</label>
								<textarea
									className="block w-full h-[10.5rem] rounded-lg bg-[#F9FAFB] border border-[#EAECF0] text-[#667085] py-3 pl-4 placeholder:text-sm"
									name="message"
									placeholder="Hi, We are building an operating system for the travel industry and we are looking  for API providers to easily allow us offer insurance to our customers"
								></textarea>
							</div>
						</form>
						<div className="flex flex-col md:flex-row items-center justify-between">
							<div className="flex-1 w-full text-center md:text-left mb-12 md:mb-0">
								<p className="text-[#667085] text-sm md:text-base w-full">
									You can also email us at{" "}
									<a href="#mailto">insurance@unyte.africa</a>
								</p>
							</div>
							<div className="w-full md:w-auto">
								<button
									type="button"
									className="text-white block w-full md:w-auto bg-[#5CC758] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
								>
									Send message
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<FaqComponent />
		</>
	);
}

export default Contact;
