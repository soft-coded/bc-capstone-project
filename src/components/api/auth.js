import { AUTH_SUBPATH, axiosClient } from ".";

export async function login(email, password) {
	return axiosClient.post(AUTH_SUBPATH + "/token", {
		email,
		password,
	});
}
