import Database from "../assets/icons/Database.svg";
import CodeblockIcon from "../assets/icons/CodeblockIcon.svg";

export const industries = {
	banks: {
		name: "banks",
		header: "Empowering Banks with Smart Insurance",
		desc: "Discover how Unyte Africa's innovative insurance strategies empower banks to drive profitability, protect against risks, and adapt to changing market dynamics.",
		benefits: [
			{
				icon: Database,
				header: "Recurring revenue",
				benefit:
					"Partnering with us means you'll enjoy a steady flow of revenue through recurring insurance premiums, offering stability, particularly during economic uncertainty.",
			},
			{
				icon: CodeblockIcon,
				header: "Customized offerings",
				benefit:
					"We provide tailor-made insurance solutions catering to diverse customer requirements, spanning personal, commercial, and corporate needs.",
			},
			{
				icon: Database,
				header: "Regulatory compliance",
				benefit:
					"Our insurance products can serve as a valuable tool for banks in mitigating regulatory risks and ensuring their adherence to established compliance standards.",
			},
		],
	},
	logistics: {
		name: "logistics",
		header: "Efficiency meets security",
		desc: "Unyte Africa collaborates with logistics companies to provide comprehensive insurance coverage. We protect your shipments, vehicles, and operations, ensuring smooth deliveries in an unpredictable world.",
		benefits: [
			{
				icon: Database,
				header: "Risk mitigation",
				benefit:
					"We provide comprehensive cargo insurance, reducing the financial impact of losses during transit, theft, or damage to goods.",
			},
			{
				icon: CodeblockIcon,
				header: "Efficiency improvement",
				benefit:
					"With our insurance solutions that address logistics challenges, partnering with us enhances the efficiency of supply chains, ensuring that goods reach their destinations reliably and on time",
			},
			{
				icon: Database,
				header: "Customization",
				benefit:
					"We recognize the diversity within logistics operations. Our ability to provide individually tailored insurance solutions strengthens our relationships with each logistics partner, ensuring their distinct needs are met",
			},
		],
	},
	ecommerce: {
		name: "e-commerce",
		header: "Your partner in Ecommerce success",
		desc: "Explore insurance solutions designed to meet the dynamic needs of e-commerce. Our expertise ensures your online business is resilient in the face of evolving challenges.",
		benefits: [
			{
				icon: Database,
				header: "Cybersecurity Coverage",
				benefit:
					"In response to the escalating worldwide trend of online transactions, we provide cyber insurance designed to safeguard e-commerce businesses from data breaches and online fraud.",
			},
			{
				icon: CodeblockIcon,
				header: "Business continuity",
				benefit:
					"Our Insurance solutions for supply chain disruptions and inventory losses ensure e-commerce companies can maintain business continuity, even in unforeseen circumstances.",
			},
			{
				icon: Database,
				header: "Enhanced customer trust",
				benefit:
					"Customers value the security of their transactions. Partnering with us helps e-commerce businesses instill confidence and trust in their customers, leading to higher conversion rates and loyalty.",
			},
		],
	},
	education: {
		name: "education",
		header: "Education Excellence with Unyte Africa",
		desc: "Unyte Africa supports educational institutions by providing comprehensive insurance coverage. We safeguard your campus, assets, and students' futures.",
		benefits: [
			{
				icon: Database,
				header: "Property coverage",
				benefit:
					"Educational institutions, with their vast physical assets and complex liability worries, find their perfect insurance match with our tailored solutions. We're here to protect your property and manage your liability with precision.",
			},
			{
				icon: CodeblockIcon,
				header: "Student welfare",
				benefit:
					"We demonstrate our commitment to student welfare by offering insurance solutions for students' health and safety, including accident and medical coverage.",
			},
			{
				icon: Database,
				header: "Long-term security",
				benefit:
					"Partnering with us is for the long term ensuring schools have a consistent and reliable partner to protect their assets and manage risks over time, providing peace of mind and financial stability.",
			},
		],
	},
};

export const industryLinks = [
	{
		path: "/industries/banks",
		label: "Banks",
	},
	{
		path: "/industries/logistics",
		label: "Logistic Companies",
	},
	{
		path: "/industries/ecommerce",
		label: "Ecommerce",
	},
	{
		path: "/industries/education",
		label: "Education",
	},
];
