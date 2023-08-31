import { useState, useEffect, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";

import LeadwayAssuranceLogo from "../assets/icons/LeadwayAssuranceLogo.svg";
import HeirsLifeLogo from "../assets/icons/HeirsLifeLogo.svg";
import AxaMansardLogo from "../assets/icons/AxaMansardLogo.svg";

import "./stackedcards.css";

function StackedCards() {
	const cardContents = [
		{
			imgSrc: AxaMansardLogo,
			headline:
				"Unyte Africa, AXA Mansard Partner to Expand Access to Innovative and Affordable Insurance Products Across Africa",
			description:
				"Unyte Africa, a leading InsurTech company in Africa, is pleased to announce its partnership with AXA Mansard, a member of the AXA Group, a global leader in insurance...",
			buttonText: "Learn more",
			link: "https://techcabal.com/2023/05/23/unyte-africa-axa-mansard-partner-to-expand-access-to-innovative-and-affordable-insurance-products-across-africa/",
		},
		{
			imgSrc: HeirsLifeLogo,
			headline:
				"Unyte Africa, Heirs Life in pact to incorporate insurance products into everyday businesses",
			description:
				"Unyte Africa, an innovative InsurTech company, has announced a partnership with Heirs Life Assurance, one of the insurance companies in Africa, in order to...",
			buttonText: "Learn more",
			link: "https://businessday.ng/news/article/unyte-africa-heirs-life-in-pact-to-incorporate-insurance-products-into-everyday-businesses/",
		},
		{
			imgSrc: LeadwayAssuranceLogo,
			headline: "Leadway, Unyte Africa heighten drive for digital insurance",
			description:
				"Aimed towards revolutionising the insurance industry in Africa through innovative digital solutions, Unyte Africa, an Insurtech company that connects millions of Africans with various sectors via APIs, and Leadway Assurance...",
			buttonText: "Learn more",
			link: "https://guardian.ng/news/leadway-unyte-africa-heighten-drive-for-digital-insurance/",
		},
	];
	const [cards, setCards] = useState(cardContents);
	const [isAnimating, setIsAnimating] = useState(false);
	const cardRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isAnimating) {
				setIsAnimating(true);
			}
		}, 1500);

		return () => clearInterval(interval);
	}, [isAnimating]);

	useEffect(() => {
		if (isAnimating && cardRef.current) {
			const currentCard = cardRef.current;

			const onAnimationEnd = () => {
				let firstCard = cards[0];
				setCards((prev) => [...prev.slice(1), firstCard]); // Move the first card to the end
				setIsAnimating(false);
			};

			currentCard.addEventListener("animationend", onAnimationEnd);

			return () => {
				currentCard.removeEventListener("animationend", onAnimationEnd);
			};
		}
	}, [isAnimating, cards]);

	return (
		<div id="stacked-card" className="stack">
			{cards.map((cardData, idx) => (
				<div
					key={idx}
					className={`card ${
						idx === cards.length - 1 && isAnimating ? "animating" : ""
					} bg-[#F2F4F7]`}
					style={{
						animation:
							idx === cards.length - 1 && isAnimating
								? "swap 700ms forwards"
								: "",
					}}
					ref={idx === cards.length - 1 ? cardRef : null}
				>
					<img src={cardData.imgSrc} alt="Logo" className="h-6 mb-4" />
					<div className="bg-white p-5 text-center rounded-t-3xl border pb-0">
						<h4 className="text-xl font-semibold mb-6">{cardData.headline}</h4>
						<p className="text-base mb-4 md:leading-7 text-[#667085]">
							{cardData.description}
						</p>
						<div className="flex items-center justify-center pb-3">
							<a
								href={cardData.link}
								target="blank"
								className="text-[#101323] group bg-transparent border border-[#D0D5DD] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-6 py-3 text-center mr-3 md:mr-0 flex items-center gap-x-2"
							>
								<span>{cardData.buttonText}</span>
								<BsArrowUpRight className="transform transition-transform origin-bottom group-hover:scale-125" />
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default StackedCards;
