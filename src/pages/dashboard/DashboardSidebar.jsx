import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import sidebarBg from "../../assets/dashboard/sidebar-bg.png";
import transactionsIcon from "../../assets/dashboard/transactions.svg";
import accountsIcon from "../../assets/dashboard/accounts.svg";
import depositIcon from "../../assets/dashboard/deposit.svg";
import contactIcon from "../../assets/dashboard/contact.svg";

export const SIDEBAR_DIMENSIONS = {
	minWidth: "350px",
	width: "350px",
	height: "83vh",
};

const links = [
	{
		label: "Transactions",
		icon: transactionsIcon,
		// to: "/dashboard/transactions",
		to: "/dashboard",
		height: "27px",
	},
	{
		label: "Accounts",
		icon: accountsIcon,
		to: "/dashboard/accounts",
		height: "24px",
	},
	{
		label: "Deposit",
		icon: depositIcon,
		to: "/dashboard/deposit",
		height: "28px",
	},
	{
		label: "Contact Us",
		icon: contactIcon,
		to: "/dashboard/contact",
		height: "28px",
	},
];

function SidebarLink({ label, icon, to, height }) {
	return (
		<Box
			component={NavLink}
			to={to}
			display="flex"
			alignItems="center"
			paddingY={1.5}
			paddingX={2}
			width="max-content"
			borderRadius="30px"
			sx={{
				textDecoration: "none",
				"&:hover": { background: "rgba(195, 149, 228, 0.5)" },
				"&.active": { background: "rgb(195, 149, 228)" },
			}}
		>
			<Box width={34} height={height} marginRight={1}>
				<img src={icon} alt={label} />
			</Box>
			<Typography variant="h6" color="#fff">
				{label}
			</Typography>
		</Box>
	);
}

export default function DashboardSidebar() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					// position: "fixed",
					// top: 80,
					// left: 0,
					background: `url(${sidebarBg})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
					borderRadius: "0 60px 60px 0",
					zIndex: 1,
					marginBottom: 3,
					...SIDEBAR_DIMENSIONS,
				}}
				className="dashboard-sidebar"
			>
				<Box
					sx={{
						background: "rgba(165, 97, 214, 0.8)",
						width: "100%",
						paddingY: 3,
						paddingX: 4,
						borderRadius: "0 45px 45px 0",
						backdropFilter: "blur(4px)",
					}}
				>
					<Grid container direction="column" gap={0.75}>
						<Grid item>
							<Typography
								variant="h4"
								fontWeight={600}
								marginLeft={1.5}
								marginBottom={0.5}
								color="#fff"
							>
								Dashboard
							</Typography>
						</Grid>
						{links.map((link, i) => (
							<Grid item key={i}>
								<SidebarLink {...link} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
			{/* <Box
				className="sidebar-spacer"
				sx={{
					...SIDEBAR_DIMENSIONS,
					marginBottom: 3,
					position: "relative",
					left: -20,
				}}
			></Box> */}
		</>
	);
}
