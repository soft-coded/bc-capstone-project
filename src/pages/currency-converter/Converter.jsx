import React, { useContext, useEffect, useState } from "react";
import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import { Typography, Grid, Box, Paper, FormControl } from "@mui/material";
import "./Converter.css";
import { styled } from "@mui/material/styles";
import axios from "axios";
import InputAmount from "./InputAmount";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";
import { CurrencyContext } from "../../components/converter-helpers/CurrencyContext";
import useAxios from "../../components/converter-helpers/useAxios";

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
					// altapikey: "fca_live_wD1VmOMxP501n32jPlf3KHbfgvX5jZ3feaTlrQ90", // For Backup
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

	const BOX_DIMENSIONS = {
		width: "100%",
		height: "calc(100vh - 100px)",
		flexGrow: 1,
		display: "flex",
		alignItems: "center",
		borderRadius: "35px 35px 35px 35px",
		boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)",
		backgroundPosition: "center",
		// background: "#824EAF",
		background: "linear-gradient(135deg, #63229B 0%, #D71C2B 100%)",
		zIndex: 1,
	};

	const paperStyles = {
		padding: "5rem",
		background: "rgb(255, 255, 255, 0.5)",
		color: "white",
		textAlign: "center",
		justifyContent: "center",
		borderRadius: "35px",
		backgroundPosition: "center",
		position: "relative",
		marginRight: "2rem",
		marginLeft: "2rem",
		// marginTop: "2rem",
		// marginBottom: "2rem",
		width: "100%",
		maxHeight: "85%",
		display: "inline-block",
	};

	return (
		<WithNavAndFooter>
			<Box
				className="rectangle"
				sx={{
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
							// marginRight: "2rem",
							// marginLeft: "2rem",
						}}
					>
						<div className="heading">
							<Typography
								// variant="h2"
								fontSize={60}
								fontWeight={600}
								lineHeight={1.1}
								color="white"
								marginRight="2rem"
								marginLeft="2rem"
							>
								Convert Currency
							</Typography>
							<Typography
								// variant="h5"
								fontWeight={500}
								color="primary.dark"
								marginTop={1}
								fontSize={24}
								marginRight="2rem"
								marginLeft="2rem"
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
							elevation={4}
							style={{
								...paperStyles,
							}}
						>
							<FormControl
								variant="outlined"
								fullWidth
								required
								sx={{
									borderRadius: "60px",
									mb: 2,
									marginTop: 0,
								}}
							>
								<InputAmount />
							</FormControl>

							<FormControl
								variant="outlined"
								fullWidth
								required
								sx={{
									borderRadius: "60px",
									// mb: 1,
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
									borderRadius: "60px",
									mb: 2,
									marginTop: 2,
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
										variant="h6"
										sx={{ marginTop: "5px", fontWeight: "bold" }}
									>
										{resultCurrency * firstAmount} {toCurrency}
									</Typography>
								</Box>
							) : (
								""
							)}
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</WithNavAndFooter>
	);
};
export default Convertor;
