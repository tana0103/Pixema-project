export const postNewPassword = async ( token: string, current_password: string, new_password: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/users/set_password/'
	const params = {
		method: 'POST',
		headers: {
			'Content-type': "application/json",
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
		new_password: new_password,
		current_password: current_password
		})
   }
	const request = new Request(url, params)
	const response = await fetch(request)
	return {
		ok: response.ok,
		status: response.status,
	}
}