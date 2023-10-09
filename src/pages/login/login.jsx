import React, { useState } from "react";
import wallet from "../../assets/login/wallet.png";
import { Link, useNavigate } from "react-router-dom";
import {
	Container,
	Grid,
	Paper,
	Typography,
	TextField,
	Button,
	Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { login } from "../../api/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/auth-slice";

const styles = {
	fullHeight: {
		height: "100%",
	},
	heading: {
		padding: "0.5rem 0",
		fontSize: "1.5rem",
	},
	subheading: {
		fontSize: "1rem",
	},
};

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authState = useSelector((state) => state.auth.authState);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [formErrors, setFormErrors] = useState({
		email: "",
		password: "",
	});

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...formErrors };

		// Validation logic for Email
		if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
			newErrors.email = "Invalid Email";
			isValid = false;
		} else {
			newErrors.email = "";
		}

		// Validation logic for Password
		if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters long";
			isValid = false;
		} else {
			newErrors.password = "";
		}

		setFormErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(authActions.setLoadingState());
		if (!validateForm()) return;

		login(formData.email, formData.password)
			.then((res) => {
				toast.success("Logged in successfully!");
				console.log(res);
				// send the data to redux for state management
				dispatch(
					authActions.login({
						token: res.data.token,
						userData: {
							userId: res.data.userId,
							email: res.data.email,
							firstName: res.data.firstName,
							lastName: res.data.lastName,
						},
					}),
				);
				// navigate to homepage after a successful login
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
				dispatch(authActions.setIdleState());
				toast.error(err.message || "Something went wrong");
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<Container maxWidth="lg">
			<Grid container spacing={0}>
				{/* Left Column */}
				<Grid item xs={12} md={6}>
					<Paper
						elevation={3}
						sx={{
							...styles.fullHeight,
							padding: "2rem",
							background: "#A05CDB4D",
							color: "#fff",
							borderRadius: "0px",
							boxShadow: "none",
						}}
					>
						<img
							src={wallet}
							alt="Money"
							style={{
								maxWidth: "60%",
								height: "auto",
								width: "auto",
								marginTop: "7rem",
								marginLeft: "6rem",
							}}
						/>
					</Paper>
				</Grid>

				{/* Right Column - Login Form */}
				<Grid item xs={12} md={6}>
					<Paper
						elevation={3}
						sx={{
							...styles.fullHeight,
							padding: "2rem",
							borderRadius: "0px",
							boxShadow: "none",
						}}
					>
						<form
							onSubmit={handleSubmit}
							style={{ height: "auto", width: "auto", marginTop: "7rem" }}
						>
							<Typography
								variant="h6"
								gutterBottom
								style={{
									...styles.heading,
									marginTop: "1rem",
									textAlign: "center",
								}}
							>
								Sign in to &lt;website name&gt;
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								gutterBottom
								style={{ ...styles.subheading, textAlign: "center" }}
							>
								Log in to &lt;website name&gt; to access all features.
							</Typography>
							<Grid container spacing={2.5}>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Email"
										variant="outlined"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
									<div style={{ color: "red" }}>{formErrors.email}</div>
								</Grid>

								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Password"
										variant="outlined"
										name="password"
										type="password"
										value={formData.password}
										onChange={handleChange}
										required
									/>
									<div style={{ color: "red" }}>{formErrors.password}</div>
								</Grid>

								<Grid item xs={12}>
									<Button
										type="submit"
										variant="contained"
										color="primary"
										fullWidth
										style={{ marginTop: "1rem" }}
										disabled={authState === "loading"}
									>
										{authState === "loading" ? "Logging in..." : "Log in"}
									</Button>
								</Grid>
							</Grid>
							<Typography
								variant="body2"
								style={{ marginTop: "1rem", textAlign: "center" }}
							>
								Don’t have an account? No problem!{" "}
								<Link to="/register">Click here to create one.</Link>
							</Typography>
							<Typography style={{ fontSize: "13px" }}>
								<Link to="/" style={{ textDecoration: "none" }}>
									<Box
										display="flex"
										alignItems="center"
										justifyContent="center"
										padding="5px 50px"
										marginTop="0.8rem"
										textAlign="center"
										background="#F5F5F5"
									>
										<ArrowBackIcon style={{ marginLeft: "5px" }} />
										Go Back
									</Box>
								</Link>
							</Typography>
						</form>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default LoginPage;
