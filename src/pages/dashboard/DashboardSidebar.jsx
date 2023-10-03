import { Box } from "@mui/material";

import sidebarBg from "../../assets/dashboard/sidebar-bg.png";

export default function DashboardSidebar() {
	return (
		<Box
			sx={{
				position: "fixed",
				top: 100,
				left: 0,
				width: "353px",
				background: `url(${sidebarBg})`,
				height: "70vh",
				borderRadius: "0 60px 60px 0",
			}}
		>
			Sidebar
		</Box>
	);
}
