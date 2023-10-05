import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import { Typography, Grid, Box, Button } from "@mui/material";
import "./Home.css";
import CashnCoins from "../../assets/home/CashnCoins.svg";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";

const BOX_DIMENSIONS = {
	width: "100%",
	height: "75vh",
};

export default function Home() {
	return (
		<WithNavAndFooter>
			<Box
				className="rectangle"
				sx={{
					display: "flex",
					alignItems: "center",
					borderRadius: "35px 35px 200px 35px",
					boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)",
					backgroundPosition: "center",
					top: 80,
					marginLeft: 0,
					marginRight: 0,
					background: "linear-gradient(135deg, #401664 0%, #BC78EC 100%)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					zIndex: 1,
					...BOX_DIMENSIONS,
				}}
			>
				<Grid container direction="column">
					<Grid
						item
						marginLeft={5}
						marginRight={30}
						marginBottom={0}
						marginTop={0}
					>
						<Typography
							variant="h1"
							fontWeight={500}
							lineHeight={1.1}
							color="white"
						>
							Your one stop Solution to all your forex troubles
						</Typography>
					</Grid>
					<Grid
						item
						marginLeft={5}
						marginRight={40}
						marginBottom={0}
						marginTop={1}
					>
						<Typography variant="h5" fontWeight={500} color="primary.dark">
							Where your financial world comes together!
						</Typography>
						<Button
							type="submit"
							variant="contained"
							color="secondary"
							sx={{
								padding: "10px 50px",
								mt: "1.5rem",
								marginTop: 10,
								alignItems: "center", // Center the text and icon vertically
							}}
						>
							<TollOutlinedIcon /> {/* icon */}
							<Typography variant="p" marginLeft={1}>
								Let's Go!
							</Typography>
						</Button>
					</Grid>
					<Grid
						item
						sx={{
							align: "right",
							marginRight: 0,
							marginTop: -10,
							marginBottom: 0,
						}}
					>
						<img
							src={CashnCoins}
							alt="money"
							align="right"
							width={300}
							height="auto"
						/>
					</Grid>
				</Grid>
			</Box>
		</WithNavAndFooter>
	);
}
