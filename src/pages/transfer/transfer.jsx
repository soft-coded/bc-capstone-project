import React from "react";
import "./transfer.css";
import { Typography, Grid, Box, Button } from "@mui/material";
import exchange from "../../assets/transfer/exchange.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Transfer = () => {
	return (
		<Box marginTop={7}>
			<div className="box">
				<div className="rectangle">
					<Grid container>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginTop: "7rem",
							}}
						>
							<img src={exchange} alt="money" width="50%" height="auto" />
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
								marginTop: "9rem",
							}}
						>
							<Typography
								fontWeight={600}
								color="white"
								fontSize={50}
								mb={0.5}
								lineHeight={1.1}
							>
								Hassle-free transfers, within seconds.
							</Typography>
							<Typography color="white" variant="h5" mt={1} lineHeight={1}>
								At no additional cost. That's right.
							</Typography>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								sx={{
									padding: "10px 50px",
									mt: "1.5rem",
									display: "flex",
									alignItems: "center", // Center the text and icon vertically
								}}
							>
								Continue
								<KeyboardArrowDownIcon /> {/* Add the downward arrow icon */}
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		</Box>
	);
};

export default Transfer;
