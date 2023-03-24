// export const postNewPassword = async (uid: string, token: string, new_password: string) => {
// 	const url = 'https://studapi.teachmeskills.by/auth/users/reset_password_confirm/'
// 	const params = {
// 		method: 'POST',
// 		headers: {
// 			'Content-type': "application/json"
// 		},
// 		body: JSON.stringify({
// 			"uid": uid,
// 			"token": token,
// 			"new_password": new_password
// 		})
// 	}
// 	const request = new Request(url, params)
// 	const response = await fetch(request)
// 	// const result = await response.json()
// 	return {
// 		ok: response.ok,
// 		status: response.status,
// 		// data: result
// 	}
// }


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

// export const newPassword = async (token: string, current_password: string, new_password: string) => {
// 	const url = 'https://studapi.teachmeskills.by/auth/users/set_password/'
// 	const params = {
// 		method: 'POST',
// 		headers: {
// 			'Content-type': 'application/json',
// 			Authorization: Bearer ${token},
// },
// 	body: JSON.stringify({
// 		new_password: new_password,
// 		current_password: current_password
// 		})
//     }
// const request = new Request(url, params)
// const response = await fetch(request)
// return {
// 	ok: response.ok,
// 	status: response.status,
// }
// }