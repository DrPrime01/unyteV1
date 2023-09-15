import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FortunateAnozie from "../../assets/images/FounderProfile/FortunateAnozie.jpg";
import Funsho from "../../assets/images/FounderProfile/Funsho.jpg";
import Nelson from "../../assets/images/FounderProfile/Nelson.JPG";
import WahabDisu from "../../assets/images/FounderProfile/WahabDisu.png";
import Oyegunle from "../../assets/images/FounderProfile/Oyegunle.JPG";
import FemiLaniyan from "../../assets/images/FounderProfile/FemiLaniyan.jpg";

function About() {
	return (
		<>
			<section
				id="modernizing insurance"
				className="mt-48 md:mt-32 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between"
			>
				<div className="pb-16 md:pb-0 flex-1">
					<h4 className="text-base md:text-sm font-semibold mb-2 md:mb-4 text-[#0CD704]">
						Modernizing Insurance
					</h4>
					<h3 className="font-semibold md:font-bold text-2xl md:text-5xl text-[#033401] mb-6">
						About Unyte Africa
					</h3>
					<p className="text-base md:text-xl text-[#667085] md:leading-8">
						We’ve been told it is possible to revolutionize the insurance
						industry. We have not reinvented the wheel, we decided to build upon
						it - successfully.
					</p>
				</div>
				<div className="flex-1"></div>
			</section>
			<section
				className="py-16 md:py-20 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col justify-between space-y-14"
				id="who we are"
			>
				<div id="texts" className="mb-14">
					<h3 className="uppercase text-base md:text-xl mb-4 font-medium md:font-normal text-[#0CD704]">
						who we are
					</h3>
					<div className="flex flex-col md:flex-row justify-between py-2 space-y-6 md:space-y-0 space-x-0 md:space-x-20">
						<p className="font-medium text-2xl md:text-[2rem] text-[#667085] md:leading-12">
							We are an insuretech company that provides{" "}
							<span className="text-[#101323]">digital insurance</span> to{" "}
							<span className="text-[#101323]">individuals</span> and{" "}
							<span className="text-[#101323]">APIs for fintechs</span> and{" "}
							<span className="text-[#101323]">businesses</span> to enable them{" "}
							<span className="text-[#101323]">embed insurance.</span>
						</p>
						<div className="text-[#667085] text-xl gap-y-5">
							<p className="mb-5 md:leading-8">
								Living is risky, and being unprotected in the event of accidents
								could cost you a lot financially and mentally.{" "}
							</p>
							<p className="md:leading-8">
								Unyte&apos;s vision is to make insurance accessible by providing
								affordable insurance packages, simplifying the process of
								getting insurance, prioritizing our users needs through amazing
								customer service and feedback, and educating our users on the
								importance of insurance.
							</p>
						</div>
					</div>
				</div>
				{/*<div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5 mb-16 md:mb-20">
					<div className="py-5 text-center rounded-2xl bg-[#F9FAFB] flex-1">
						<p className="mb-4 text-[#101323] text-xl font-semibold">95%</p>
						<p className="mb-2 text-[#101323] text-base font-semibold">
							Claim Approval Rate
						</p>
						<p className="text-[#667085]">
							Quick and hassle-free claim processing.
						</p>
					</div>
					<div className="py-5 text-center rounded-2xl bg-[#F9FAFB] flex-1">
						<p className="mb-4 text-[#101323] text-xl font-semibold">500%</p>
						<p className="mb-2 text-[#101323] text-base font-semibold">
							Return on Investment
						</p>
						<p className="text-[#667085]">
							Our partners have reported an avg of 500% ROI.
						</p>
					</div>
					<div className="py-5 text-center rounded-2xl bg-[#F9FAFB] flex-1">
						<p className="mb-4 text-[#101323] text-xl font-semibold">500%</p>
						<p className="mb-2 text-[#101323] text-base font-semibold">
							Return on Investment
						</p>
						<p className="text-[#667085]">
							Our partners have reported an avg of 500% ROI.
						</p>
					</div>
	</div>*/}
			</section>
			<section
				id="founders"
				className="md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto py-16 md:py-20 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 space-x-0 md:space-x-16"
			>
				<div className="w-auto md:w-[20.5rem]">
					<h3 className="uppercase text-base md:text-xl mb-2 md:mb-4 font-medium md:font-normal text-[#0CD704]">
						core
					</h3>
					<h3 className="mb-4 font-medium text-2xl md:text-[2.438rem] text-[#101323]">
						Leadership team
					</h3>
					<p className="text-[#667085]">
						We are a vibrant team of people who are committed to giving our
						clients the finest results possible and are passionate about what we
						do.
					</p>
				</div>
				<div
					id="founders-bio"
					className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 md:gap-y-10 gap-8"
				>
					<div className="flex flex-col">
						<div
							id="image"
							className="bg-[#F9FAFB] rounded-2xl h-[500px] w-auto md:w-[25rem] mb-6"
						>
							<img
								src={FortunateAnozie}
								alt="Fortunate Anozie"
								className="w-full h-full rounded-2xl object-center object-cover"
							/>
						</div>
						<div id="name" className="mb-6">
							<p className="text-xl font-semibold text-[#101323] mb-2">
								Fortunate Anozie
							</p>
							<p className="text-[#667085]">CEO/Co-founder</p>
						</div>

						<div id="socials" className="flex gap-x-3">
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="https://www.linkedin.com/in/anozie32/" target="blank">
									<FaLinkedinIn />
								</a>
							</div>
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="mailto:anozie@unyte.africa" target="blank">
									<MdEmail />
								</a>
							</div>
						</div>
					</div>

					<div className="flex flex-col">
						<div
							id="image"
							className="bg-[#F9FAFB] rounded-2xl h-[500px] w-auto md:w-[25rem] mb-6"
						>
							<img
								src={FemiLaniyan}
								alt="Femi Laniyan"
								className="w-full h-full rounded-2xl object-center object-cover"
							/>
						</div>
						<div id="name" className="mb-6">
							<p className="text-xl font-semibold text-[#101323] mb-2">
								Femi Laniyan
							</p>
							<p className="text-[#667085]">Co-founder/Director</p>
						</div>
						<div id="socials" className="flex gap-x-3">
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="" target="blank">
									<FaLinkedinIn />
								</a>
							</div>
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="mailto:femi@unyte.africa" target="blank">
									<MdEmail />
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div
							id="image"
							className="bg-[#F9FAFB] rounded-2xl h-[500px] w-auto md:w-[25rem] mb-6"
						>
							<img
								src={Nelson}
								alt="Nelson Okpalachukwu"
								className="w-full h-full rounded-2xl object-center object-cover"
							/>
						</div>
						<div id="name" className="mb-6">
							<p className="text-xl font-semibold text-[#101323] mb-2">
								Nelson Okpalachukwu
							</p>
							<p className="text-[#667085]">Co-founder/Director</p>
						</div>

						<div id="socials" className="flex gap-x-3">
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a
									href="https://www.linkedin.com/in/nelsonokpalachukwu/"
									target="blank"
								>
									<FaLinkedinIn />
								</a>
							</div>
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="mailto:nelson@unyte.africa" target="blank">
									<MdEmail />
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div
							id="image"
							className="bg-[#F9FAFB] rounded-2xl h-[500px] w-auto md:w-[25rem] mb-6"
						>
							<img
								src={WahabDisu}
								alt="Wahab Disu"
								className="w-full h-full rounded-2xl object-center object-cover"
							/>
						</div>
						<div id="name" className="mb-6">
							<p className="text-xl font-semibold text-[#101323] mb-2">
								Wahab Disu
							</p>
							<p className="text-[#667085]">Director</p>
						</div>

						<div id="socials" className="flex gap-x-3">
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a
									href="https://www.linkedin.com/in/wahab-disu-876345193/"
									target="blank"
								>
									<FaLinkedinIn />
								</a>
							</div>
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="mailto:wahab@unyte.africa" target="blank">
									<MdEmail />
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div
							id="image"
							className="bg-[#F9FAFB] rounded-2xl h-[500px] w-auto md:w-[25rem] mb-6"
						>
							<img
								src={Oyegunle}
								alt="Oyegunle"
								className="w-full h-full rounded-2xl object-center object-cover"
							/>
						</div>
						<div id="name" className="mb-6">
							<p className="text-xl font-semibold text-[#101323] mb-2">
								Oyegunle Muftau
							</p>
							<p className="text-[#667085]">Non-executive Director</p>
						</div>

						<div id="socials" className="flex gap-x-3">
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a
									href="https://www.linkedin.com/in/muftau-oyegunle-354641124/"
									target="blank"
								>
									<FaLinkedinIn />
								</a>
							</div>
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="" target="blank">
									<MdEmail />
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div
							id="image"
							className="bg-[#F9FAFB] rounded-2xl h-[500px] w-auto md:w-[25rem] mb-6"
						>
							<img
								src={Funsho}
								alt="Funsho"
								className="w-full h-full rounded-2xl object-center object-cover"
							/>
						</div>
						<div id="name" className="mb-6">
							<p className="text-xl font-semibold text-[#101323] mb-2">
								Funsho Omojuyigbe
							</p>
							<p className="text-[#667085]">Director</p>
						</div>

						<div id="socials" className="flex gap-x-3">
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a
									href="https://www.linkedin.com/in/funsho-omojuyigbe-sphri%E2%84%A2-03707241/"
									target="blank"
								>
									<FaLinkedinIn />
								</a>
							</div>
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="mailto:hr@unyte.africa" target="blank">
									<MdEmail />
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div
							id="image"
							className="bg-[#F9FAFB] rounded-2xl h-[500px] w-auto md:w-[25rem] mb-6"
						></div>
						<div id="name" className="mb-6">
							<p className="text-xl font-semibold text-[#101323] mb-2">
								Morayo Okurinboye
							</p>
							<p className="text-[#667085]">Director</p>
						</div>

						<div id="socials" className="flex gap-x-3">
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a
									href="http://linkedin.com/in/morayo-okunrinboye-acii-crm-mirm-a16b4660"
									target="blank"
								>
									<FaLinkedinIn />
								</a>
							</div>
							<div className="rounded-full p-1 text-[#667085] bg-[#F9FAFB] hover:text-[#0CD704]">
								<a href="" target="blank">
									<MdEmail />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
