import React, { useContext, useEffect, useState } from "react";
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
	Container,
	FormHelperText,
} from "@mui/material";
import "./Converter.css";
import { styled } from "@mui/material/styles";
import axios from "axios";
import InputAmount from "./InputAmount";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";
import { CurrencyContext } from "../../components/converter-helpers/CurrencyContext";
import useAxios from "../../components/converter-helpers/useAxios";

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
	const {
		fromCurrency,
		setFromCurrency,
		toCurrency,
		setToCurrency,
		firstAmount,
	} = useContext(CurrencyContext);
	const [resultCurrency, setResultCurrency] = useState(0);
	const codeFromCurrency = fromCurrency.split(" ")[1];
	const codeToCurrency = toCurrency.split(" ")[1];

	useEffect(() => {
		if (firstAmount) {
			axios("https://api.freecurrencyapi.com/v1/latest", {
				params: {
					apikey: "FU3euSfJ9SreMvXu3Dvm4RIwigCIuyMJGW6Nhj3h",
					base_currency: codeFromCurrency,
					currencies: codeToCurrency,
				},
			})
				.then((response) =>
					setResultCurrency(response.data.data[codeToCurrency]),
				)
				.catch((error) => console.log(error));
		}
	}, [firstAmount, fromCurrency, toCurrency]);

	const boxStyles = {
		background: "#824EAF",
		marginTop: "2%",
		textAlign: "center",
		color: "white",
		minHeight: "20rem",
		padding: "4rem 2rem",
		boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)",
		background: "#BCA0D5",
		borderRadius: "35px",
		backgroundPosition: "center",
		// position: "relative",
		width: "100%",
		height: "calc(100vh - 100px)",
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
							<FormControl
								variant="outlined"
								fullWidth
								required
								sx={{
									//   background: "white",
									borderRadius: "60px",
									mb: 2,
								}}
							>
								<InputAmount />
							</FormControl>

							<FormControl
								variant="outlined"
								fullWidth
								required
								sx={{
									//   background: "white",
									borderRadius: "60px",
									mb: 2,
								}}
							>
								<SelectCountry
									value={fromCurrency}
									setValue={setFromCurrency}
									label="From"
								/>
							</FormControl>
							<SwitchCurrency />
							<FormControl
								variant="outlined"
								fullWidth
								required
								sx={{
									// background: "white",
									borderRadius: "60px",
									mb: 2,
								}}
							>
								<SelectCountry
									value={toCurrency}
									setValue={setToCurrency}
									label="To"
								/>{" "}
							</FormControl>
							{firstAmount ? (
								<Box sx={{ textAlign: "left", marginTop: "1rem" }}>
									<Typography>
										{firstAmount} {fromCurrency} =
									</Typography>
									<Typography
										variant="h5"
										sx={{ marginTop: "5px", fontWeight: "bold" }}
									>
										{resultCurrency * firstAmount} {toCurrency}
									</Typography>
								</Box>
							) : (
								""
							)}
							{/* <form>
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
									sx={{
										fontWeight: 500,
										mb: 2,
										textAlign: "center",
										marginTop: 1,
										marginBottom: 0,
									}}
								>
									Converted Amount : {result}
								</Typography>
							)} */}
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</WithNavAndFooter>
	);
};
export default Convertor;
