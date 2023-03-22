import React, { useState, useEffect } from 'react'
import { API_KEY } from '../../Constants/Constants'
import { getMoviesList } from '../../Services/MovieService'
import { IMovie } from '../../Tools/IMovie'
import { CardMovie } from '../CardMovie/CardMovie'
import style from './TrendsCard.module.css'

export const TrendsCard = () => {
	
	const [state, setState] = useState<IMovie[]>([])
	useEffect(() => {
		getMoviesList(API_KEY, 100)
			.then((movies: IMovie[]) => {
				setState(movies)
			})
	}, [])
	console.log(state);

	const filter = state.filter((el) => {
		if (el.rating && el.rating.imdb >= 8) {
			return el
		}
	})

	const filterLimit = filter.slice(0, 10)


	return (
		<>
			<div className={style.container}>
				{filterLimit.map(movie =>
					(<CardMovie element={movie} key={movie.id} />)
				)}
			</div>
		</>
	)
}
