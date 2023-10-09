import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Profile from "./pages/profile/Profile";
import AddAccount from "./pages/addAccount/addaccount";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import RegistrationPage from "./pages/register/register";
import LoginPage from "./pages/login/login";
import Aboutus from "./pages/aboutus/aboutus";
import TransferForm from "./pages/transferForm/transferForm";
import { authActions } from "./store/slices/auth-slice";
import Converter from "./pages/currency-converter/Converter";
import FullscreenSpinner from "./components/fullscreen-spinner/FullscreenSpinner";
function App() {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth.authState);
	const { pathname } = useLocation();

	// check if there is any authentication data present in localStorage
	useEffect(() => {
		dispatch(authActions.loginOnLoad());
	}, [dispatch]);

	// reset the scroll position every time the url changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return authState === "fetching" ? (
		<FullscreenSpinner />
	) : (
		<>
			<ToastContainer />
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
				<Route path="dashboard/accounts/addaccount" element={<AddAccount />} />
				<Route path="/aboutus" element={<Aboutus />} />
				<Route path="/transferform" element={<TransferForm />} />
				<Route path="/converter" element={<Converter />} />
			</Routes>
		</>
	);
}

export default App;
