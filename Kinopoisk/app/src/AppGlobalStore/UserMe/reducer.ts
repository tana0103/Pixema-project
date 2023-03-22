import { CLEAR_USER_ME, GET_USER_ME, UserMeActionType, UserPayloadType } from "./action";

export type UserMeStateType = {
	id: number|null,
	username: string|null|''
}

const defaultUserState: UserMeStateType = {
	id: null,
	username: ''
}

export const getUserMeReducer = (state: UserMeStateType = defaultUserState, action: UserMeActionType): UserMeStateType => {
	switch (action.type) {
		case GET_USER_ME:
			return {
				...state,
				username: (action.payload as UserPayloadType).username  ,
				id: (action.payload as UserPayloadType).id
			}
		case CLEAR_USER_ME:
			return {
				...state,
				username: null,
				id: null
			}
		default:
			return state
	}
}