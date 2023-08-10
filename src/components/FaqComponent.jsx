import AccordionComponent from "./AccordionComponent";

function FaqComponent() {
	return (
		<section
			className="py-16 max-w-screen-xl mx-auto md:px-12 xl:px-5 px-5"
			id="faq"
		>
			<div className="flex flex-col justify-center gap-y-16 items-center text-center">
				<div id="developers-text">
					<h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-[#101323] mb-4">
						Frequently Asked Questions.
					</h2>
					<p className="text-base mb-6 leading-7 text-[#667085]">
						We are answering your most frequent questions. No worries if you
						don’t <br className="hidden md:block" />
						find the exact one. You can find out more by directly contacting our{" "}
						<br className="hidden md:block" />
						support.
					</p>
				</div>
				<div id="accordion" className="md:w-[40rem] w-auto">
					<AccordionComponent />
				</div>
			</div>
		</section>
	);
}

export default FaqComponent;
