export const getMyPosts = async (token: string) => {
	const url = 'https://studapi.teachmeskills.by/blog/posts/my_posts?limit=100'
	const params = {
		method: 'GET',
		headers: {
			'Content-type': "application/json",
			Authorization: `Bearer ${token}`
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

export const fetchRefreshToken = async (refreshToken: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/jwt/refresh/'
	const params = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			"refresh": refreshToken
		})
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

export const createNewMyPost = async (token: string, formData: FormData) => {
	const url = 'https://studapi.teachmeskills.by/blog/posts/'
	const params = {
		method: 'POST',
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`
		},
		body: formData
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