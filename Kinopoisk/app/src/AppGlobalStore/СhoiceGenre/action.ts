export const ADD_GENRE = "ADD_GENRE"
export const ADD_GENRE_LIST = "ADD_GENRE_LIST"

export type ActionGenreType = {
	type: string,
	payload: string | string[]
}

export const loadGenreAction = (genre: string): ActionGenreType => {
	return {
		type: ADD_GENRE,
		payload: genre
	}
}

export const loadGenresAction = (genres: string[]): ActionGenreType => {
	return {
		type: ADD_GENRE_LIST,
		payload: genres
	}
}