import React, { useCallback, useEffect, useState } from "react";
import "./Profile.css";
import { Avatar, Button, TextField, Typography, Grid } from "@mui/material";
import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/auth-slice";
import { getUserByEmail, getUserById, updateUser } from "../../api/auth";

const EditProfile = () => {
	// const email1 = useSelector((state) => state.auth.userData.email1);
	const userId = useSelector((state) => state.auth.userData.userId);
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		getUserById(userId, token)
			.then((res) =>
				setProfileData({
					firstName: res.data.firstName,
					lastName: res.data.lastName,
					email: res.data.email,
					password: res.data.password,
					profilePicture: "",
				}),
			)
			.catch((err) => {
				console.log(err);
				toast.error(err.message || "Something went wrong");
			});
	}, [userId, token]);

	// State to store user profile data
	const [profileData, setProfileData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		profilePicture: "", // Set the initial image URL here
	});
	const [profileErrors, setProfileErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		profilePicture: "",
	});

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...profileErrors };

		// Validation logic for Email
		if (
			!profileData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			newErrors.email = "Invalid Email";
			isValid = false;
		} else {
			newErrors.email = "";
		}

		// Validation logic for Password
		if (profileData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters long";
			isValid = false;
		} else {
			newErrors.password = "";
		}

		setProfileErrors(newErrors);
		return isValid;
	};
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
		if (!validateForm()) return;
		// You can perform API requests here to save the changes
		const details = {
			userId,
			email: profileData.email,
			firstName: profileData.firstName,
			lastName: profileData.lastName,
			password: profileData.password,
		};
		updateUser(details, userId, token)
			.then(() => {
				toast.success("User details updated!");
				// navigate("/dashboard/accounts");
			})
			.catch((err) => toast.error(err.message || "Something went wrong"));

		console.log("Profile data submitted:", profileData);
	};
	// document.body.style = "background: rgb(238, 228, 247);";

	return (
		<WithNavAndFooter>
			<div
				className="profilePaper"
				style={{ padding: "20px", marginTop: "20px" }}
			>
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
							<div style={{ color: "red" }}>{profileErrors.firstName}</div>
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
					<Grid item xs={12} textAlign="center">
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
		</WithNavAndFooter>
	);
};

export default EditProfile;
