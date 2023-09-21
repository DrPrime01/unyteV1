import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Chip, Avatar } from "@mui/material";

import { blogContent } from "../../Data/blogs";

function Blog() {
	const { id } = useParams();
	const blog = blogContent.find((b) => b.id === id);
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
							{blog.title}
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
							<Avatar alt="author" src={blog?.authorImage} />
							<div className="">
								<div>
									<p className="font-semibold mb-1">{blog?.authorName}</p>
									<p className="text-sm">{blog?.date}</p>
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
						{blog?.sampleNote}
					</p>
					<div className="my-16">
						<p className="mb-4 font-semibold text-[#101323]">Introduction</p>
						<p className="text-[#667085] md:text-xl text-justify leading-10">
							{blog?.blogPart1}
						</p>
					</div>
					<div className="border border-y-0 border-r-0 border-[#5CC758] px-8 pb-6 pt-2.5 mb-16">
						<p className="font-semibold text-xl md:text-3xl italic text-[#101323] text-justify mb-16">
							“{blog?.sideNote}
						</p>
						<div className="flex items-center gap-x-4 md:mb-0">
							<Avatar alt="author" src={blog?.authorImage} />
							<div className="">
								<div>
									<p className="font-semibold mb-1 text-[#101323]">
										{blog?.authorName}
									</p>
									<p className="text-sm text-[#667085] italic">
										Verified writer
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-16">
						<img
							src={blog?.blogCover}
							alt="a woman writing on a board"
							className="mb-4 rounded-2xl"
						/>
						<p className="text-[#101323]">Source: Image from stocks </p>
					</div>
					{!["5", "7", "9"].includes(id) && (
						<div className="mb-16">
							{id === "4" && (
								<h2 className="text-2xl md:text-3xl font-semibold mb-8">
									{blog?.header1}
								</h2>
							)}
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
								{blog?.blogPart2}
							</p>
							<p className="text-[#667085] md:text-xl text-justify leading-10">
								{blog?.blogPart3}
							</p>
						</div>
					)}
					<div className="mb-16 pt-2.5 pb-6 border border-x-0 border-t-0">
						<p className="text-[#0CD704] italic md:text-xl text-justify leading-10">
							{blog?.sideNote2}
						</p>
					</div>
					{!["5", "7", "9"].includes(id) && (
						<div className="mb-16">
							{["3", "8"].includes(id) && (
								<>
									<h2 className="text-2xl md:text-3xl font-semibold mb-8">
										{blog?.header1}
									</h2>
									{id === "8" && (
										<ol className="list-decimal ml-6">
											{blog?.sentence1List?.map((sentence, i) => {
												return (
													<li
														key={i}
														className="text-[#667085] md:text-xl text-justify leading-10 mb-4"
													>
														{sentence}
													</li>
												);
											})}
										</ol>
									)}
								</>
							)}
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
								{blog?.blogPart4}
							</p>
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
								{blog?.blogPart5}
							</p>
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
								{blog?.blogPart6}
							</p>
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2">
								{blog?.blogPart7}
							</p>
						</div>
					)}
					{["5", "7", "9"].includes(id) && (
						<div>
							<p className="text-black text-2xl md:text-4xl text-justify leading-10 mb-8 font-semibold">
								{blog?.introHeader}
							</p>
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-6">
								{blog?.intro}
							</p>
							<ol className="list-decimal font-semibold md:text-2xl ml-6">
								{blog?.text?.map((content, index) => (
									<li key={index} className="mb-8 pl-6">
										<p className="text-black md:text-2xl font-semibold text-justify leading-10 mb-4">
											{content?.header}
										</p>
										<p className="text-[#667085] md:text-xl text-justify leading-10 mb-2 font-normal">
											{content?.body}
										</p>
									</li>
								))}
							</ol>
						</div>
					)}
					{["3", "4"].includes(id) && (
						<div>
							<h2 className="text-2xl md:text-3xl font-semibold mb-8">
								{blog?.header2}
							</h2>
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-6">
								{blog?.sentence1}
							</p>
							<ul className="list-disc ml-6 mb-6">
								{blog?.sentence1List?.map((sentence, i) => {
									return (
										<li
											key={i}
											className="text-[#667085] md:text-xl text-justify leading-10 mb-4"
										>
											{sentence}
										</li>
									);
								})}
							</ul>
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-8">
								{blog?.sentence1End}
							</p>
							{id === "3" && (
								<>
									<h2 className="text-2xl md:text-3xl font-semibold mb-8">
										{blog?.header3}
									</h2>
									<p className="text-[#667085] md:text-xl text-justify leading-10 mb-6">
										{blog?.sentence2}
									</p>
									<ul className="list-disc ml-6 mb-8">
										{blog?.sentence2List?.map((sentence, i) => {
											return (
												<li
													key={i}
													className="text-[#667085] md:text-xl text-justify leading-10 mb-4"
												>
													{sentence}
												</li>
											);
										})}
									</ul>
									<h2 className="text-2xl md:text-3xl font-semibold mb-8">
										{blog?.header4}
									</h2>
									<p className="text-[#667085] md:text-xl text-justify leading-10 mb-6">
										{blog?.sentence3}
									</p>

									<ul className="list-disc ml-6 mb-6">
										{blog?.sentence3List?.map((sentence, i) => {
											return (
												<li
													key={i}
													className="text-[#667085] md:text-xl text-justify leading-10 mb-4"
												>
													{sentence}
												</li>
											);
										})}
									</ul>
									<p className="text-[#667085] md:text-xl text-justify leading-10 mb-8">
										{blog?.sentence3End}
									</p>
								</>
							)}
							<h2 className="text-2xl md:text-3xl font-semibold mb-8">
								{blog?.conclusionHeader}
							</h2>
							<p className="text-[#667085] md:text-xl text-justify leading-10 mb-6">
								{blog?.conclusion}
							</p>
						</div>
					)}
				</div>
			</section>
		</>
	);
}

export default Blog;
