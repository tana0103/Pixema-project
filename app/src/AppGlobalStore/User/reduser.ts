import { WriteUserActionType, WRITE_USER } from "./action"

export type UserStateType = {
	userName: string|null
}

const defaultState = {
	userName: null
}

export const writeUserReducer = (state: UserStateType = defaultState, action: WriteUserActionType): UserStateType => {
	switch (action.type) {
		case WRITE_USER:
			return {
				...state,
				userName: action.payload
			}
		default:
			return state
	}
}