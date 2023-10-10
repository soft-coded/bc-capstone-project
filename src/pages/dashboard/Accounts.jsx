import { useEffect, useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import editIcon from "../../assets/dashboard/edit.svg";
import deleteIcon from "../../assets/dashboard/delete.svg";
import Spinner from "../../components/loading-spinner/Spinner";
import { getAllUserAccounts } from "../../api/account";
import { useSelector } from "react-redux";

function AccountsCard(accountData) {
	return (
		<Grid
			item
			padding={3}
			sx={{ backgroundColor: "#EDD6FA" }}
			borderRadius="30px"
			display="flex"
			flexDirection="column"
			minWidth={{ md: "48%", xs: "100%" }}
			gap={1}
			alignSelf="flex-start"
		>
			<Typography variant="h5" align="right">
				{accountData.holderName.toUpperCase()}
			</Typography>
			<Typography variant="h4" align="right" fontWeight={500}>
				{accountData.accountNumber}
			</Typography>
			<Grid
				container
				gap={7}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Grid item display="flex">
					<Box
						width="50px"
						height="50px"
						sx={{ backgroundColor: "#A45DC7" }}
						borderRadius={60}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<img src={editIcon} alt="Edit account" />
					</Box>
					<Box
						width="50px"
						height="50px"
						sx={{ backgroundColor: "#ED737D" }}
						borderRadius={60}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<img src={deleteIcon} alt="Delete account" />
					</Box>
				</Grid>
				<Grid item>
					<Typography variant="h6" align="right">
						{accountData.balance} {accountData.currency}
					</Typography>
					<Typography variant="body2" align="right">
						{accountData.type.toUpperCase()}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default function Accounts() {
	const [accounts, setAccounts] = useState(null);
	const userId = useSelector((state) => state.auth.userData.userId);
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		getAllUserAccounts(userId, token)
			.then((res) => setAccounts(res.data))
			.catch((err) => {
				console.log(err);
				toast.error(err.message || "Something went wrong");
			});
	}, [userId, token]);

	return (
		<Grid
			container
			paddingLeft={{ md: 6, xs: 2 }}
			paddingRight={{ md: 14, xs: 2 }}
			gap={3}
			width="100%"
			className="accounts-page"
		>
			<Grid
				item
				container
				display="flex"
				alignItems="center"
				justifyContent={{ md: "space-between", xs: "center" }}
				gap={2}
			>
				<Grid item>
					<Typography
						variant="h3"
						fontWeight={600}
						sx={{ textAlign: { xs: "center", md: "initial" } }}
					>
						Accounts
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						sx={{ textAlign: { xs: "center", md: "initial" } }}
					>
						All accounts that you have added appear here.
					</Typography>
				</Grid>
				<Grid item>
					<Link to="/addaccount" style={{ textDecoration: "none" }}>
						<Button variant="contained" size="large">
							+ New account
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid
				item
				container
				display="flex"
				flexWrap="wrap"
				gap={4}
				width="100%"
				minHeight="70%"
			>
				{accounts == null ? (
					<Box
						display="flex"
						height="100%"
						width="100%"
						alignItems="center"
						justifyContent="center"
					>
						<Spinner style={{ filter: "invert(1)" }} />
					</Box>
				) : accounts.length === 0 ? (
					<Box
						display="flex"
						height="100%"
						width="100%"
						justifyContent="center"
					>
						<Typography variant="h6" align="center" color="secondary">
							You have not added any accounts.
						</Typography>
					</Box>
				) : (
					accounts.map((acc) => <AccountsCard {...acc} key={acc.accountId} />)
				)}
			</Grid>
		</Grid>
	);
}
