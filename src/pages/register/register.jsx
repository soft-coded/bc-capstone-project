import React, { useState } from "react";
import Money from "../../assets/register/Money.png";
import { signUp } from "../../api/user";
import { toast } from "react-toastify";

import {
	Container,
	Grid,
	Paper,
	Typography,
	TextField,
	Button,
	FormControl,
	InputLabel,
	FormHelperText,
	Link,
	Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const styles = {
	fullHeight: {
		height: "100%",
		width: "100%",
		marginLeft: "0px",
	},
	heading: {
		padding: "0.5rem 0",
		fontSize: "1.5rem",
	},
	subheading: {
		fontSize: "1rem",
	},
};

const RegistrationPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [formErrors, setFormErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...formErrors };

		// Validation logic for First Name
		if (formData.firstName.trim() === "") {
			newErrors.firstName = "First Name is required";
			isValid = false;
		} else {
			newErrors.firstName = "";
		}

		// Validation logic for Last Name
		if (formData.lastName.trim() === "") {
			newErrors.lastName = "Last Name is required";
			isValid = false;
		} else {
			newErrors.lastName = "";
		}

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

		// Validation logic for Confirm Password
		if (formData.confirmPassword !== formData.password) {
			newErrors.confirmPassword = "Passwords do not match";
			isValid = false;
		} else {
			newErrors.confirmPassword = "";
		}

		setFormErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			// Form is valid, you can submit it here
			console.log("Form submitted:", formData);
			signUp(formData)
				.then((resp) => {
					console.log(resp);
					console.log("success log");
					toast.success("User Registered Successfully!!");
					setFormData({
						firstName: "",
						lastName: "",
						email: "",
						password: "",
						confirmPassword: "",
					});
				})
				.catch((error) => {
					console.log(error);
					console.log("Error Log");
				});
		} else {
			console.log("Form has validation errors");
		}
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
						style={{
							...styles.fullHeight,
							padding: "2rem",
							background: "#A05CDB4D",
							color: "#fff",
							borderRadius: "0px",
						}}
					>
						<img
							src={Money}
							alt="Money"
							style={{
								maxWidth: "90%",
								height: "auto",
								width: "auto",
								marginTop: "1rem",
							}}
						/>
					</Paper>
				</Grid>

				{/* Right Column - Registration Form */}
				<Grid item xs={12} md={6}>
					<Paper
						elevation={3}
						style={{
							...styles.fullHeight,
							padding: "2rem",
							borderRadius: "0px",
						}}
					>
						<form onSubmit={handleSubmit}>
							<Typography
								variant="h6"
								gutterBottom
								style={{
									...styles.heading,
									marginTop: "1rem",
									textAlign: "center",
								}}
							>
								Create a &lt;website name&gt; account
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								gutterBottom
								style={{ ...styles.subheading, textAlign: "center" }}
							>
								An account lets you access all of &lt;website name&gt;.
							</Typography>
							<Grid container spacing={2.5}>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label="First Name"
										variant="outlined"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										required
										style={{ borderRadius: "60px" }}
									/>
									<div style={{ color: "red" }}>{formErrors.firstName}</div>
								</Grid>

								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label="Last Name"
										variant="outlined"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										required
									/>
									<div style={{ color: "red" }}>{formErrors.lastName}</div>
								</Grid>

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
									<TextField
										fullWidth
										label="Confirm Password"
										variant="outlined"
										name="confirmPassword"
										type="password"
										value={formData.confirmPassword}
										onChange={handleChange}
										required
									/>
									<div style={{ color: "red" }}>
										{formErrors.confirmPassword}
									</div>
								</Grid>

								<Grid item xs={12}>
									<Button
										type="submit"
										variant="contained"
										color="primary"
										fullWidth
										style={{ marginTop: "1rem" }}
									>
										Register
									</Button>
								</Grid>
							</Grid>

							<Typography
								variant="body2"
								style={{ marginTop: "1rem", textAlign: "center" }}
							>
								Already have an account?{" "}
								<Link href="/login">Click here to log in</Link>.
							</Typography>
						</form>
						<Typography style={{ fontSize: "13px" }}>
							<Link href="/" style={{ textDecoration: "none" }}>
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
						<br />
						<br />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default RegistrationPage;
