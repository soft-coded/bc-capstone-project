import React, { useState } from "react";
import ResponsiveAppBar from "../../components/navbar/Navbar";
import "./transferForm.css";
import {
	Typography,
	Grid,
	Box,
	Button,
	Paper,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormHelperText,
} from "@mui/material";
import send from "../../assets/transferForm/send.png";

const TransferForm = () => {
	const [senderFormData, setSenderFormData] = useState({
		senderAmount: "",
		senderAccountType: "",
		senderCurrency: "",
	});

	const [receiverFormData, setReceiverFormData] = useState({
		receiverAmount: "",
		receiverAccountType: "",
		receiverCurrency: "",
	});

	const [senderErrors, setSenderErrors] = useState({
		senderAmount: "",
		senderAccountType: "",
		senderCurrency: "",
	});

	const [receiverErrors, setReceiverErrors] = useState({
		receiverAmount: "",
		receiverAccountType: "",
		receiverCurrency: "",
	});

	const handleSenderSubmit = (e) => {
		e.preventDefault();
		let newSenderErrors = {};
		if (!senderFormData.senderAmount) {
			newSenderErrors.senderAmount = "Amount is required";
		}
		if (!senderFormData.senderAccountType) {
			newSenderErrors.senderAccountType = "Account type is required";
		}
		if (!senderFormData.senderCurrency) {
			newSenderErrors.senderCurrency = "Currency is required";
		}
		if (Object.keys(newSenderErrors).length > 0) {
			setSenderErrors(newSenderErrors);
		} else {
			setSenderErrors({});
		}
	};

	const handleReceiverSubmit = (e) => {
		e.preventDefault();
		let newReceiverErrors = {};
		if (!receiverFormData.receiverAmount) {
			newReceiverErrors.receiverAmount = "Amount is required";
		}
		if (!receiverFormData.receiverAccountType) {
			newReceiverErrors.receiverAccountType = "Account type is required";
		}
		if (!receiverFormData.receiverCurrency) {
			newReceiverErrors.receiverCurrency = "Currency is required";
		}
		if (Object.keys(newReceiverErrors).length > 0) {
			setReceiverErrors(newReceiverErrors);
		} else {
			setReceiverErrors({});
		}
	};

	const handleChange = (e, formType) => {
		const { name, value } = e.target;
		if (formType === "sender") {
			setSenderFormData({ ...senderFormData, [name]: value });
		} else if (formType === "receiver") {
			setReceiverFormData({ ...receiverFormData, [name]: value });
		}
	};

	return (
		<div>
			<ResponsiveAppBar />
			<Box>
				<div className="box1">
					<div className="rectangle1">
						<Grid container>
							<Grid
								item
								xs={12}
								md={6}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginTop: "3rem",
								}}
							>
								<Paper
									elevation={3}
									style={{
										padding: "3rem",
										background: "#C59EE6",
										color: "#333", // Text color
										borderRadius: "60px",
									}}
								>
									<Typography
										variant="h5"
										sx={{ fontWeight: 600, mb: 2, textAlign: "center" }}
									>
										Sender
									</Typography>
									<form onSubmit={handleSenderSubmit}>
										<TextField
											fullWidth
											label="Amount"
											name="senderAmount"
											value={senderFormData.senderAmount}
											onChange={(e) => handleChange(e, "sender")}
											error={!!senderErrors.senderAmount}
											helperText={senderErrors.senderAmount}
											sx={{ mb: 2, background: "white", borderRadius: "60px" }}
										/>

										<FormControl
											fullWidth
											error={!!senderErrors.senderAccountType}
											sx={{ mb: 2, background: "white", borderRadius: "60px" }}
										>
											<InputLabel>Account Type</InputLabel>
											<Select
												name="senderAccountType"
												value={senderFormData.senderAccountType}
												onChange={(e) => handleChange(e, "sender")}
											>
												<MenuItem value="savings">Savings</MenuItem>
												<MenuItem value="checking">Checking</MenuItem>
											</Select>
											{senderErrors.senderAccountType && (
												<FormHelperText>
													{senderErrors.senderAccountType}
												</FormHelperText>
											)}
										</FormControl>

										<FormControl
											fullWidth
											error={!!senderErrors.senderCurrency}
											sx={{ mb: 2, background: "white", borderRadius: "60px" }}
										>
											<InputLabel>Currency</InputLabel>
											<Select
												name="senderCurrency"
												value={senderFormData.senderCurrency}
												onChange={(e) => handleChange(e, "sender")}
											>
												<MenuItem value="usd">USD</MenuItem>
												<MenuItem value="eur">EUR</MenuItem>
											</Select>
											{senderErrors.senderCurrency && (
												<FormHelperText>
													{senderErrors.senderCurrency}
												</FormHelperText>
											)}
										</FormControl>
									</form>
								</Paper>
								{/* <img src={send} alt="send" width="10%" height="20%" /> */}
							</Grid>

							<Grid
								item
								xs={12}
								md={6}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginTop: "3rem",
								}}
							>
								<Paper
									elevation={3}
									style={{
										padding: "3rem",
										background: "#ED737D", // Set background color to white
										color: "#333", // Text color
										borderRadius: "60px",
									}}
								>
									<Typography
										variant="h5"
										sx={{ fontWeight: 600, mb: 2, textAlign: "center" }}
									>
										Receiver
									</Typography>
									<form onSubmit={handleReceiverSubmit}>
										<TextField
											fullWidth
											label="Amount"
											name="receiverAmount"
											value={receiverFormData.receiverAmount}
											onChange={(e) => handleChange(e, "receiver")}
											error={!!receiverErrors.receiverAmount}
											helperText={receiverErrors.receiverAmount}
											sx={{ mb: 2, background: "white", borderRadius: "60px" }}
										/>

										<FormControl
											fullWidth
											error={!!receiverErrors.receiverAccountType}
											sx={{ mb: 2, background: "white", borderRadius: "60px" }}
										>
											<InputLabel>Account Type</InputLabel>
											<Select
												name="receiverAccountType"
												value={receiverFormData.receiverAccountType}
												onChange={(e) => handleChange(e, "receiver")}
											>
												<MenuItem value="savings">Savings</MenuItem>
												<MenuItem value="checking">Checking</MenuItem>
											</Select>
											{receiverErrors.receiverAccountType && (
												<FormHelperText>
													{receiverErrors.receiverAccountType}
												</FormHelperText>
											)}
										</FormControl>

										<FormControl
											fullWidth
											error={!!receiverErrors.receiverCurrency}
											sx={{ mb: 2, background: "white", borderRadius: "60px" }}
										>
											<InputLabel>Currency</InputLabel>
											<Select
												name="receiverCurrency"
												value={receiverFormData.receiverCurrency}
												onChange={(e) => handleChange(e, "receiver")}
											>
												<MenuItem value="usd">USD</MenuItem>
												<MenuItem value="eur">EUR</MenuItem>
											</Select>
											{receiverErrors.receiverCurrency && (
												<FormHelperText>
													{receiverErrors.receiverCurrency}
												</FormHelperText>
											)}
										</FormControl>
									</form>
								</Paper>
							</Grid>
						</Grid>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default TransferForm;
