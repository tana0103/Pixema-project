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