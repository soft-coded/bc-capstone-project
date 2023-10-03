import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#401664",
			light: "#63229B",
			dark: "#2D1047",
			200: "#A05CDB",
			800: "#180826",
		},
		secondary: {
			main: "#D71C2B",
			light: "#E84F5B",
			dark: "#A21520",
			200: "#ED737D",
			800: "#710F17",
		},
		background: {
			default: "#FFFFFF",
		},
		text: {
			primary: "#000000",
		},
	},
	shape: {
		borderRadius: 9999, // very large border radius to give the rounded look we want
	},
	typography: {
		fontFamily: '"Jost", sans-serif',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		button: {
			textTransform: "none",
		},
	},
});

export default responsiveFontSizes(theme);
