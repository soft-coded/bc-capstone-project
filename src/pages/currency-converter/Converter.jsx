import React, { useState } from "react";
import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
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
import "./Convertor.css";
import { styled } from "@mui/material/styles";

const BOX_DIMENSIONS = {
	width: "100%",
	height: "calc(100vh - 100px)",
	// display: "flex",
};

const Line1 = styled("div")({
	border: `1px solid rgba(231, 231, 238, 1)`,
	width: `100%`,
	height: `0px`,
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	align: "center",
});

const Convertor = () => {
	const [amount, setAmount] = useState(1);
	const [fromCurrency, setFromCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("EUR");
	const [result, setResult] = useState(null);

	const currencies = ["USD", "GBP", "INR", "EUR", "JPY"]; // Add more currencies as needed
	const convertCurrency = () => {
		// Use a currency conversion API here to get the conversion rate
		// For simplicity, I'm assuming a fixed conversion rate.
		const conversionRate = {
			"USD-EUR": 0.85,
			"USD-GBP": 0.75,
			"USD-INR": 73.74,
			"EUR-USD": 1.18,
			"GBP-USD": 1.34,
			"INR-USD": 0.014,
			"EUR-GBP": 0.89,
			"GBP-EUR": 1.12,
			"INR-EUR": 0.011,
			// Add more conversion rates here
		};

		const key = `${fromCurrency}-${toCurrency}`;
		if (conversionRate[key]) {
			setResult((amount * conversionRate[key]).toFixed(2));
		} else {
			setResult("Invalid conversion");
		}
	};
	return (
		<WithNavAndFooter>
			<Box
				className="rectangle"
				sx={{
					// flexGrow: 1,
					display: "flex",
					// alignItems: "center",
					borderRadius: "35px 35px 35px 35px",
					boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)",
					backgroundPosition: "center",
					background: "#824EAF",
					zIndex: 1,
					...BOX_DIMENSIONS,
				}}
			>
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
						<div className="heading">
							<Typography
								// variant="h2"
								fontSize={60}
								fontWeight={600}
								lineHeight={1.1}
								color="white"
							>
								Convert Currency
							</Typography>
							<Typography
								variant="h5"
								fontWeight={400}
								color="primary.dark"
								marginTop={1}
								// fontSize={29}
							>
								Forex conversion at your fingertips!
							</Typography>
						</div>
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
								padding: "5rem",
								background: "#BCA0D5",
								color: "white",
								borderRadius: "35px",
							}}
						>
							<form>
								<TextField
									fullWidth
									variant="outlined"
									name="amount"
									label="Amount"
									type="number"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									required
									sx={{ mb: 2, background: "white", borderRadius: "60px" }}
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
									<InputLabel>From Currency</InputLabel>
									<Select
										value={fromCurrency}
										label="From Currency"
										onChange={(e) => setFromCurrency(e.target.value)}
									>
										{currencies.map((currency) => (
											<MenuItem key={currency} value={currency}>
												{currency}
											</MenuItem>
										))}
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
									<InputLabel>To Currency</InputLabel>
									<Select
										value={toCurrency}
										fullWidth
										label="To Currency"
										onChange={(e) => setToCurrency(e.target.value)}
									>
										{currencies.map((currency) => (
											<MenuItem key={currency} value={currency}>
												{currency}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<Line1> </Line1>
								<div className="cnvrt-btn">
									<Button
										variant="contained"
										onClick={convertCurrency}
										justifyContent="center"
										color="secondary"
										fullWidth
									>
										<Typography variant="p" fontWeight={500}>
											Convert
										</Typography>
									</Button>
								</div>
							</form>
							{result !== null && (
								<Typography
									sx={{ fontWeight: 500, mb: 2, textAlign: "center", marginTop: 1, marginBottom:0}}
								>
									Converted Amount : {result}
								</Typography>
							)}
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</WithNavAndFooter>
	);
};
export default Convertor;
