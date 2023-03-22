import { ObjectListType, PostType } from "../../Tools/types"
import { AddPostsActionType, ADD_MY_POSTS_FAILED, ADD_MY_POSTS_SUCCESS } from "./action"

type MyPostStateType = {
	myPosts: PostType[] | null
	errors: ObjectListType | null
}

const defaultState = {
	myPosts: null,
	errors: null
}

export const myPostReducer = (state: MyPostStateType = defaultState, action: AddPostsActionType): MyPostStateType => {
	switch (action.type) {
		case ADD_MY_POSTS_SUCCESS:
			return {
				...state,
				myPosts: action.payload as PostType[],
				errors: null
			}
		case ADD_MY_POSTS_FAILED:
			return {
				...state,
				myPosts: null,
				errors: action.payload as ObjectListType
			}
		default:
			return state
	}
}