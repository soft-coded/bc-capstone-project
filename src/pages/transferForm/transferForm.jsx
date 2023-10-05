import React, { useState } from "react";
import ResponsiveAppBar from "../../components/navbar/Navbar";
import "./transferForm.css";
import {
	Typography,
	Grid,
	Box,
	Paper,
	TextField,
	Button,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
} from "@mui/material";

const TransferForm = () => {
	const [senderFormData, setSenderFormData] = useState({
		amount: "",
		senderAccount: "",
		senderCurrency: "",
	});

	const [receiverFormData, setReceiverFormData] = useState({
		convertedAmount: "",
		receiverAccount: "",
		receiverCurrency: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Implement your form submission logic here
		console.log("Sender Form Data:", senderFormData);
		console.log("Receiver Form Data:", receiverFormData);
	};

	const handleSenderFormChange = (e) => {
		const { name, value } = e.target;
		setSenderFormData({
			...senderFormData,
			[name]: value,
		});
	};

	const handleReceiverFormChange = (e) => {
		const { name, value } = e.target;
		setReceiverFormData({
			...receiverFormData,
			[name]: value,
		});
	};

	return (
		<div>
			<ResponsiveAppBar />
			<Box>
				<div className="box1">
					<div className="rectangle1">
						<Grid container spacing={2}>
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
										padding: "2.5rem",
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
									<form onSubmit={handleSubmit}>
										<TextField
											name="amount"
											label="Amount"
											variant="outlined"
											fullWidth
											type="number"
											InputProps={{ inputProps: { min: 0 } }}
											required
											onChange={handleSenderFormChange}
											value={senderFormData.amount}
											sx={{
												background: "white",
												borderRadius: "60px",
												mb: 2,
											}}
										/>
										<FormControl
											variant="outlined"
											fullWidth
											required
											sx={{
												background: "white",
												borderRadius: "60px",
												mb: 2,
											}}
										>
											<InputLabel>Account (Select type)</InputLabel>
											<Select
												name="senderAccount"
												label="Account (Select type)"
												onChange={handleSenderFormChange}
												value={senderFormData.senderAccount}
											>
												<MenuItem value="option1">Option 1</MenuItem>
												<MenuItem value="option2">Option 2</MenuItem>
											</Select>
										</FormControl>
										<FormControl
											variant="outlined"
											fullWidth
											required
											sx={{
												background: "white",
												borderRadius: "60px",
												mb: 2,
											}}
										>
											<InputLabel>
												Currency (Base currency select type)
											</InputLabel>
											<Select
												name="senderCurrency"
												label="Currency (Base currency select type)"
												onChange={handleSenderFormChange}
												value={senderFormData.senderCurrency}
											>
												<MenuItem value="currency1">Currency 1</MenuItem>
												<MenuItem value="currency2">Currency 2</MenuItem>
											</Select>
										</FormControl>
										<div style={{ textAlign: "center" }}>
											<Button
												type="submit"
												variant="contained"
												color="primary"
												sx={{
													padding: "5px 15px",
												}}
											>
												Pay Now
											</Button>
										</div>
									</form>
								</Paper>
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
										padding: "2.5rem",
										background: "#ED737D",
										color: "#333",
										borderRadius: "60px",
									}}
								>
									<Typography
										variant="h5"
										sx={{ fontWeight: 600, mb: 2, textAlign: "center" }}
									>
										Receiver
									</Typography>
									<form onSubmit={handleSubmit}>
										<TextField
											name="convertedAmount"
											label="Converted Amount"
											variant="outlined"
											fullWidth
											type="number"
											InputProps={{ inputProps: { min: 0 } }}
											required
											onChange={handleReceiverFormChange}
											value={receiverFormData.convertedAmount}
											sx={{
												background: "white",
												borderRadius: "60px",
												mb: 2,
											}}
										/>
										<FormControl
											variant="outlined"
											fullWidth
											required
											sx={{
												background: "white",
												borderRadius: "60px",
												mb: 2,
											}}
										>
											<InputLabel>Account (Select type)</InputLabel>
											<Select
												name="receiverAccount"
												label="Account (Select type)"
												onChange={handleReceiverFormChange}
												value={receiverFormData.receiverAccount}
											>
												<MenuItem value="option1">Option 1</MenuItem>
												<MenuItem value="option2">Option 2</MenuItem>
											</Select>
										</FormControl>
										<FormControl
											variant="outlined"
											fullWidth
											required
											sx={{
												background: "white",
												borderRadius: "60px",
												mb: 2,
											}}
										>
											<InputLabel>Currency (Currency select type)</InputLabel>
											<Select
												name="receiverCurrency"
												label="Currency (Base currency select type)"
												onChange={handleReceiverFormChange}
												value={receiverFormData.receiverCurrency}
											>
												<MenuItem value="currency1">Currency 1</MenuItem>
												<MenuItem value="currency2">Currency 2</MenuItem>
											</Select>
										</FormControl>
										<div style={{ textAlign: "center" }}>
											<Button
												type="submit"
												variant="contained"
												color="primary"
												sx={{
													padding: "5px 15px",
												}}
											>
												Reset
											</Button>
										</div>
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
