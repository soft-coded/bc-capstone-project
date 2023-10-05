import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Profile from "./pages/profile/Profile";
import AddAccount from "./pages/addAccount/addaccount";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import RegistrationPage from "./pages/register/register";
import LoginPage from "./pages/login/login";
import Aboutus from "./pages/aboutus/aboutus";
import Transfer from "./pages/transfer/transfer";
import TransferForm from "./pages/transferForm/transferForm";
import Spinner from "./components/loading-spinner/Spinner";
import { authActions } from "./store/slices/auth-slice";

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
		<Box
			height="100vh"
			width="100vw"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Spinner style={{ transform: "translate(-50%, -50%)" }} />
		</Box>
	) : (
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
