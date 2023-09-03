import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CtaComponent from "./components/CtaComponent";
import NavigationBanner from "./components/NavigationBanner";

function SharedLayout() {
	const location = useLocation();
	const isDocumentationPage = location.pathname === "/developers/documentation";
	return (
		<div className="min-h-screen">
			<Navbar />
			<NavigationBanner />
			<Outlet />
			{!isDocumentationPage && <CtaComponent />}
			{!isDocumentationPage && <Footer />}
		</div>
	);
}

export default SharedLayout;
