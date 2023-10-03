import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material";

import logo from "../../assets/navbar/logo.svg";

const pages = ["Home", "Converter", "About Us", "Contact Us"];

function ResponsiveAppBar() {
	const theme = useTheme();
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				background: "rgba(0,0,0,0)",
				color: theme.palette.text.primary,
				boxShadow: "none",
				top: 10,
			}}
		>
			<Container
				maxWidth="lg"
				sx={{
					backdropFilter: "blur(5px)",
					borderRadius: theme.shape.borderRadius,
					background: "rgba(255,255,255,0.5)",
				}}
			>
				<Toolbar disableGutters>
					<Box sx={{ height: 50, display: { xs: "none", md: "flex" } }}>
						<img src={logo} alt="logo" />
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							height: 40,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
						}}
					>
						<img src={logo} alt="logo" />
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							gap: 1,
							marginLeft: 1,
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box
						sx={{ display: { md: "flex", xs: "block" }, flexGrow: 0, gap: 1 }}
					>
						<Button
							variant="outlined"
							sx={{ display: { xs: "none", md: "block" } }}
						>
							Log in
						</Button>
						<Button variant="contained">Sign up</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default ResponsiveAppBar;
