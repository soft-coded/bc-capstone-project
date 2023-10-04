import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import { Typography, Grid, Box } from "@mui/material";
import "./Home.css";
import money from "../../assets/home/money.svg";

const BOX_DIMENSIONS = {
	width: "100%",
	height: "75vh",
};

export default function Home() {
	return (
		<WithNavAndFooter>
			<Box
				className="Rectangle11"
				sx={{
					display: "flex",
					alignItems: "center",
					borderRadius: "45px 45px 200px 45px",
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
					<Grid item>
						<Typography
							variant="h1"
							fontWeight={500}
							marginLeft={5}
							marginRight={30}
							marginBottom={0}
							marginTop={0}
							color="white"
						>
							Your one stop Solution to all your forex troubles
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							variant="h5"
							fontWeight={500}
							marginLeft={5}
							marginRight={40}
							marginTop={0}
							color="#2D1047"
						>
							Where your financial world comes together!
						</Typography>
					</Grid>
					<Grid
						item
						sx={{
							align: "right",
							marginRight: 10,
							marginTop: 10,
						}}
					>
						<img
							src={money}
							alt="money"
							align="right"
							width={220}
							height={220}
						/>
					</Grid>
				</Grid>
			</Box>
		</WithNavAndFooter>
	);
}
