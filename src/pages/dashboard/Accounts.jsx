import { Grid, Typography } from "@mui/material";

export default function Accounts() {
	return (
		<Grid
			container
			paddingLeft={6}
			paddingRight={14}
			gap={3}
			width="100%"
			marginBottom={3}
		>
			<Grid item>
				<Typography variant="h3" fontWeight={600}>
					Accounts
				</Typography>
				<Typography variant="h6" fontWeight={400}>
					All accounts that you have added appear here.
				</Typography>
			</Grid>
		</Grid>
	);
}
