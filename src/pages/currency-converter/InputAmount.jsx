import { Grid, InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import { CurrencyContext } from "../../components/converter-helpers/CurrencyContext";

const InputAmount = () => {
	const { firstAmount, setFirstAmount } = useContext(CurrencyContext);

	return (
		<Grid item xs={12}>
			<TextField
				value={firstAmount}
				onChange={(e) => setFirstAmount(e.target.value)}
				label="Amount"
				variant="outlined"
				fullWidth
				sx={{ mb: 2, borderRadius: "60px", background: "white" }}
				InputProps={{
					// type: "number",
					// startAdornment: <InputAdornment position="start">$</InputAdornment>,
				}}
			/>
		</Grid>
	);
};

export default InputAmount;
