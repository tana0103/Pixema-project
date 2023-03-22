import { getTokensUser } from "../../Services/AuthServes"
import { fetchRefreshToken } from "../../Services/PostService"
import { AppGlobalDispatch, AppGlobalState } from "../globalStore"
import { BaseActionType, ObjectListType, tokenDto, UserType } from "../../Tools/types"
import { getUserMeAsyncAction } from "../UserMe/action"

export const GET_TOKENS_SUCCESS = 'GET_TOKENS_SUCCESS'
export const GET_TOKENS_FAILED = 'GET_TOKENS_FAILED'
export const LOAD_ME_USER = 'LOAD_ME_USER'
export const CLEAR_TOKENS = 'CLEAR_TOKENS'

export type AuthUserActionType = BaseActionType & {
	payload: tokenDto | ObjectListType | null
}

export const clearTokens = () => {
	return {
		type: CLEAR_TOKENS,
		payload: null
	}
}

const getTokensSuccessAction = (tokens: tokenDto): AuthUserActionType => {
	return {
		type: GET_TOKENS_SUCCESS,
		payload: tokens
	}
}

const getTokensFailedAction = (errors: ObjectListType): AuthUserActionType => {
	return {
		type: GET_TOKENS_FAILED,
		payload: errors
	}
}

export const getTokenAsyncAction = (email: string, password: string, cb: () => void): any => {
	return async (dispatch: AppGlobalDispatch) => {
		const result = await getTokensUser(email, password)
		if (result.ok) {
			await dispatch(getTokensSuccessAction(result.data))
			await dispatch(getUserMeAsyncAction())
			cb()
		}
		else {
			dispatch(getTokensFailedAction(result.data))
		}
	}
}

export const refreshTokenAsyncAction = (): any => {
	return async (dispatch: AppGlobalDispatch, getState: () => AppGlobalState) => {
		const refreshToken = getState().auth.tokens?.refresh
		if (!refreshToken) {
			console.log('No refreshToken')
			throw new Error()
		}
		const result = await fetchRefreshToken(refreshToken)
		if (result.ok) {
			dispatch(getTokensSuccessAction({
				access: result.data,
				refresh: refreshToken
			}))
		}
	}
}