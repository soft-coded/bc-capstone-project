import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import AddAccount from "./pages/addAccount/addaccount";
import "./App.css";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import RegistrationPage from "./pages/register/register";
import LoginPage from "./pages/login/login";
import Aboutus from "./pages/aboutus/aboutus";
import Transfer from "./pages/transfer/transfer";
import TransferForm from "./pages/transferForm/transferForm";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<Profile />} />
			<Route
				path="/dashboard"
				element={<Navigate to="/dashboard/transactions" replace />}
			/>
			<Route path="/dashboard/*" element={<Dashboard />} />
			<Route path="/register" element={<RegistrationPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/addaccount" element={<AddAccount />} />
			<Route path="/aboutus" element={<Aboutus />} />
			<Route path="/transfer" element={<Transfer />} />
			<Route path="/transferform" element={<TransferForm />} />
		</Routes>
	);
}

export default App;
