import { Grid } from "@mui/material";

import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import DashboardSidebar from "./DashboardSidebar";
import Transactions from "./Transactions";
import "./dashboard.css";

export default function Dashboard() {
	return (
		<WithNavAndFooter useContainer={false}>
			<Grid display="flex">
				<DashboardSidebar />
				<Transactions />
			</Grid>
		</WithNavAndFooter>
	);
}
