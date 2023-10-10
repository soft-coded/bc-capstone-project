import { React, createContext, useState } from "react";
import ResponsiveAppBar from "../../components/navbar/Navbar";
import { Box } from "@mui/material";

export const RealTableChartContext = createContext();
const RealTableChart = ({ children }) => {
	const [fromCurrency, setFromCurrency] = useState("🇺🇸 USD - United States");
	const [toCurrency, setToCurrency] = useState("🇦🇺 AUD - Australia");
	const [firstAmount, setFirstAmount] = useState("");

	const value = {
		fromCurrency,
		setFromCurrency,
		toCurrency,
		setToCurrency,
		firstAmount,
		setFirstAmount,
	};
	return (
		<Box>
			<ResponsiveAppBar />
			<RealTableChartContext.Provider value={value}>
				{children}
			</RealTableChartContext.Provider>
		</Box>
	);
};

export default RealTableChart;
