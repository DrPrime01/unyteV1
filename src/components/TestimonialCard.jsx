import { Avatar } from "@mui/material";
import Profile from "../assets/images/Profile.png";

function TestimonialCard() {
	return (
		<div className="rounded-e-3xl border-s border-[#5CC758] bg-[#F9FAFB] p-4">
			<p className="text-[#667085] text-sm font-semibold mb-8">
				Unyte for Students
			</p>
			<p className="text-[#667085] text-sm mb-16">
				“ Unyte Health has been a game-changer for me. The coverage is
				extensive, and I feel confident knowing that my health expenses are
				taken care of.
			</p>
			<div className="flex items-center gap-x-4">
				<Avatar alt="Profile" src={Profile} />
				<div className="flex flex-col gap-y-1">
					<span className="block text-[#101323] text-sm">Daniel Anozie</span>
					<span className="block text-[#667085] text-sm">
						Student at University of Ibadan
					</span>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
