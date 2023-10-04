import { Grid, Typography } from "@mui/material";

export default function Deposit() {
	return (
		<Grid
			container
			paddingLeft={6}
			paddingRight={14}
			gap={3}
			width="100%"
			marginBottom={3}
			className="deposit-page"
		>
			<Grid item>
				<Typography variant="h3" fontWeight={600}>
					Deposit
				</Typography>
				<Typography variant="h6" fontWeight={400}>
					Add money to the accounts that you have added here.
				</Typography>
			</Grid>
		</Grid>
	);
}
