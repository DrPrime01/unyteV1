import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import Home from "./pages/Home";

function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
