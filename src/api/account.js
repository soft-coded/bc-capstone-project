import { ACCOUNT_SUBPATH, axiosClient } from ".";

export async function addAccount(accountDetails, token) {
	return axiosClient.post(
		ACCOUNT_SUBPATH + "/new",
		{ ...accountDetails },
		{ headers: { Authorization: "Bearer " + token } },
	);
}

export async function getAllUserAccounts(userId, token) {
	return axiosClient.get(ACCOUNT_SUBPATH + "/of-user/" + userId, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
}

export async function depositInAccount(accountId, amount, token) {
	return axiosClient.post(
		ACCOUNT_SUBPATH + "/deposit/" + accountId,
		{ balance: amount },
		{ headers: { Authorization: "Bearer " + token } },
	);
}

// export const updateUserProfile = (id, updatedUser) => ({
// 	type: 'UPDATE_USER_PROFILE',
// 	payload: { id, updatedUser },
//   });
