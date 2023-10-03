import { Container, Box } from "@mui/material";

import Navbar from "../navbar/Navbar";

export default function WithNavAndFooter({ children, wrapperClass }) {
	return (
		<main className={wrapperClass ?? ""}>
			<Navbar />
			<Box className="nav-spacer" height={80} />
			<Container maxWidth="lg">{children}</Container>
		</main>
	);
}
