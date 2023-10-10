import { AUTH_SUBPATH, USER_SUBPATH, axiosClient } from ".";
import { updateUserProfile } from "./account";
export async function login(email, password) {
	return axiosClient.post(AUTH_SUBPATH + "/token", {
		email,
		password,
	});
}

export async function signup(userData) {
	return axiosClient.post(USER_SUBPATH + "/register", { ...userData });
}
// export const updateUserProfileAsync = (id, updatedUser) => async (dispatch) => {
// 	try {
// 		const response = axiosClient.put(USER_SUBPATH + { id }, updatedUser);
// 		const updatedUserData = response.data;
// 		dispatch(updateUserProfile(id, updatedUserData));
// 		// Optionally, you can add success/error handling here
// 	} catch (error) {
// 		// Handle API error
// 		console.log("Error updating user");
// 	}
// };
export async function getUserByEmail(email, token) {
	return axiosClient.get(USER_SUBPATH + "/" + email, {
		headers: { Authorization: "Bearer " + token },
	});
}
export async function getUserById(id, token) {
	return axiosClient.get(USER_SUBPATH + "/" + id, {
		headers: { Authorization: "Bearer " + token },
	});
}

export async function updateUser(userDetails, id, token) {
	return axiosClient.put(
		USER_SUBPATH + "/" + id,
		{ id, ...userDetails },
		{ headers: { Authorization: "Bearer " + token } },
	);
}

// export async function updateUser(userDetails, token) {
// 	return axiosClient.put(
// 		USER_SUBPATH + "/update",
// 		{ ...userDetails },
// 		{ headers: { Authorization: "Bearer " + token } },
// 	);
// }