export const postNewPassword = async (uid: string, token: string, new_password: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/users/reset_password_confirm/'
	const params = {
		method: 'POST',
		headers: {
			'Content-type': "application/json"
		},
		body: JSON.stringify({
			"uid": uid,
			"token": token,
			"new_password": new_password
		})
	}
	const request = new Request(url, params)
	const response = await fetch(request)
	// const result = await response.json()
	return {
		ok: response.ok,
		status: response.status,
		// data: result
	}
}