import {
	Grid,
	Typography,
	Button,
	Box,
	TextField,
	FormLabel,
	Select,
	MenuItem,
	FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
function DepositForm() {
	return (
		<Box
			width="100%"
			sx={{ backgroundColor: "#EDD6FA" }}
			padding={3}
			borderRadius="30px"
		>
			<form style={{ width: "100%" }}>
				<Grid
					container
					display="flex"
					flexWrap="nowrap"
					alignItems="center"
					gap={7}
					justifyContent="space-between"
				>
					<Grid
						item
						container
						display="flex"
						flexDirection="column"
						gap={2}
						width="50%"
					>
						<Grid item>
							<FormControl fullWidth>
								<FormLabel htmlFor="account" sx={{ marginLeft: 2 }}>
									Account
								</FormLabel>
								<Select
									fullWidth
									id="account"
									name="account"
									sx={{ backgroundColor: "#fff" }}
								>
									<MenuItem>1234</MenuItem>
									<MenuItem>5678</MenuItem>
									<MenuItem>9012</MenuItem>
								</Select>
								{/* <div style={{ color: "red" }}>{formErrors.email}</div> */}
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl fullWidth>
								<FormLabel htmlFor="amount" sx={{ marginLeft: 2 }}>
									Amount
								</FormLabel>
								<TextField
									id="amount"
									placeholder="100000"
									variant="outlined"
									name="amount"
									// value={formData.password}
									// onChange={handleChange}
								/>
								{/* <div style={{ color: "red" }}>{formErrors.password}</div> */}
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl fullWidth>
								<FormLabel htmlFor="currency" sx={{ marginLeft: 2 }}>
									Currency
								</FormLabel>
								<Select
									fullWidth
									id="currency"
									name="currency"
									sx={{ backgroundColor: "#fff" }}
								>
									<MenuItem>INR</MenuItem>
									<MenuItem>EUR</MenuItem>
									<MenuItem>USD</MenuItem>
								</Select>
								{/* <div style={{ color: "red" }}>{formErrors.email}</div> */}
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl fullWidth>
								<FormLabel htmlFor="remark" sx={{ marginLeft: 2 }}>
									Remark
								</FormLabel>
								<TextField
									id="remark"
									placeholder="Anything you want to add"
									variant="outlined"
									name="amount"
									// value={formData.password}
									// onChange={handleChange}
								/>
								{/* <div style={{ color: "red" }}>{formErrors.password}</div> */}
							</FormControl>
						</Grid>
						{/* <Grid item>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							style={{ marginTop: "1rem" }}
						>
							Sign In
						</Button>
					</Grid> */}
					</Grid>
					<Grid
						item
						container
						display="flex"
						flexDirection="column"
						width="50%"
						alignItems="center"
						gap={2}
					>
						<Button variant="contained" size="large" sx={{ width: "75%" }}>
							Deposit
						</Button>
						<Typography variant="h6">or</Typography>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							sx={{ width: "75%" }}
						>
							Withdraw
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
}

export default function Deposit() {
	return (
		<Grid
			container
			paddingLeft={6}
			paddingRight={14}
			gap={3}
			width="100%"
			marginBottom={3}
			className="deposit-page"
		>
			<Grid
				item
				container
				display="flex"
				alignItems="center"
				justifyContent="space-between"
			>
				<Grid item>
					<Typography variant="h3" fontWeight={600}>
						Deposit
					</Typography>
					<Typography variant="h6" fontWeight={400}>
						Add money to the accounts that you have added here.
					</Typography>
				</Grid>
				<Grid item>
					<Link
						to="/dashboard/accounts/addaccount"
						style={{ textDecoration: "none" }}
					>
						<Button variant="contained" size="large">
							+ New account
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid item height="100%" width="100%">
				<DepositForm />
			</Grid>
		</Grid>
	);
}
