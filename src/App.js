import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";

import "./App.css";
import Home from "./pages/home/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}

export default App;
