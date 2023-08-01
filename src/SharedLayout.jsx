import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CtaComponent from "./components/CtaComponent";

function SharedLayout() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Outlet />
			<CtaComponent />
			<Footer />
		</div>
	);
}

export default SharedLayout;
