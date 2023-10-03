import { Box } from "@mui/material";

import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import DashboardSidebar from "./DashboardSidebar";

export default function Dashboard() {
	return (
		<WithNavAndFooter useContainer={false}>
			<Box display="flex">
				<DashboardSidebar />
				<Box>Dashboard</Box>
			</Box>
		</WithNavAndFooter>
	);
}
