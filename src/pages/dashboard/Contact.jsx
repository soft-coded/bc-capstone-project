import {
	Grid,
	Typography,
	Button,
	Box,
	TextField,
	FormLabel,
	// Select,
	// MenuItem,
	FormControl,
} from "@mui/material";

function ContactForm() {
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
					flexDirection="column"
					gap={3}
					justifyContent="space-between"
				>
					<Grid
						item
						container
						gap={2}
						flexWrap="nowrap"
						justifyContent="space-between"
					>
						<Grid item width="48%">
							<FormControl fullWidth>
								<FormLabel htmlFor="name" sx={{ marginLeft: 2 }}>
									Name
								</FormLabel>
								<TextField
									id="name"
									placeholder="Suresh Agarwal"
									variant="outlined"
									name="amount"
									// value={formData.password}
									// onChange={handleChange}
								/>
								{/* <div style={{ color: "red" }}>{formErrors.password}</div> */}
							</FormControl>
						</Grid>
						<Grid item width="48%">
							<FormControl fullWidth>
								<FormLabel htmlFor="email" sx={{ marginLeft: 2 }}>
									Email
								</FormLabel>
								<TextField
									id="email"
									placeholder="you@example.com"
									variant="outlined"
									name="email"
									type="email"
									// value={formData.password}
									// onChange={handleChange}
								/>
								{/* <div style={{ color: "red" }}>{formErrors.password}</div> */}
							</FormControl>
						</Grid>
					</Grid>
					<Grid item width="100%">
						<FormControl fullWidth>
							<FormLabel htmlFor="description" sx={{ marginLeft: 2 }}>
								How can we help you?
							</FormLabel>
							<TextField
								id="description"
								placeholder="Describe your problem in 250 words or less."
								variant="outlined"
								name="email"
								type="email"
								rows={7}
								multiline
								sx={{ borderRadius: "0px" }}
								// value={formData.password}
								// onChange={handleChange}
							/>
							{/* <div style={{ color: "red" }}>{formErrors.password}</div> */}
						</FormControl>
					</Grid>
					<Grid item width="100%" display="flex" justifyContent="center">
						<Button
							type="submit"
							variant="contained"
							size="large"
							sx={{ width: "30%" }}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
}

export default function Contact() {
	return (
		<Grid
			container
			paddingLeft={6}
			paddingRight={14}
			gap={3}
			width="100%"
			className="contact-page"
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
						Contact Us
					</Typography>
					<Typography variant="h6" fontWeight={400}>
						For further questions, contact us using our contact form.
					</Typography>
				</Grid>
			</Grid>
			<Grid item height="100%" width="100%">
				<ContactForm />
			</Grid>
		</Grid>
	);
}
