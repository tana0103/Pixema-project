import { PostType } from "../../Tools/types"
import { ADD_MY_FAVORITE_POST, ArrActionType } from "./action"

type ArrPostsType = {
	posts: PostType[]
}

const defaultState: ArrPostsType = {
	posts: []
}

export const myFavoritePostsReducer = (state: ArrPostsType = defaultState, action: ArrActionType): ArrPostsType => {
	switch (action.type) {
		case ADD_MY_FAVORITE_POST:
			return {
				...state,
				posts: [...state.posts, action.payload]
			}
		default:
			return state
	}
}