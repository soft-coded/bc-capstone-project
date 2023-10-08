import { AUTH_SUBPATH, USER_SUBPATH, axiosClient } from ".";

export async function login(email, password) {
	return axiosClient.post(AUTH_SUBPATH + "/token", {
		email,
		password,
	});
}

export async function signup(userData) {
	return axiosClient.post(USER_SUBPATH + "/register", { ...userData });
}
