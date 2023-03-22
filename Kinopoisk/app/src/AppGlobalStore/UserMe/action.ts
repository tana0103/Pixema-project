import { getUserMe } from "../../Services/UserMeService"
import { AppGlobalDispatch, AppGlobalState } from "../globalStore"

export const GET_USER_ME = 'GET_USER_ME'
export const CLEAR_USER_ME = 'CLEAR_USER_ME'
// export const CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD'

export type UserPayloadType = {
	id: number,
	username: string,
	// password?: string
}

export type UserMeActionType = {
	type: string,
	payload: UserPayloadType | null 
}

export const getUserMeAction = (data: { id: number, username: string }): UserMeActionType => ({
	type: GET_USER_ME,
	payload: data
})

// export const clearUserMe = () => ({
// 	type: CLEAR_USER_ME,
// 	payload: null
// })

// export const changeUserPassword = ( password: string ): UserMeActionType => ({
// 	type: CHANGE_USER_PASSWORD,
// 	payload: password
// })

export const getUserMeAsyncAction = (): any => {
	return async (dispatch: AppGlobalDispatch, getState: () => AppGlobalState) => {
		const accessToken = getState().auth.tokens!.access
		const result = await getUserMe(accessToken)
		if (result.ok) {
			dispatch(getUserMeAction(result.data))
		}
	}
}