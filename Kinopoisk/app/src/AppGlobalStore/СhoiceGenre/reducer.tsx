import React from 'react'

const ADD_GENRE = "ADD_GENRE"
const ADD_GENRE_LIST = "ADD_GENRE_LIST"


type GenreReducerType = {
	genre?: string|null,
	genres?: string[],
}

type ActionGenreType = {
	type: string,
	payload: string | string[]
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
