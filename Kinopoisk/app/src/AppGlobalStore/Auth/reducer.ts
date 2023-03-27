import { ObjectListType, tokenDto } from "../../tools/types"
import { AuthUserActionType, CLEAR_TOKENS, GET_TOKENS_FAILED, GET_TOKENS_SUCCESS } from "./action"

type AuthStateType = {
	tokens: tokenDto | null
	errors: ObjectListType | null | undefined
}

const defaultState: AuthStateType = {
	tokens: null,
	errors: null
}

export const authReducer = ((state: AuthStateType = defaultState, action: AuthUserActionType): AuthStateType => {
	switch (action.type) {
		case GET_TOKENS_SUCCESS:
			return {
				...state,
				tokens: action.payload as tokenDto,
				errors: null
			}
		case GET_TOKENS_FAILED:
			return {
				...state,
				tokens: null,
				errors: action.payload as ObjectListType
			}
		case CLEAR_TOKENS:
			return {
				...state,
				tokens: null,
				errors: null
			}
		default:
			return state
	}
})