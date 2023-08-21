import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import Home from "./pages/Home";
import About from "./pages/Company/About";
import Contact from "./pages/Company/Contact";
import Health from "./pages/Products/Health";
import Fintech from "./pages/Industries/Fintech";
import Documentation from "./pages/Developers/Documentation";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route path="" element={<Home />} />
				<Route path="company/contact" element={<Contact />} />
				<Route path="company/about" element={<About />} />
				<Route path="products/health" element={<Health />} />
				<Route path="industries/fintech" element={<Fintech />} />
				<Route path="developers/documentation" element={<Documentation />} />
			</Route>
		</Routes>
	);
}

export default App;
