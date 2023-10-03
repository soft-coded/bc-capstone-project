import { Box } from "@mui/material";

import sidebarBg from "../../assets/dashboard/sidebar-bg.png";

const SIDEBAR_DIMENSIONS = {
	width: "353px",
	height: "70vh",
};

export default function DashboardSidebar() {
	return (
		<>
			<Box
				sx={{
					position: "fixed",
					top: 50,
					left: 0,
					background: `url(${sidebarBg})`,
					borderRadius: "0 60px 60px 0",
					...SIDEBAR_DIMENSIONS,
				}}
			>
				Sidebar
			</Box>
			<Box
				className="sidebar-spacer"
				sx={{ ...SIDEBAR_DIMENSIONS, marginBottom: 3 }}
			></Box>
		</>
	);
}
