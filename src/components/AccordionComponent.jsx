import { useState } from "react";

import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";

function AccordionComponent() {
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [show4, setShow4] = useState(false);
	const handleShow1 = () => {
		setShow1(!show1);
		setShow2(false);
		setShow3(false);
		setShow4(false);
	};
	const handleShow2 = () => {
		setShow2(!show2);
		setShow1(false);
		setShow3(false);
		setShow4(false);
	};
	const handleShow3 = () => {
		setShow3(!show3);
		setShow2(false);
		setShow1(false);
		setShow4(false);
	};
	const handleShow4 = () => {
		setShow4(!show4);
		setShow2(false);
		setShow1(false);
		setShow3(false);
	};
	return (
		<div id="accordion-collapse" data-accordion="collapse">
			<h2 id="accordion-collapse-heading-1">
				<button
					type="button"
					onClick={handleShow1}
					className="flex items-center justify-between flex-row-reverse gap-4 w-full p-5 font-medium text-left text-[#101323] border border-b-0 border-t-0 border-x-0 border-[#F2F4F7] focus:ring-0 active:ring-0"
					data-accordion-target="#accordion-collapse-body-1"
					aria-expanded="true"
					aria-controls="accordion-collapse-body-1"
				>
					{show1 ? (
						<MdOutlineKeyboardArrowUp />
					) : (
						<MdOutlineKeyboardArrowDown />
					)}{" "}
					<span>What does kobo kobo do?</span>
				</button>
			</h2>
			<div
				id="accordion-collapse-body-1"
				className={`${
					show1 ? "max-h-40" : "max-h-0"
				} duration-500 transition-all overflow-hidden`}
				aria-labelledby="accordion-collapse-heading-1"
			>
				<div className="p-5">
					<p className="mb-2 text-[#667085] text-sm text-left">
						Kobo Kobo is a mobile application designed to lower the entry
						barrier into the real estate market by providing a platform for
						civilians to trade unit shares of properties and equally for real
						estate agents to raise funding for new real estate projects.
					</p>
				</div>
			</div>
			<h2 id="accordion-collapse-heading-2">
				<button
					type="button"
					onClick={handleShow2}
					className="flex items-center justify-between flex-row-reverse gap-4 border-x-0 w-full p-5 font-medium text-left text-[#101323] border border-b-0 border-[#F2F4F7] focus:ring-0 active:ring-0"
					data-accordion-target="#accordion-collapse-body-2"
					aria-expanded="false"
					aria-controls="accordion-collapse-body-2"
				>
					{show1 ? (
						<MdOutlineKeyboardArrowUp />
					) : (
						<MdOutlineKeyboardArrowDown />
					)}{" "}
					<span>Do you keep any logs of my online activity?</span>
				</button>
			</h2>
			<div
				id="accordion-collapse-body-2"
				className={`${
					show2 ? "max-h-40" : "max-h-0"
				} duration-500 transition-all overflow-hidden`}
				aria-labelledby="accordion-collapse-heading-2"
			>
				<div className="p-5">
					<p className="mb-2 text-[#667085] text-sm text-left">
						Kobo Kobo is a mobile application designed to lower the entry
						barrier into the real estate market by providing a platform for
						civilians to trade unit shares of properties and equally for real
						estate agents to raise funding for new real estate projects.
					</p>
				</div>
			</div>
			<h2 id="accordion-collapse-heading-3">
				<button
					type="button"
					onClick={handleShow3}
					className="flex items-center justify-between flex-row-reverse border-x-0 gap-4 w-full p-5 font-medium text-left text-[#101323] border border-[#F2F4F7] focus:ring-0 active:ring-0"
					data-accordion-target="#accordion-collapse-body-3"
					aria-expanded="false"
					aria-controls="accordion-collapse-body-3"
				>
					{show1 ? (
						<MdOutlineKeyboardArrowUp />
					) : (
						<MdOutlineKeyboardArrowDown />
					)}{" "}
					<span>Will kobokobo get me a house?</span>
				</button>
			</h2>
			<div
				id="accordion-collapse-body-3"
				className={`${
					show3 ? "max-h-40" : "max-h-0"
				} duration-500 transition-all overflow-hidden`}
				aria-labelledby="accordion-collapse-heading-3"
			>
				<div className="p-5">
					<p className="mb-2 text-[#667085] text-sm text-left">
						Kobo Kobo is a mobile application designed to lower the entry
						barrier into the real estate market by providing a platform for
						civilians to trade unit shares of properties and equally for real
						estate agents to raise funding for new real estate projects.
					</p>
				</div>
			</div>
			<h2 id="accordion-collapse-heading-3">
				<button
					type="button"
					onClick={handleShow4}
					className="flex items-center justify-between flex-row-reverse border-x-0 gap-4 w-full p-5 font-medium text-left text-[#101323] border border-[#F2F4F7] focus:ring-0 active:ring-0"
					data-accordion-target="#accordion-collapse-body-3"
					aria-expanded="false"
					aria-controls="accordion-collapse-body-3"
				>
					{show1 ? (
						<MdOutlineKeyboardArrowUp />
					) : (
						<MdOutlineKeyboardArrowDown />
					)}{" "}
					<span>Will kobokobo get me a house?</span>
				</button>
			</h2>
			<div
				id="accordion-collapse-body-3"
				className={`${
					show4 ? "max-h-40" : "max-h-0"
				} duration-500 transition-all overflow-hidden`}
				aria-labelledby="accordion-collapse-heading-3"
			>
				<div className="p-5">
					<p className="mb-2 text-[#667085] text-sm text-left">
						Kobo Kobo is a mobile application designed to lower the entry
						barrier into the real estate market by providing a platform for
						civilians to trade unit shares of properties and equally for real
						estate agents to raise funding for new real estate projects.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AccordionComponent;
