import { RiSearchLine } from "react-icons/ri";
import moment from "moment";
import { Link } from "react-router-dom";

import Video from "../../components/Video";
import BlogPreview from "../../components/BlogPreview";
import BlogPreviewBg from "../../assets/images/BlogPreviewBg.jpg";
import AvatarImg from "../../assets/images/AvatarImg.png";

function Learn() {
	const defaultBlogData = {
		blogPreviewBg: BlogPreviewBg,
		blogPreviewHeader: "Insurance has never been Simpler",
		blogPreviewDesc:
			"Insurance is very simple. It is something we pay for to make sure that we don’t end up in...",
		avatarImg: AvatarImg,
		authorName: "Treasure Okure",
		dateCreated: new Date(),
	};
	const previewBlog = new Array(6).fill(defaultBlogData);
	console.log(previewBlog);
	return (
		<>
			<section
				id="learn"
				className="mt-48 md:mt-40 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between"
			>
				<div className="pb-16 md:pb-0 flex-1 md:mr-[4.375rem] mr-0">
					<h4 className="text-base md:text-sm font-semibold mb-2 md:mb-4 text-[#0CD704] uppercase">
						learn
					</h4>
					<h3 className="font-semibold md:font-bold text-2xl md:text-5xl text-[#033401] mb-6">
						Expand your
						<br className="hidden md:block" /> knowledge in Insurance
						<br className="hidden md:block" /> and{" "}
						<span className="text-[#0CD704]">Grow</span> with us
					</h3>
					<p className="text-base md:text-xl text-[#667085] md:leading-8 mb-12">
						Unlock the power of insurance knowledge through our comprehensive
						learning resources and grow together with our community.
					</p>
				</div>
				<div className="flex-1"></div>
			</section>
			<section
				id="learn"
				className="mb-12 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col justify-between"
			>
				<Video />
				<div className="mt-12">
					<div className="flex items-center gap-x-2 text-[#5CC758] text-sm font-semibold">
						<p>Fortunate Anozie</p>
						<p>20 Jan 2023</p>
					</div>
					<div className="mt-4">
						<p className="text-4xl text-[#101323] font-bold mb-2">
							Getting started with Unyte
						</p>
						<p className="text-[#667085]">
							Lörem ipsum tetrarat digifysisk i as ohönera kontralig. Prodat
							eurokende, stadsutglesni
						</p>
					</div>
				</div>
			</section>
			<section
				id="learn"
				className="mb-12 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex flex-col justify-between"
			>
				<div
					id="search-filter"
					className="flex items-center justify-between mb-12"
				>
					<div className="relative">
						<input
							type="search"
							placeholder="Search for an article"
							className="p-2 pl-3.5 placeholder:pl-6 rounded-3xl border border-[#D0D5DD] bg-[#FCFCFD] w-[18.625rem]"
						/>
						<button className="bg-[#5CC758] text-white rounded-[20px] py-1.5 px-4 absolute right-1.5 top-[3px]">
							Search
						</button>
						<RiSearchLine className="text-[#D0D5DD] left-3 absolute top-3.5" />
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5">
					{previewBlog.map((preview) => {
						return (
							<Link to="blog" key={preview.authorName}>
								<BlogPreview
									BlogPreviewBg={preview.blogPreviewBg}
									blogPreviewHeader={preview.blogPreviewHeader}
									blogPreviewDesc={preview.blogPreviewDesc}
									AvatarImg={preview.avatarImg}
									authorName={preview.authorName}
									dateCreated={moment(preview.dateCreated).fromNow()}
								/>
							</Link>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default Learn;
