import { IMovie } from "../../tools/IMovie"


export const ADD_MY_FAVORITE_MOVIES = 'ADD_MY_FAVORITE_MOVIES'

export type ArrActionType = {
	type: string
	payload: IMovie
}

export const addMyFavoriteMovie = (movie: IMovie): ArrActionType => ({
	type: ADD_MY_FAVORITE_MOVIES,
	payload: movie
})