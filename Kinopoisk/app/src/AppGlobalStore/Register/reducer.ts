import { ObjectListType, UserType } from "../../tools/types"
import { ACTIVATION_FAILED, ACTIVATION_SUCCESS, LoadRegisterUserActionType as LoadRegisterUserActionType } from "./action"

export const REGISTRATION_FAILED = 'REGISTRATION_FAILED'
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS"
type RegisterStateType = {
	user?: UserType
	isRegistered: boolean
	errors?: ObjectListType | null
}

const defaultState: RegisterStateType = {
	isRegistered: false,
	errors: null
}

export const registerReducer = (state: RegisterStateType = defaultState, action: LoadRegisterUserActionType): RegisterStateType => {
	switch (action.type) {
		case REGISTRATION_SUCCESS:
			const loadUser = action.payload as UserType
			return {
				...state,
				isRegistered: true,
				user: loadUser,
			}
		case REGISTRATION_FAILED:
			const errors = action.payload as ObjectListType
			return {
				...state,
				isRegistered: false,
				user: undefined,
				errors: errors
			}
		default:
			return state
	}
}

type ActivateStateType = {
	isActivated: boolean,
	errors: ObjectListType | null
}

const defaultState2: ActivateStateType = {
	isActivated: false,
	errors: null
}

export const activateReducer = (state: ActivateStateType = defaultState2, action: LoadRegisterUserActionType): ActivateStateType => {
	switch (action.type) {
		case ACTIVATION_SUCCESS:
			return {
				...state,
				isActivated: true
			}
		case ACTIVATION_FAILED:
			return {
				...state,
				isActivated: false,
				errors: action.payload as ObjectListType
			}
		default:
			return state
	}
}