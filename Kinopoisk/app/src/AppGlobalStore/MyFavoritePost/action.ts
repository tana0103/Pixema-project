import { PostType } from "../../Tools/types"

export const ADD_MY_FAVORITE_POST = 'ADD_MY_FAVORITE_POST'

export type ArrActionType = {
	type: string
	payload: PostType
}

export const addMyFavoritePost = (post: PostType): ArrActionType => ({
	type: ADD_MY_FAVORITE_POST,
	payload: post
})