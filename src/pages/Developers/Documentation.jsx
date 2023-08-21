import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
	MdOutlineKeyboardDoubleArrowLeft,
	MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import Sidebar from "../../components/Sidebar";
import DocumentationHero from "../../assets/images/DocumentationHero.png";
import DocIcon from "../../assets/icons/DocIcon.svg";
import Prism from "prismjs";
import "prism-themes/themes/prism-holi-theme.css";

function Documentation() {
	const codeRef1 = useRef(null);
	const codeRef2 = useRef(null);
	const codeRef3 = useRef(null);
	useEffect(() => {
		if (codeRef1.current) {
			Prism.highlightElement(codeRef1.current);
		}
		if (codeRef2.current) {
			Prism.highlightElement(codeRef2.current);
		}
		if (codeRef3.current) {
			Prism.highlightElement(codeRef3.current);
		}
	}, []);
	return (
		<>
			<section
				id="modernizing insurance"
				className="mt-48 md:mt-32 mb-6 md:px-12 xl:px-5 px-5 max-w-screen-xl mx-auto flex space-x-5 justify-between"
			>
				<Sidebar />{" "}
				<div className="">
					<h3 className="text-2xl font-semibold text-[#033401] mb-4">
						Launch API Documentation
					</h3>
					<p className="text-sm leading-7 text-[#667085] mb-8">
						Lörem ipsum dekande deren ovins ponat, båsulig prepreska. Katosamma
						otoktig solig även om <br />
						tinehet. Epikism teralåv, oaktat gärar. Mobil klubb vihosm
						heterorade fast plattfilm eukössa.{" "}
					</p>
					<img src={DocumentationHero} alt="documentation" className="mb-16" />
					<h3 className="text-2xl font-semibold text-[#033401] mb-4">Title</h3>
					<p className="text-sm leading-7 text-[#667085] mb-8">
						Lörem ipsum dekande deren ovins ponat, båsulig prepreska. Katosamma
						otoktig solig även om <br />
						tinehet. Epikism teralåv, oaktat gärar. Mobil klubb vihosm
						heterorade fast plattfilm eukössa. <br />
						Lörem ipsum dekande deren ovins ponat, båsulig prepreska. Katosamma
						otoktig solig även om <br />
						tinehet. Epikism teralåv, oaktat gärar. Mobil klubb vihosm
						heterorade fast plattfilm eukössa.{" "}
					</p>
					<p className="text-sm leading-7 text-[#667085] mb-10">
						Lörem ipsum dekande deren ovins ponat, båsulig prepreska. Katosamma
						otoktig solig även om <br />
						tinehet. Epikism teralåv, oaktat gärar. Mobil klubb vihosm
						heterorade fast plattfilm eukössa.{" "}
					</p>
					<div className="flex space-x-5 items-center mb-4">
						<p className="text-sm font-semibold text-[#101323]">
							ES2015 import
						</p>
						<p className="text-sm font-semibold text-[#101323]">
							<a href="#">Download</a>
						</p>
						<button className="bg-[#5CC758] text-white px-3.5 py-1.5 rounded-3xl font-semibold text-sm">
							link directly
						</button>
					</div>
					<div className="Code flex flex-col mb-4">
						<pre className="flex-1 overflow-auto rounded-3xl">
							<code ref={codeRef1} className={`language-javascript`}>
								{`<script src="https://d3js.org/d3-array.v1.min.js"></script>
<script> var min = d3.min(array); </script>`}
							</code>
						</pre>
					</div>
					<div className="mb-4">
						<h4 className="mb-2 text-base font-semibold">Statistics</h4>
						<p className="text-sm leading-7 text-[#667085]">
							Methods for computing basic summary statistics.
						</p>
					</div>
					<div className="mb-4 flex space-x-[3.75rem]">
						<div className="flex-1">
							<p className="text-sm font-semibold text-[#101323] mb-4">
								d3.min
							</p>
							<p className="text-sm leading-7 text-[#667085]">
								Returns the minimum value in the given array using natural
								order. If the array is empty, returns undefined. An optional
								accessor function may be specified, which is equivalent to
								calling array.map(accessor) before computing the minimum value
							</p>
						</div>
						<div className="pl-4 border border-y-0 border-r-0">
							<p className="text-sm font-semibold text-[#5CC758] mb-3">
								Related methods
							</p>
							<p className="text-sm font-semibold text-[#101323] mb-1">
								d3.scan
							</p>
							<p className="text-sm text-[#667085] mb-3">Array/math</p>
							<p className="text-sm font-semibold text-[#101323] mb-1">
								d3.extent
							</p>
							<p className="text-sm text-[#667085]">Array/statistics</p>
						</div>
					</div>
					<div className="mb-10">
						<h4 className="mb-2 text-base font-semibold">Syntax</h4>
						<div className="Code flex flex-col mb-4">
							<pre className="flex-1 overflow-auto rounded-3xl">
								<code ref={codeRef2} className={`language-javascript`}>
									{`d3.min(array, [, accessor])`}
								</code>
							</pre>
						</div>
					</div>
					<div className="mb-10">
						<h4 className="mb-2 text-base font-semibold">Examples</h4>
						<div className="Code flex flex-col mb-4">
							<pre className="flex-1 overflow-auto rounded-3xl">
								<code ref={codeRef3} className={`language-javascript`}>
									{`d3.min[“20”, “3”] // “20”
d3.min[20, 3] // 3`}
								</code>
							</pre>
						</div>
					</div>
					<div className="mb-[3.25rem]">
						<h3 className="text-2xl font-semibold text-[#033401] mb-4">
							Title
						</h3>
						<p className="text-sm leading-7 text-[#667085] mb-8">
							Lörem ipsum dekande deren ovins ponat, båsulig prepreska.
							Katosamma otoktig solig även om <br />
							tinehet. Epikism teralåv, oaktat gärar. Mobil klubb vihosm
							heterorade fast plattfilm eukössa. <br />
							Lörem ipsum dekande deren ovins ponat, båsulig prepreska.
							Katosamma otoktig solig även om <br />
							tinehet. Epikism teralåv, oaktat gärar. Mobil klubb vihosm
							heterorade fast plattfilm eukössa.{" "}
						</p>
						<p className="text-sm leading-7 text-[#667085] mb-10">
							Lörem ipsum dekande deren ovins ponat, båsulig prepreska.
							Katosamma otoktig solig även om <br />
							tinehet. Epikism teralåv, oaktat gärar. Mobil klubb vihosm
							heterorade fast plattfilm eukössa.{" "}
						</p>
					</div>
					<div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-[9.8125rem]">
						<div className="px-6 py-5 border rounded-lg">
							<img src={DocIcon} alt="doc icon" className="mb-6" />
							<p className="mb-4 font-semibold text-sm text-[#101323]">
								Subtitle
							</p>
							<p className="text-sm text-[#667085]">
								Guldsot spere. Pokenad döda vineln-varnare. Relig backslick.
							</p>
						</div>
						<div className="px-6 py-5 border rounded-lg">
							<img src={DocIcon} alt="doc icon" className="mb-6" />
							<p className="mb-4 font-semibold text-sm text-[#101323]">
								Subtitle
							</p>
							<p className="text-sm text-[#667085]">
								Guldsot spere. Pokenad döda vineln-varnare. Relig backslick.
							</p>
						</div>
						<div className="px-6 py-5 border rounded-lg">
							<img src={DocIcon} alt="doc icon" className="mb-6" />
							<p className="mb-4 font-semibold text-sm text-[#101323]">
								Subtitle
							</p>
							<p className="text-sm text-[#667085]">
								Guldsot spere. Pokenad döda vineln-varnare. Relig backslick.
							</p>
						</div>
						<div className="px-6 py-5 border rounded-lg">
							<img src={DocIcon} alt="doc icon" className="mb-6" />
							<p className="mb-4 font-semibold text-sm text-[#101323]">
								Subtitle
							</p>
							<p className="text-sm text-[#667085]">
								Guldsot spere. Pokenad döda vineln-varnare. Relig backslick.
							</p>
						</div>
					</div>
					<div className="flex items-center justify-between mb-[8rem]">
						<Link to="#">
							<div className="border rounded-lg py-2 px-4">
								<p className="text-sm text-[#667085] mb-2">Previous</p>
								<div className="flex">
									<MdOutlineKeyboardDoubleArrowLeft className="text-[#5CC758]" />{" "}
									<p className="text-sm font-semibold text-[#5CC758] ml-2">
										Unyte Student Protection
									</p>
								</div>
							</div>
						</Link>
						<Link to="#">
							<div className="border rounded-lg py-2 px-4 bg-[#D8FED6] bg-opacity-30">
								<p className="text-sm text-[#667085] mb-2">Next</p>
								<div className="flex">
									<p className="text-sm font-semibold text-[#5CC758] mr-2">
										Health
									</p>
									<MdOutlineKeyboardDoubleArrowRight className="text-[#5CC758]" />
								</div>
							</div>
						</Link>
					</div>
				</div>
				<Sidebar />
			</section>
		</>
	);
}

export default Documentation;
