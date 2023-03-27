import { API_KEY } from "../Constants/Constants"
import { IMovie} from "../tools/IMovie"

type MoveDocsType = {
	docs: IMovie[]
}

const url = 'https://api.kinopoisk.dev/'

export const getMoviesList = (key: string, limit: number) => {
	return fetch(url + 'v1/movie?token=' + key + '&limit=' + limit)
		.then(response => response.json())
		.then((response: MoveDocsType) => (response.docs))
}

export const fetchNextPage = (limit: number, offset: number) => {
	return fetch(url + 'v1/movie?token=' + API_KEY + '&limit=' + limit + '&offset=' + offset)
		.then(response => response.json())
		.then((response: MoveDocsType) => (response.docs))
}

export const getMoviesSearch = (key: string, search: string, limit: number, offset: number) => {
	return fetch(url + 'v1/movie?token=' + key + '&limit=' + limit + '&offset=' + offset + '&name=' + search)
		.then(response => response.json())
		.then((response: MoveDocsType) => (response.docs))
}

export const getMovieById = (id: number | string) => {
	return fetch(url + 'v1/movie/' + id + '?token=' + API_KEY)
		.then(res => res.json())
		.then((response: IMovie) => response)
}

export const getMoviesFilterList = (yearFrom: number | null,
	yearTo: number | null, ratingFrom: number | null, ratingTo: number | null,
	country: string | null, genre: string | null, limit: number, offset: number) => {
	return fetch(url + 'v1/movie' + '?year=' + yearFrom + '-' + yearTo + 'premiere.country=' + country + '&genres.name=' + genre + '&rating.kp=' + ratingFrom + '-' + ratingTo + '&token=' + API_KEY + '&limit=' + limit + '&offset=' + offset)
		.then(res => res.json())
		.then((response: MoveDocsType) => (response.docs))
}

export const sortMoviesList = (sortField: string, sortType: string|number, limit: number, offset: number) => {
	return fetch(url + 'v1/movie?' + 'sortField=' + sortField + '&sortType=' + sortType + '&token=' + API_KEY + '&limit=' + limit + '&offset=' + offset)
		.then(res => res.json())
		.then((response: MoveDocsType) => (response.docs))
}