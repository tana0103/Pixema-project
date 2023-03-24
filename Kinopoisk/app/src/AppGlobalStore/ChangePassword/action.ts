import { postNewPassword } from "../../Services/NewPasswordService"
import { AppGlobalDispatch, AppGlobalState } from "../globalStore"

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

export type NewPasswordActionType = {
	type: string,
	newPassword: string,
	token: string
}
// export type NewPasswordActionType = {
// 	type: string
// }

// const newPasswordAction = (): NewPasswordActionType => {
// 	return {
// 		type: CHANGE_PASSWORD
// 	}
// }

const newPasswordAction = ( newPassword: string, token: string): NewPasswordActionType => {
	return {
		type: CHANGE_PASSWORD,
		newPassword: newPassword,
		token: token
	}
}


// export const newPasswordAsyncAction = (uid: string, new_password: string,  cb:()=>void): any => {
// 	return async (dispatch: AppGlobalDispatch, getState: () => AppGlobalState) => {
// 		const accessToken = getState().auth.tokens!.access
// 		const result = await postNewPassword(uid, new_password, accessToken)
// 		console.log(new_password, uid, accessToken);
// 		if (result.ok) {
// 			dispatch(newPasswordAction(new_password, accessToken))
// 			cb()
// 		} else {return}
// 	}
// }
export const newPasswordAsyncAction = (current_password: string, new_password: string, cb: () => void): any => {
	return async (dispatch: AppGlobalDispatch, getState: () => AppGlobalState) => {
		const token = getState().auth.tokens!.access
		const result = await postNewPassword(token, current_password, new_password)
		console.log(new_password, token, current_password);
		if (result.ok) {
			dispatch(newPasswordAction(new_password, token))
			cb()
		} else { return }
	}
}