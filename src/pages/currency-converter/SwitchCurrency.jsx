import { Button, Grid } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useContext } from "react";
import { CurrencyContext } from "../../components/converter-helpers/CurrencyContext";

const SwitchCurrency = () => {
	const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
		useContext(CurrencyContext);

	const handleSwitch = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
	};
	return (
		<Grid item xs={12}>
			<Button
				onClick={handleSwitch}
				sx={{
					borderRadius: 1,
					height: "100%",
				}}
			>
				<CompareArrowsIcon
					sx={{
						fontSize: 30,
						transform: "rotate(90deg)",
					}}
				/>
			</Button>
		</Grid>
	);
};

export default SwitchCurrency;
