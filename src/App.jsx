import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import Home from "./pages/Home";
import About from "./pages/Company/About";
import Learn from "./pages/Company/Learn";
import Blog from "./pages/Company/Blog";
import Contact from "./pages/Company/Contact";
import Products from "./pages/Products/Products";
import Industries from "./pages/Industries/Industries";
import Documentation from "./pages/Developers/Documentation";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route path="" element={<Home />} />
				<Route path="company/contact" element={<Contact />} />
				<Route path="company/about" element={<About />} />
				<Route path="company/learn" element={<Learn />} />
				<Route path="company/learn/blog" element={<Blog />} />
				<Route path="products/:productType" element={<Products />} />
				<Route path="industries/:industryType" element={<Industries />} />
				<Route path="developers/documentation" element={<Documentation />} />
				<Route path="policies/privacypolicy" element={<PrivacyPolicy />} />
			</Route>
		</Routes>
	);
}

export default App;
