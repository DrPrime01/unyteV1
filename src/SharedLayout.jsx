import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CtaComponent from "./components/CtaComponent";
import NavigationBanner from "./components/NavigationBanner";
import { productLinks } from "./Data/products";
import { industryLinks } from "./Data/industries";

function SharedLayout() {
	const location = useLocation();
	const isDocumentationPage = location.pathname === "/developers/documentation";
	const isProductsPage = location.pathname.includes("products");
	const isIndustriesPage = location.pathname.includes("industries");
	return (
		<div className="min-h-screen">
			<Navbar />
			{(isProductsPage || isIndustriesPage) &&
				(isProductsPage ? (
					<NavigationBanner bannerType="All Products" links={productLinks} />
				) : (
					<NavigationBanner bannerType="All Industries" links={industryLinks} />
				))}
			<Outlet />
			{!isDocumentationPage && <CtaComponent />}
			{!isDocumentationPage && <Footer />}
		</div>
	);
}

export default SharedLayout;
