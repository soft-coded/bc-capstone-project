// authActions.js

import axios from 'axios';

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/users/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', token: response.data.token });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', error: error.response.data.error });
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post('/users', user);
    // Handle successful registration, if needed
    dispatch({ type: 'REGISTER_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', error: error.response.data.error });
  }
};
