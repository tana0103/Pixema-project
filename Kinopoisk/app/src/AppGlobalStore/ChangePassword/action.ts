import { postNewPassword } from "../../Services/NewPasswordService"
import { AppGlobalDispatch, AppGlobalState } from "../globalStore"

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

export type NewPasswordActionType = {
	type: string,
	newPassword: string,
	token: string
}

const newPasswordAction = ( newPassword: string, token: string): NewPasswordActionType => {
	return {
		type: CHANGE_PASSWORD,
		newPassword: newPassword,
		token: token
	}
}


export const newPasswordAsyncAction = (uid: string, new_password: string,  cb:()=>void): any => {
	return async (dispatch: AppGlobalDispatch, getState: () => AppGlobalState) => {
		const accessToken = getState().auth.tokens!.access
		const result = await postNewPassword(uid, new_password, accessToken)
		console.log(new_password, uid, accessToken);
		if (result.ok) {
			dispatch(newPasswordAction(new_password, accessToken))
			cb()
		} else {return}
	}
}