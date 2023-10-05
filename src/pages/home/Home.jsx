import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import { Typography, Grid, Box, Button } from "@mui/material";
import "./Home.css";
import CashnCoins from "../../assets/home/CashnCoins.png";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";

const BOX_DIMENSIONS = {
	width: "100%",
	height: "calc(100vh - 100px)",
};

export default function Home() {
	return (
		<WithNavAndFooter>
			<Box
				className="rectangle"
				sx={{
					display: "flex",
					padding: 6,
					borderRadius: "35px 35px 200px 35px",
					boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)",
					background: "linear-gradient(135deg, #401664 0%, #BC78EC 100%)",
					backgroundSize: "cover",
					...BOX_DIMENSIONS,
				}}
			>
				<Grid
					container
					flexWrap="nowrap"
					gap={3}
					sx={{
						flexDirection: { sm: "row", xs: "column" },
						alignItems: { xs: "center", sm: "initial" },
					}}
				>
					<Grid
						item
						alignSelf="center"
						sx={{
							display: { xs: "flex", md: "initial" },
							flexDirection: { xs: "column", md: "initial" },
							gap: { xs: 2, md: "initial" },
						}}
					>
						<Typography
							sx={{
								typography: { lg: "h1", md: "h2", xs: "h1" },
								fontWeight: { lg: 600, md: 600, xs: 600 },
								textAlign: { lg: "initial", md: "initial", xs: "center" },
							}}
							color="white"
						>
							One stop shop for all your forex troubles
						</Typography>
						<Button
							size="large"
							variant="contained"
							startIcon={<TollOutlinedIcon />}
							sx={{ marginTop: 3, marginBottom: { xs: 10 } }}
						>
							<Typography variant="h5" fontWeight={500}>
								Let's start
							</Typography>
						</Button>
					</Grid>
					<Grid
						item
						alignSelf={{ xs: "flex-start", md: "flex-end" }}
						sx={{
							height: { xs: "200px", md: "250px" },
							// alignSelf: ,
						}}
					>
						<img src={CashnCoins} alt="Cash and coins" />
					</Grid>
				</Grid>
			</Box>
		</WithNavAndFooter>
	);
}
