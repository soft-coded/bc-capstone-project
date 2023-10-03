import { Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile';

import "./App.css";
import Home from "./pages/home/Home";

function App() {
	return (
		// <div>
		// 	<Routes>
		// 		<Route path="/" element={<></>} />
		// 	</Routes>
		// 	<Profile />
		// </div>

		<Routes>
			<Route path="/" element={<Home />} />
			<Profile />

		</Routes>
	);
}

export default App;
