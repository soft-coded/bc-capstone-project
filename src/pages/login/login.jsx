import React, { useState } from 'react';
import wallet from '../../assets/login/wallet.png';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const styles = {
  fullHeight: {
    height: '100%',
  },
  heading: {
    padding: '0.5rem 0',
    fontSize: '1.5rem',
  },
  subheading: {
    padding: '0.5rem 0',
    fontSize: '1rem',
  },
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // Validation logic for Email
    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = 'Invalid Email';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Validation logic for Password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can submit it here
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has validation errors');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={0}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ ...styles.fullHeight, padding: '2rem', background: '#A05CDB4D', color: '#fff' }}>
            <img src={wallet} alt="Money" style={{ maxWidth: '50%', height: 'auto', width: 'auto', marginTop: '3rem', marginLeft:'6rem'}} />
          </Paper>
        </Grid>

        {/* Right Column - Login Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ ...styles.fullHeight, padding: '2rem' }}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom style={styles.heading}>
                Sign in to &lt;website name&gt;
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom style={styles.subheading}>
                Log in to &lt;website name&gt; to access all features.
              </Typography>
              <Grid container spacing={2.5}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div style={{ color: 'red' }}>{formErrors.email}</div>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div style={{ color: 'red' }}>{formErrors.password}</div>
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                    Sign In
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="body2" style={{ marginTop: '1rem', textAlign: 'center' }}>
                Don’t have an account? No problem! <Link href="#">Click here to create one.</Link>.
              </Typography>
              <Typography variant="body2" style={{ marginTop: '1rem', textAlign: 'center' }}>
                <ArrowBackIcon /> Go back.
              </Typography>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;