import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, invert }) {
	let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	if (invert) isLoggedIn = !isLoggedIn;

	return isLoggedIn ? children : <Navigate to={invert ? "/" : "/login"} />;
}
