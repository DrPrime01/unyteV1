import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import { BsArrowUpRight } from "react-icons/bs";

function BlogPreview({
	BlogPreviewBg,
	blogPreviewHeader,
	blogPreviewDesc,
	AvatarImg,
	authorName,
	dateCreated,
}) {
	return (
		<div className="rounded-3xl border relative">
			<div
				style={{ backgroundImage: `url(${BlogPreviewBg})` }}
				className="bg-cover bg-center bg-no-repeat rounded-t-3xl h-[19.5rem]"
			></div>
			<div className="flex items-center gap-x-4 py-5 px-6 bg-white bg-opacity-40 absolute top-[13.75rem] w-full z-10">
				<Avatar alt="author" src={AvatarImg} />
				<div className="flex justify-between flex-1">
					<div>
						<p className="font-semibold text-white mb-2">{authorName}</p>
						<p className="text-sm text-white">{dateCreated}</p>
					</div>
					<p className="text-white font-semibold text-sm">Verified writer</p>
				</div>
			</div>
			<div className="pt-4 p-6 mt-6">
				<p className="text-xl text-[#101323] font-semibold truncate">
					{blogPreviewHeader}
				</p>
				<p className="text-[#667085] leading-7 mb-6 truncate">
					{blogPreviewDesc}
				</p>
				<div className="">
					<button
						type="button"
						className="text-[#101323] group bg-transparent focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm pl-0 px-6 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
					>
						<span>Read more</span>{" "}
						<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
					</button>
				</div>
			</div>
		</div>
	);
}

BlogPreview.propTypes = {
	BlogPreviewBg: PropTypes.string.isRequired,
	AvatarImg: PropTypes.string.isRequired,
	blogPreviewHeader: PropTypes.string.isRequired,
	blogPreviewDesc: PropTypes.string.isRequired,
	dateCreated: PropTypes.string.isRequired,
	authorName: PropTypes.string.isRequired,
};

export default BlogPreview;
