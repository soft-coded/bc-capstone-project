import { Box, Grid, Typography, Container } from "@mui/material";

import harmonyImg from "../../assets/home/harmony.png";
import explorerImg from "../../assets/home/explorer.png";
import streamlinedImg from "../../assets/home/streamlined.png";

function WCUCard() {}

export default function WhyChooseUs() {
	return (
		<Box className="why-choose-us" marginTop={8}>
			<Container maxWidth="lg">
				<Grid className="section-container" container>
					<Grid className="header-container" item container gap={2}>
						<Grid item width="100%">
							<Typography
								variant="h3"
								align="center"
								color="primary.light"
								fontWeight={600}
							>
								Why choose us?
							</Typography>
						</Grid>
						<Grid item width="100%">
							<Typography variant="h5" align="center" color="primary">
								We are here to revolutionizing the way you manage multi-currency
								transfers.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
