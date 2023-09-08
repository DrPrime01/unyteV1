import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Chip, Avatar } from "@mui/material";
import moment from "moment";

import AvatarImg from "../../assets/images/AvatarImg.png";
import BlogPicture from "../../assets/images/BlogPicture.png";

function Blog() {
	return (
		<>
			<section
				id="blog-container"
				className="mt-48 md:mt-40 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between"
			>
				<div className="flex flex-col pb-16 md:pb-0 flex-1 md:mr-[16.375rem] mr-0">
					<Link to="/company/learn" className="gap-2 flex items-center">
						<FaArrowLeft /> <span>Back to Learn</span>
					</Link>
					<div className="mt-9">
						<Chip
							label="8 minutes read"
							size="small"
							sx={{
								color: "#667085",
								backgroundColor: "#F9FAFB",
								fontWeight: 600,
							}}
						/>
						<p className="mt-8 font-bold text-3xl md:text-5xl text-[#101323] mb-4 md:leading-14">
							Insurance Simplified: Unyte&apos;s Revolutionary Approach
						</p>
						<div className="flex flex-wrap items-center gap-2.5 mb-12">
							<Chip
								label="Insurance"
								size="small"
								sx={{
									color: "#EDA12F",
									backgroundColor: "#FFF5E6",
									fontWeight: 600,
								}}
							/>
							<Chip
								label="Revolusionalize"
								size="small"
								sx={{
									color: "#3DCC87",
									backgroundColor: "#E6FFF3B2",
									fontWeight: 600,
								}}
							/>
							<Chip
								label="Insurance"
								size="small"
								sx={{
									color: "#2EA2E6",
									backgroundColor: "#E6F6FF",
									fontWeight: 600,
								}}
							/>
							<Chip
								label="Insurance"
								size="small"
								sx={{
									color: "#E62E2E",
									backgroundColor: "#FFE6E6",
									fontWeight: 600,
								}}
							/>
						</div>
						<div className="flex items-center gap-x-4 mb-16 md:mb-0">
							<Avatar alt="author" src={AvatarImg} />
							<div className="">
								<div>
									<p className="font-semibold mb-1">Fortunate Anozie</p>
									<p className="text-sm">{moment(new Date()).fromNow()}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=""></div>
			</section>
			<section
				id="learn"
				className="md:mt-[10.3125rem] mb-12 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between"
			>
				<div id="outline" className="hidden md:flex flex-col justify-between">
					<div>
						<p className="font-semibold text-[#033401 mb-4">On this page</p>
						<ul className="text-[#667085] list-disc">
							<li className="px-4 py-2 pl-0 ml-8">Introduction</li>
							<li className="px-4 py-2 pl-0 ml-8">
								Unyte: The Game-Changer in <br />
								Insurance
							</li>
							<li className="px-4 py-2 pl-0 ml-8">
								Simplifying Insurance through <br />
								Seamless Integration
							</li>
							<li className="px-4 py-2 pl-0 ml-8">
								Diverse Insurance Options for <br />
								Comprehensive Coverage
							</li>
							<li className="px-4 py-2 pl-0 ml-8">
								Overcoming Challenges in <br />
								Insurance Adoption
							</li>
							<li className="px-4 py-2 pl-0 ml-8">
								Customer Satisfaction and <br />
								Continuous Improvement
							</li>
							<li className="px-4 py-2 pl-0 ml-8">
								Conclusion: Unlocking the <br />
								Future of Insurance
							</li>
						</ul>
					</div>
					<Link to="/company/learn" className="gap-2 flex items-center">
						<FaArrowLeft /> <span>Back to Learn</span>
					</Link>
				</div>
				<div id="content" className="flex-1 md:ml-[7.8125rem]">
					<p className="pt-2.5 pb-6 font-medium italic text-[#101323] leading-10 text-justify">
						In a world where complexities often surround insurance, Unyte
						emerges as a game-changer, revolutionizing the landscape and making
						insurance simpler than ever before. With an innovative blend of
						technology, collaborative partnerships, and customer-centric focus,
						Unyte has transformed the insurance experience, empowering
						businesses and individuals alike.
					</p>
					<div className="my-16">
						<p className="mb-4 font-semibold text-[#101323]">Introduction</p>
						<p className="text-[#667085] md:text-xl text-justify leading-10">
							In a world where complexities often surround insurance, Unyte
							emerges as a game-changer, revolutionizing the landscape and
							making insurance simpler than ever before. With an innovative
							blend of technology, collaborative partnerships, and
							customer-centric focus, Unyte has transformed the insurance
							experience, empowering businesses and individuals alike.
						</p>
					</div>
					<div className="border border-y-0 border-r-0 border-[#5CC758] px-8 pb-6 pt-2.5 mb-16">
						<p className="font-semibold text-xl md:text-3xl italic text-[#101323] text-justify mb-16">
							“Our goal is to bridge the gap between traditional insurance
							providers and the digital ecosystem, providing an unmatched
							insurance experience.
						</p>
						<div className="flex items-center gap-x-4 md:mb-0">
							<Avatar alt="author" src={AvatarImg} />
							<div className="">
								<div>
									<p className="font-semibold mb-1 text-[#101323]">
										Fortunate Anozie
									</p>
									<p className="text-sm text-[#667085]">
										CEO/ Co-founder of Unyte.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-16">
						<img
							src={BlogPicture}
							alt="a woman writing on a board"
							className="mb-4"
						/>
						<p className="text-[#101323]">Source: Image from stocks </p>
					</div>
					<div className="mb-16">
						<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
							Through Unyte&apos;s robust API solutions, businesses can now
							easily integrate insurance offerings into their platforms,
							expanding their services and enhancing customer satisfaction. This
							strategic approach has opened up new horizons for partnerships and
							synergies across industries, paving the way for Fintechs, schools,
							logistics, and others to leverage the power of insurance to
							safeguard their operations and customers.
						</p>
						<p className="text-[#667085] md:text-xl text-justify leading-10">
							When asked about the impact of Unyte&apos;s partnership, Jane Doe,
							CEO of a leading Fintech firm, exclaims, &quot;Unyte has
							revolutionized our business! We can now provide our customers with
							seamless access to insurance options, boosting their confidence
							and loyalty. It&apos;s a win-win for both our company and
							clients.&quot;
						</p>
					</div>
					<div className="mb-16 pt-2.5 pb-6 border border-x-0 border-t-0">
						<p className="text-[#0CD704] italic md:text-xl text-justify leading-10">
							Unyte&apos;s array of insurance products from renowned providers
							such as AXA, Leadway, Staco, and Tangerine ensures that customers
							have a diverse range of options to choose from. Whether it&apos;s
							health, motor, travel, or device protection, Unyte&apos;s platform
							offers a one-stop solution for all insurance needs.
						</p>
					</div>
					<div>
						<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
							&quot;We wanted to make insurance simple, yet comprehensive,&quot;
							says Adewunmi Aladenusi, Head of Product at Unyte. &quot;Our team
							has worked tirelessly to design APIs tailored for various sectors,
							ensuring that each industry can find the perfect fit for their
							requirements.&quot;
						</p>
						<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
							In the past, insurance adoption in Nigeria stood at a staggering
							low of 0.5%. Many factors contributed to this, including lack of
							understanding and limited access. Unyte&apos;s innovative approach
							has changed the game, propelling insurance adoption to new
							heights. &quot;We&apos;ve witnessed a significant increase in
							insurance adoption since partnering with Unyte,&quot; shares
							Samuel Adams, CEO of a logistics company. &quot;Their seamless
							integration and easy onboarding have been crucial to our
							success.&quot;
						</p>
						<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
							Unyte&apos;s commitment to customer satisfaction is evident in
							their continuous efforts to enhance their services based on
							valuable feedback. &quot;We value our customers&apos; input and
							strive to continually improve,&quot; states Treasure Okure,
							Customer Support Manager at Unyte. &quot;Their feedback drives us
							to develop better solutions and provide an exceptional user
							experience.&quot;
						</p>
						<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
							In conclusion, Unyte has shattered the traditional barriers
							surrounding insurance, paving the way for a new era of simplicity
							and accessibility. By providing innovative solutions, seamless
							integration, and a diverse range of insurance products, Unyte has
							transformed the insurance landscape for the better. &quot;Our
							journey has just begun,&quot; affirms Anozie Daniel. &quot;We are
							committed to making insurance simpler for everyone, empowering
							businesses and individuals to embrace the security and peace of
							mind it brings.&quot;
						</p>
						<p className="text-[#667085] md:text-xl text-justify leading-10">
							With Unyte&apos;s forward-thinking approach, the future of
							insurance has never looked brighter. Unlocking the true potential
							of insurance has become a reality, thanks to Unyte&apos;s
							unwavering dedication to simplifying insurance for all.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Blog;
