import { IMovie } from "../../tools/IMovie"
import { ADD_MY_FAVORITE_MOVIES, ArrActionType } from "./action"

type ArrMoviesType = {
	movies: IMovie[]
}

const defaultState: ArrMoviesType = {
	movies: []
}

export const myFavoriteMoviesReducer = (state: ArrMoviesType = defaultState, action: ArrActionType): ArrMoviesType => {
	switch (action.type) {
		case ADD_MY_FAVORITE_MOVIES:
			return {
				...state,
				movies: [...state.movies, action.payload]
			}
		default:
			return state
	}
}


// type ArrPostsType = {
// 	posts: PostType[]
// }

// const defaultState: ArrPostsType = {
// 	posts: []
// }

// export const myFavoritePostsReducer = (state: ArrPostsType = defaultState, action: ArrActionType): ArrPostsType => {
// 	switch (action.type) {
// 		case ADD_MY_FAVORITE_POST:
// 			return {
// 				...state,
// 				posts: [...state.posts, action.payload]
// 			}
// 		default:
// 			return state
// 	}
// }