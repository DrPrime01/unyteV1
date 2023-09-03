// import { Avatar } from "@mui/material";
// import Profile from "../assets/images/Profile.png";
import PropTypes from "prop-types";

function TestimonialCard({
	testimonialText,
	testimonialName,
	testimonialPosition,
}) {
	return (
		<div className="rounded-e-3xl border-s border-[#5CC758] bg-[#F9FAFB] p-4 md:w-[25rem]">
			<p className="text-[#667085] text-sm mb-16">
				&quot;{testimonialText}&quot;
			</p>

			<div className="flex flex-col gap-y-1">
				<span className="block text-[#101323] text-sm">{testimonialName}</span>
				<span className="block text-[#667085] text-sm">
					{testimonialPosition}
				</span>
			</div>
		</div>
	);
}

TestimonialCard.propTypes = {
	testimonialText: PropTypes.string,
	testimonialName: PropTypes.string,
	testimonialPosition: PropTypes.string,
};

export default TestimonialCard;
