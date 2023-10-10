import React, { useState } from "react";
import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import {
	Typography,
	Grid,
	Box,
	Paper,
	TextField,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
} from "@mui/material";

import sendSvg from "../../assets/transferForm/send.svg";

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
		<WithNavAndFooter>
			<Box
				mt={3}
				sx={{
					background:
						"linear-gradient(90deg,rgba(197, 158, 230, 0.9),rgba(237, 115, 125, 0.7))",
					borderRadius: "60px",
					paddingX: 5,
					paddingBottom: 12,
					paddingTop: 5,
				}}
			>
				<Box>
					<Typography
						variant="h2"
						fontWeight={600}
						align="center"
						color="primary.light"
						mb={1}
					>
						Transfer funds
					</Typography>
					<Typography
						variant="h5"
						align="center"
						mb={5}
						color="primary"
						fontWeight={500}
					>
						Send money to any account without worrying about currencies.
					</Typography>
				</Box>
				<Grid container gap={3} alignItems="center" justifyContent="center">
					<Grid
						item
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Paper
							elevation={4}
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
								color="primary.light"
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
									<InputLabel>Account</InputLabel>
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
									<InputLabel>Base currency</InputLabel>
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
							</form>
						</Paper>
					</Grid>
					<Grid
						item
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							":hover": { transform: "scale(1.15)" },
							transition: "transform 0.2s ease-out",
							cursor: "pointer",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: "#C7E7B6",
								borderRadius: "50%",
								width: "130px",
								height: "130px",
							}}
						>
							<img src={sendSvg} alt="Send" style={{ height: "80px" }} />
						</Box>
						<Typography variant="h6" color="white">
							Send
						</Typography>
					</Grid>
					<Grid
						item
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Paper
							elevation={4}
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
								color="secondary.dark"
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
									disabled
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
									<InputLabel>Conversion currency</InputLabel>
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
							</form>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</WithNavAndFooter>
	);
};

export default TransferForm;
