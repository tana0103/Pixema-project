const url = 'https://studapi.teachmeskills.by/auth/users/me/'

export const getUserMe = async (accessToken: string) => {
	const params = {
		method: 'GET',
		headers: {
			'Content-type': "application/json",
			Authorization: `Bearer ${accessToken}`
		}
	}
	const request = new Request(url, params)
	const response = await fetch(request)
	const result = await response.json()
	return {
		ok: response.ok,
		status: response.status,
		data: result
	}
}