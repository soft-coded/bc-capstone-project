import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  TextareaAutosize,
  Button,
  TextField,
} from "@mui/material";
import Rating from "@mui/material/Rating"; // Import Rating component
import image from "../../assets/dashboard/sidebar-bg.png";
import "./feedback.css";
import WithNavAndFooter from "../with-nav-and-footer/WithNavAndFooter";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <WithNavAndFooter>
      <header>
        <div
          className="page-header-contact-us min-vh-85"
          style={{ marginBottom: "1.5rem" }}
        >
          <div className="d-none d-md-block">
            <img
              className="position-absolute fixed-top ms-auto w-50 h-100 z-index-0"
              src={image}
              alt="image"
              sx={{
                display: {
                  xs: "none",
                  md: "none",
                },
                borderRadius: {
                  xs: "0",
                  md: "section",
                },
              }}
            />
          </div>
          <Container style={{ zIndex: "1" }}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={7}
                className="d-flex justify-content-center flex-column"
              >
                <Card
                  className="d-flex blur justify-content-center p-4  "
                  sx={{
                    padding: {
                      xs: "3",
                      sm: "6",
                    },
                    margin: {
                      xs: "0",
                      sm: "5",
                    },
                  }}
                >
                  <div className="text-center">
                    <Typography
                      variant="h3"
                      className="text-gradient text-primary contact-us-heading"
                    >
                      Reviews and Ratings
                    </Typography>
                    <Typography style={{'margin-top':'1rem'}}paragraph>
                      For further questions, including partnership opportunities,
                      please email multicurrency@gmail or contact using our
                      contact form.
                    </Typography>
                    <form id="contact-form" method="post" autoComplete="off">
                      <div className="card-body pb-2">
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Typography
                              style={{ fontWeight: "700" }}
                              variant="body2"
                            >
                              Full Name
                            </Typography>
                            <TextField
                              className="mt-1 mb-0"
                              fullWidth
                              variant="outlined"
                              placeholder="Full Name"
                              aria-label="Full Name"
                            />
                          </Grid>
                          <Grid item xs={12} md={6} className="ps-md-2">
                            <Typography
                              style={{ fontWeight: "700" }}
                              variant="body2"
                            >
                              Email
                            </Typography>
                            <TextField
                              className="mt-1 mb-0"
                              fullWidth
                              variant="outlined"
                              placeholder="hello@creative-tim.com"
                              type="email"
                            />
                          </Grid>
                        </Grid>
                        <div className="form-group mb-0 mt-md-0 mt-4">
                          <Typography
                            style={{ fontWeight: "700" }}
                            variant="body2"
                          >
                            Add a Review!
                          </Typography>
                          <TextareaAutosize
                            className="mt-2 mb-0"
                            name="message"
                            style={{ width: "100%" }}
                            fullWidth
                            minRows={6}
                            id="message"
                            placeholder="Describe your problem in at least 250 characters"
                          />
                        </div>
                        <div className="form-group mb-0 mt-4">
                          <Typography
                            style={{ fontWeight: "700" }}
                            variant="body2"
                          >
                            Rate Our Service
                          </Typography>
                          <Rating
                            name="rating"
                            value={rating}
                            onChange={handleRatingChange}
                            size="large"
                          />
                        </div>
                        <Grid container>
                          <Grid item xs={12} className="text-center">
                            <Button
                              variant="contained"
                              color="primary"
                              className="mt-3 mb-0"
                            >
                              Send Feedback
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </form>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </header>
    </WithNavAndFooter>
  );
};

export default Feedback;