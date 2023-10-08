import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "authState";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false,
		userId: null, // either null or a string that is the logged in user's userId
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
			state.userId = action.payload.userId;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.authState = "idle";

			// save to localStorage
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
		},

		logout(state) {
			state.isLoggedIn = false;
			state.userId = null;
			state.token = null;
			state.authState = "idle";

			// delete from localStorage
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		},

		// run this only in App.js and NOWHERE else
		loginOnLoad(state) {
			// check if the data is present in localStorage
			const authData = localStorage.getItem(LOCAL_STORAGE_KEY);
			// return if the data is not present
			if (authData == null) {
				state.authState = "idle";
				return;
			}
			// else, set all the data properly
			const parsedData = JSON.parse(authData);
			state.userId = parsedData.userId;
			state.token = parsedData.token;
			state.isLoggedIn = true;
			state.authState = "idle";
		},
	},
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
