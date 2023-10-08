import { TRANSFER_SUBPATH, axiosClient } from ".";

export async function getAllUserTransfers(userId) {
	return axiosClient.get(TRANSFER_SUBPATH + "/of-user/" + userId);
}

export async function newTransfer(transferData) {
	return axiosClient.post(TRANSFER_SUBPATH + "/new", {
		...transferData,
	});
}
