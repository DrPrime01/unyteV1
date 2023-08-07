import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route path="" element={<Home />} />
				<Route path="contact" element={<Contact />} />
				<Route path="about" element={<About />} />
				<Route path="products/health" element={<Products />} />
			</Route>
		</Routes>
	);
}

export default App;
