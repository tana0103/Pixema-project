import { activateUser, registerUser } from "../../Services/AuthServes"
import { AppGlobalDispatch } from "../globalStore"
import { BaseActionType, ObjectListType, UserType } from "../../Tools/types"
import { REGISTRATION_FAILED, REGISTRATION_SUCCESS } from "./reducer"

export const ACTIVATION_SUCCESS = "ACTIVATION_SUCCESS"
export const ACTIVATION_FAILED = "ACTIVATION_FAILED"

export type LoadRegisterUserActionType = BaseActionType & {
	payload: UserType | ObjectListType
}
export type ActivateUserSuccessActionType = {
	type: string,
	payload?: ObjectListType
}

export const loadRegisterUserAction = (user: UserType): LoadRegisterUserActionType => {
	return {
		type: REGISTRATION_SUCCESS,
		payload: user
	}
}

const errorRegistrationUserAction = (error: ObjectListType): LoadRegisterUserActionType => {
	return {
		type: REGISTRATION_FAILED,
		payload: error
	}
}

const activationSuccessAction = (): ActivateUserSuccessActionType => {
	return {
		type: ACTIVATION_SUCCESS
	}
}

const activationFailedAction = (error: ObjectListType): ActivateUserSuccessActionType => {
	return {
		type: ACTIVATION_FAILED,
		payload: error
	}
}

export const registerUserAsyncAction = (username: string, email: string, password: string, cb: () => void): any => {
	return async (dispatch: AppGlobalDispatch) => {
		const result = await registerUser(username, email, password)
		if (result.ok) {
			dispatch(loadRegisterUserAction(result.data))
			cb()
		} else {
			dispatch(errorRegistrationUserAction(result.data))
		}
	}
}

export const activateUserAsyncAction = (uid: string, token: string, cb: () => void): any => {
	return async (dispatch: AppGlobalDispatch) => {
		
		const result = await activateUser(uid, token)
		
		if (result.ok) {
			dispatch(activationSuccessAction())
			cb()
		} else {
			dispatch(activationFailedAction(result.data))
		}
	}
}