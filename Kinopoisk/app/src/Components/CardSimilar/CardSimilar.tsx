import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMyFavoriteMovie } from '../../AppGlobalStore/MyFavoriteMovies/action'
import { IMovie } from '../../tools/IMovie'
import style from './CardSimilar.module.css'

export type PropsCardType = {
	element: IMovie
}

export const CardSimilar = (props: PropsCardType) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	let filmName = props.element.name
	let poster = props.element.poster

	const addMyFavoriteMoviesClick = () => {
		dispatch(addMyFavoriteMovie(props.element))
	}

	return (
		<div className={style.card}>
			<div className={style.poster} onClick={() => navigate('/card/id', { state: props.element.id })}>
				<img src={poster?.url}></img>
			</div>
			<div className={style.favorite} onClick={addMyFavoriteMoviesClick}>Буду смотреть</div>
			<div >
				<h3>{filmName}</h3>
			</div>

		</div>
	)
}
