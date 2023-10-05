import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "authState";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false,
		email: null, // either null or a string that is the logged in user's email
		/* 
      authState should only ever have 3 string values:
      - "fetching" | "loading" | "idle"
      - "fetching" indicates that the app has just loaded and the auth state is being fetched from the localStorage
      - "loading" should be used when the user clicks on the "Log in" or "Sign up" button
      - "idle" should be the final state after all the auth operations have completed
    */
		authState: "fetching", // "fetching" or "loading" or "idle"
		token: null, // either null or the token string
	},
	reducers: {
		login(state, action) {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.authState = "idle";

			// save to localStorage
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
		},

		logout(state) {
			state.isLoggedIn = false;
			state.email = null;
			state.token = null;
			state.authState = "idle";

			// delete from localStorage
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		},
	},
});
