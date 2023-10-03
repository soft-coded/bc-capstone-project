import { Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile';

import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<></>} />
			</Routes>
			<Profile />
		</div>

	);
}

export default App;
