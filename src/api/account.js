import { ACCOUNT_SUBPATH, axiosClient } from ".";

export async function addAccount(accountDetails) {
	return axiosClient.post(ACCOUNT_SUBPATH + "/new", { ...accountDetails });
}

export async function getAllUserAccounts(userId, token) {
	return axiosClient.get(ACCOUNT_SUBPATH + "/of-user/" + userId, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
}

// export const updateUserProfile = (id, updatedUser) => ({
// 	type: 'UPDATE_USER_PROFILE',
// 	payload: { id, updatedUser },
//   });