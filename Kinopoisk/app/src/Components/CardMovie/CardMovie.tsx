import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMyFavoriteMovie } from '../../AppGlobalStore/MyFavoriteMovies/action'
import { IMovie } from '../../Tools/IMovie'
import style from './CardMovie.module.css'

export type PropsCardType = {
	element: IMovie
}

export const CardMovie = (props: PropsCardType) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	let arrGenresSlice = props.element.genres?.slice(0, 3)
	let genre = arrGenresSlice?.map((el) => el.name).join(`, `)

	let trailer = props.element.videos?.trailers.map((el) => el.url)
	let shortDescription = props.element.shortDescription
	let reiting = props.element.rating
	let filmName = props.element.name
	let poster = props.element.poster
	// const arrayfavorite:any = []
	const addMyFavoriteMoviesClick = () => {
		dispatch(addMyFavoriteMovie(props.element))
		// arrayfavorite.push(props.element)
		// localStorage.setItem('key', JSON.stringify(arrayfavorite))
	}
	
	return (
		<div className={style.card}>
			<div className={style.poster} onClick={() => navigate('/card/id', { state: props.element.id })}>
				<img src={poster?.url}></img>
			</div>
			<div className={style.reiting}>
				{reiting?.imdb}
			</div>
			<div className={style.favorite} onClick={addMyFavoriteMoviesClick}>Буду смотреть</div>
			<div>
				<h3>{filmName}</h3>
				<p>{genre}</p>
			</div>
		</div>
	)
}
