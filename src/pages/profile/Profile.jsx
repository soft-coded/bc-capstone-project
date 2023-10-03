// src/components/EditProfile.js
import React, { useState } from "react";
import "./Profile.css";
// import ResponsiveAppBar from "../../components/navbar/Navbar";
import {
	Avatar,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography,
	Grid,
	Paper,
} from "@mui/material";
import { color } from "@mui/system";

const EditProfile = () => {
	// State to store user profile data
	const [profileData, setProfileData] = useState({
		firstName: "John",
		lastName: "Doe",
		email: "johndoe@example.com",
		password: "",
		profilePicture: "", // You can set the initial image URL here
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProfileData({
			...profileData,
			[name]: value,
		});
	};

	const handleFileUpload = (e) => {
		// Handle file upload and set the profile picture
		// You can use FileReader to preview the image if needed
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Submit the updated profile data to the server or update context
		// You can perform API requests here to save the changes
		console.log("Profile data submitted:", profileData);
	};

	return (
		<Container component="main" className="profileMain">
			{/* <CssBaseline /> */}
			<div
				style={{ padding: "20px", marginTop: "20px" }}
				className="profilePaper"
			>
				{/* <Typography variant="h4" align="center">
					Edit Profile
				</Typography> */}
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} align="center">
							<Avatar
								alt="Profile Picture"
								src={profileData.profilePicture}
								sx={{ width: 200, height: 200 }}
							/>
							<input
								type="file"
								accept="image/*"
								name="profilePicture"
								onChange={handleFileUpload}
							/>
						</Grid>
						<Grid item xs={12} align="center">
							<Typography variant="h4" align="center">
								John Doe
							</Typography>
						</Grid>
						<Grid item xs={12} align="center">
							<Typography variant="h5" align="center">
								You can edit your profile here!
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="First Name"
								name="firstName"
								value={profileData.firstName}
								onChange={handleInputChange}
								required
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Last Name"
								name="lastName"
								value={profileData.lastName}
								onChange={handleInputChange}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Email Address"
								name="email"
								value={profileData.email}
								onChange={handleInputChange}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								type="password"
								label="Password"
								name="password"
								value={profileData.password}
								onChange={handleInputChange}
							/>
						</Grid>
					</Grid>
                    <Grid item xs={12} textAlign='center'>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						// size="medium"
						style={{ marginTop: "20px" }}
						className="submit-btn"
					>
						Save Changes
					</Button>
                    </Grid>
				</form>
			</div>
		</Container>
	);
};

export default EditProfile;
