import React, { useState } from "react";
import Money from "../../assets/register/Money.png";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../../components/navbar/Navbar";
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
	Select,
	MenuItem,
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

const AddAccount = () => {
	const [formData, setFormData] = useState({
		accountHolderName: "",
		accountNo: "",
		balance: "",
		accountType: "",
	});

	const [formErrors, setFormErrors] = useState({
		accountHolderName: "",
		accountNo: "",
		balance: "",
		accountType: "",
	});

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...formErrors };

		// Validation logic for Account Holder Name
		if (formData.accountHolderName.trim() === "") {
			newErrors.accountHolderName = "Account Holder Name is required";
			isValid = false;
		} else {
			newErrors.accountHolderName = "";
		}

		// Validation logic for Account No
		if (formData.accountNo.trim() === "") {
			newErrors.accountNo = "Account No is required";
			isValid = false;
		} else {
			newErrors.accountNo = "";
		}

		// Validation logic for Balance
		if (isNaN(formData.balance) || formData.balance <= 0) {
			newErrors.balance = "Balance must be a positive number";
			isValid = false;
		} else {
			newErrors.balance = "";
		}

		// Validation logic for Account Type
		if (formData.accountType.trim() === "") {
			newErrors.accountType = "Account Type is required";
			isValid = false;
		} else {
			newErrors.accountType = "";
		}

		setFormErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			// Form is valid, you can submit it here
			console.log("Form submitted:", formData);
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
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Container maxWidth="lg">
				<Grid container spacing={0}>
					{/* Left Column */}
					<Grid item xs={12} md={6}>
						<Paper
							elevation={3}
							style={{
								padding: "2rem",
								background: "#A05CDB4D",
								color: "#fff",
								marginTop: "7rem",
								height: "70%",
								borderRadius: "0px 60px 60px 0px",
							}}
						>
							<img
								src={Money}
								alt="Money"
								style={{
									maxWidth: "70%",
									height: "auto",
									width: "auto",
									marginTop: "1rem",
									marginLeft: "3rem",
								}}
							/>
						</Paper>
					</Grid>

					{/* Right Column - Registration Form */}
					<Grid item xs={12} md={6}>
						<Paper
							elevation={0}
							style={{ ...styles.fullHeight, padding: "2rem" }}
						>
							<form onSubmit={handleSubmit}>
								<Typography
									variant="h6"
									gutterBottom
									style={{
										...styles.heading,
										marginTop: "4rem",
										textAlign: "center",
									}}
								>
									Add an account
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									gutterBottom
									style={{ ...styles.subheading, textAlign: "center" }}
								>
									Fill in the details of the account below.
								</Typography>
								<Grid container spacing={2.5}>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label="Account Holder Name"
											variant="outlined"
											name="accountHolderName"
											value={formData.accountHolderName}
											onChange={handleChange}
											required
											style={{ borderRadius: "60px" }}
										/>
										<div style={{ color: "red" }}>
											{formErrors.accountHolderName}
										</div>
									</Grid>

									<Grid item xs={12}>
										<TextField
											fullWidth
											label="Account No"
											variant="outlined"
											name="accountNo"
											value={formData.accountNo}
											onChange={handleChange}
											required
										/>
										<div style={{ color: "red" }}>{formErrors.accountNo}</div>
									</Grid>

									<Grid item xs={12}>
										<TextField
											fullWidth
											label="Balance"
											variant="outlined"
											name="balance"
											type="number"
											value={formData.balance}
											onChange={handleChange}
											required
										/>
										<div style={{ color: "red" }}>{formErrors.balance}</div>
									</Grid>

									<Grid item xs={12}>
										<FormControl
											fullWidth
											variant="outlined"
											required
											style={{ borderRadius: "60px" }}
										>
											<InputLabel htmlFor="accountType">
												Account Type
											</InputLabel>
											<Select
												label="Account Type"
												name="accountType"
												value={formData.accountType}
												onChange={handleChange}
											>
												<MenuItem value="">Select Account Type</MenuItem>
												<MenuItem value="Savings">Savings</MenuItem>
												<MenuItem value="Checking">Checking</MenuItem>
												<MenuItem value="Investment">Investment</MenuItem>
											</Select>
											<FormHelperText style={{ color: "red" }}>
												{formErrors.accountType}
											</FormHelperText>
										</FormControl>
									</Grid>

									<Grid item xs={12}>
										<Button
											type="submit"
											variant="contained"
											color="primary"
											fullWidth
											style={{ marginTop: "1rem" }}
										>
											Add Account
										</Button>
									</Grid>
								</Grid>
								<Typography style={{ fontSize: "13px" }}>
									<Link
										to="/dashboard/accounts"
										style={{ textDecoration: "none" }}
									>
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
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default AddAccount;
