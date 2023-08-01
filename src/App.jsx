import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout";
//import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route path="" element={<About />} />
			</Route>
		</Routes>
	);
}

export default App;
