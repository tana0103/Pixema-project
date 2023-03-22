import { IMovie, IMovieProps } from "../Tools/IMovie"

type MoveDocsType = {
	docs: IMovie[]
}

const url = 'https://api.kinopoisk.dev/'

export const getMoviesList = (key: string, limit:number) => {
	return fetch(url + 'v1/movie?token=' + key+ '&limit='+ limit)
		.then(response => response.json())
		.then((response: MoveDocsType) => (response.docs))
}

export const getMoviesSearch = (key: string, search: string, limit: number) => {
	return fetch(url + 'v1/movie?token=' +key  + '&limit=' + limit + '&name='+ search)
		.then(response => response.json())
		.then((response: MoveDocsType) => (response.docs))
}