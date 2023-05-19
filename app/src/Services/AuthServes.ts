export const registerUser = async (username: string, email: string, password: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/users/'
	const params = {
		method: 'POST',
		headers: {
			'Content-type': "application/json"
		},
		body: JSON.stringify({
			"username": username,
			"email": email,
			"password": password
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

export const activateUser = async (uid: string, token: string) => {
	debugger
	const url = 'https://studapi.teachmeskills.by/auth/users/activation/'
	const params = {
		method: 'POST',
		headers: {
			'Content-type': "application/json"
		},
		body: JSON.stringify({
			"uid": uid,
			"token": token
		})
	}
	const request = new Request(url, params)
	console.log({
		"uid": uid,
		"token": token
	});
	const response = await fetch(request)
	const result = await (response.ok ? Promise.resolve(null) : response.json())
	return {
		ok: response.ok,
		status: response.status,
		data: result
	}
}


export const getTokensUser = async (email: string, password: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/jwt/create/'
	const params = {
		method: 'POST',
		headers: {
			'Content-type': "application/json"
		},
		body: JSON.stringify({
			"email": email,
			"password": password
		})
	}
	const request = new Request(url, params)
	// console.log({
	// 	"email": email,
	// 	"password": password
	// })
	const response = await fetch(request)
	const result = await response.json()
	return {
		ok: response.ok,
		status: response.status,
		data: result
	}
}

export const getMeUserData = async (token: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/users/me/'
	const params = {
		method: 'GET',
		headers: {
			'Content-type': "application/json",
			'Authorization': `Bearer ${token}`
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

export type PostType = {
	"id": number,
	"image": string,
	"text": string,
	"date": string,
	"lesson_num"?: number,
	"title": string,
	"author"?: number
}

export type ResType = {
	count: number,
	next?: string,
	results: PostType[]
}

const url = 'https://studapi.teachmeskills.by/blog/posts/'

export const GetPostList = (limit: number, offset: number = 0): Promise<PostType[]> => {
	return fetch(url + '?limit=' + limit + '&offset=' + offset)
		.then(response => response.json())
		.then((response: ResType) => (response.results))
}