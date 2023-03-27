import { ActionGenreType, ADD_GENRE, ADD_GENRE_LIST } from "./action"

export type GenreReducerType = {
	genre?: string|null,
	genres?: string[],
}

const defaultPostState: GenreReducerType= {
	genre: null,
}

export const genreReducer = (state: GenreReducerType = defaultPostState, action: ActionGenreType): GenreReducerType => {
	switch (action.type) {
		case ADD_GENRE:
			return {
				...state,
				genre: action.payload as string
			}
		case ADD_GENRE_LIST:
			return {
				...state,
				genres: action.payload as string[]
			}
		default:
			return state
	}
}