import { createNewMyPost, getMyPosts } from "../../Services/PostService"
import { refreshTokenAsyncAction } from "../Auth/action"
import { AppGlobalDispatch, AppGlobalState } from "../globalStore"
import { BaseActionType, ObjectListType, PostType } from "../../Tools/types"

export const ADD_MY_POSTS_SUCCESS = 'ADD_MY_POSTS_SUCCESS'
export const ADD_MY_POSTS_FAILED = 'ADD_MY_POSTS_FAILED'

export type AddPostsActionType = BaseActionType & {
	payload: PostType[] | ObjectListType
}

export const addPostsSuccessAction = (posts: PostType[]): AddPostsActionType => ({
	type: ADD_MY_POSTS_SUCCESS,
	payload: posts
})

export const addPostsFailedsAction = (errors: ObjectListType): AddPostsActionType => ({
	type: ADD_MY_POSTS_FAILED,
	payload: errors
})

export const getMyPostsAsyncAction = (): any => {
	return async (dispatch: AppGlobalDispatch, getState: () => AppGlobalState) => {
		const accessToken = getState().auth.tokens?.access
		if (!accessToken) {
			console.log('No Access Token')
			throw new Error('No Access Token')
		}
		const result = await getMyPosts(accessToken)
		if (result.ok) {
			dispatch(addPostsSuccessAction(result.data))
		} else if (result.status === 401) {
			await dispatch(refreshTokenAsyncAction())
			await dispatch(getMyPostsAsyncAction())
		} else {
			console.log(result.data)
			throw new Error(result.data)
		}
	}
}

export const createNewPostAsyncAction = (formData: FormData): any => {
	return async (dispatch: AppGlobalDispatch, getState: () => AppGlobalState) => {
		const accessToken = getState().auth.tokens?.access
		if (!accessToken) {
			console.log('No Access Token')
			throw new Error('No Access Token')
		}
		const result = await createNewMyPost(accessToken, formData)
		if (result.ok) {
			dispatch(getMyPostsAsyncAction())
		} else if (result.status === 401) {
			await dispatch(refreshTokenAsyncAction())
			await dispatch(createNewPostAsyncAction(formData))
		} else {
			console.log(result.data)
			throw new Error(result.data)
		}
	}
}