import { useLocation} from 'react-router-dom'
import { IMovie } from '../../Tools/IMovie'
import { useEffect, useState } from 'react'
import style from './ShowSelectedCard.module.css'
import { getMovieById } from '../../Services/MovieService'
import { addMyFavoriteMovie } from '../../AppGlobalStore/MyFavoriteMovies/action'
import { useDispatch } from 'react-redux'
import { CardSimilar } from '../CardSimilar/CardSimilar'

export const ShowSelectedCard = () => {
	const dispatch = useDispatch()
	const params = useLocation()
	const [movie, setMovie] = useState<IMovie>({} as IMovie)
	const genres = movie.genres?.map((el) => el.name).join(', ')

	useEffect(() => {
		if (params.state) {
			getMovieById(params.state)
				.then(data => setMovie(data))
		}
	}, [params.state])
	console.log(movie, movie.name);
	
	const addMyFavoriteMoviesClick = () => {
		dispatch(addMyFavoriteMovie(movie))
	}

	const countries = movie.countries?.map(el=>el.name).join(', ')
	const productions = movie.productionCompanies?.map(el => el.name).join(', ')
	const arrActors = movie.persons?.slice(0, 5)
	const actors = arrActors?.map((el)=>el.enName).join(', ')
	const similarMovies = movie.similarMovies?.map(movie =>
		(<CardSimilar element={movie} key={movie.id} />)
	)


	if (!movie) {
		return (
			<div>Loading...</div>
		)
	}
	return (
		<div className={style.containerCard}>
			<div className={style.img}>
				<div className={style.poster}>
					<img src={movie.poster?.url}></img>
				</div>
				<div className={style.btnsvg}>
					<div onClick={addMyFavoriteMoviesClick} >
						<svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.77 17.7843L7.48 14.4943C7.07224 14.1843 6.50776 14.1843 6.1 14.4943L1.77 17.7843C1.45424 18.0381 1.02377 18.0959 0.652275 17.9343C0.280782 17.7727 0.0295672 17.4184 0 17.0143V2.95431C0.0387838 2.12998 0.404652 1.35513 1.01656 0.80141C1.62847 0.247691 2.4359 -0.0391904 3.26 0.0043149H10.26C11.0891 -0.0335703 11.8987 0.262563 12.5077 0.826425C13.1166 1.39029 13.4741 2.17479 13.5 3.00431V17.0143C13.4611 17.4038 13.2163 17.7426 12.8586 17.9017C12.501 18.0609 12.0855 18.0161 11.77 17.7843Z" fill="#AFB2B6" />
						</svg>
					</div>
					<svg width="1" height="40" viewBox="0 0 1 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="1" height="56" transform="matrix(-1 0 0 1 1 0)" fill="black" />
					</svg>
					<div className={style.svgbtn}>
						<svg  width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="3.54545" cy="8.63627" r="2.54545" stroke="#AFB2B6" stroke-width="2" />
							<circle cx="12.4544" cy="3.54545" r="2.54545" stroke="#AFB2B6" stroke-width="2" />
							<circle cx="12.4544" cy="13.7273" r="2.54545" stroke="#AFB2B6" stroke-width="2" />
							<path d="M10 13L6.09106 10.5455M6.09106 7.5L10 5" stroke="#AFB2B6" stroke-width="2" stroke-linecap="round" />
						</svg>
					</div>
				</div>
				</div>
			<div className={style.content}>
				<p>{genres}</p>
				<h3 className={style.nameh}>{movie.name}</h3>
				<div className={style.reitings}>
					<div className={style.reitingimdb}>
						{(movie.rating?.kp)?.toFixed(1)}
					</div>
					<div className={style.reitingimdb2}>
						IMDb {movie.rating?.imdb}
					</div>
					<div className={style.reitingimdb2}>
						{movie.movieLength} min
					</div>
				</div>
				<h4>{movie.description}</h4>
				<div className={style.tabl}>
					<div className={style.tablel}>
						<h4 className={style.tablkey}>Year</h4>
						<h4>{movie.year}</h4>
					</div>
					<div className={style.tablel}>
						<h4 className={style.tablkey}>Released</h4>
						<h4>{movie.premiere?.world}</h4>
					</div>
					<div className={style.tablel}>
						<h4 className={style.tablkey}>BoxOffice</h4>
						<h4>{movie.budget?.value}  {movie.budget?.currency}</h4>
					</div>
					<div className={style.tablel}>
						<h4 className={style.tablkey}>Country</h4>
						<h4>{countries}</h4>
					</div>
					<div className={style.tablel}>
						<h4 className={style.tablkey}>Production</h4>
						<h4>{productions}</h4>
					</div>
					<div className={style.tablel}>
						<h4 className={style.tablkey}>Actors</h4>
						<h4>{ actors}</h4>
					</div>
					<h2 className={style.titlerecomend}>Recommendations</h2>
					<div className={style.containerrecomend}>
						{similarMovies}
					</div>
					{/* <div className={style.tablel}>
						<h4 className={style.tablkey}>Director</h4>
						<h4></h4>
					</div>
					<div className={style.tablel}>
						<h4 className={style.tablkey}>Writers</h4>
						<h4></h4>
					</div> */}
				</div>
			</div>
		</div>
	)
}







		// const dispatch = useDispatch()
		// const navigate = useNavigate()
		// // const genre = props.element.genres?.name

		// let arrGenresSlice = props.element.genres?.slice(0, 3)
		// // console.log(arrGenresSlice)
		// let genre = arrGenresSlice?.map((el) => el.name).join(`, `)

		// // .charAt(0).toUpperCase() + el.name.slice(1)

		// let trailer = props.element.videos?.trailers.map((el) => el.url)
		// let shortDescription = props.element.shortDescription
		// let reiting = props.element.rating
		// let filmName = props.element.name
		// let poster = props.element.poster
		// // console.log(trailer);

		// // console.log(genre);
		// console.log(props);

		// const addMyFavoriteMoviesClick = () => {
		// 	dispatch(addMyFavoriteMovie(props.element))
		// }

		// return (
		// 	<div className={style.card}>
		// 		<div className={style.poster}>
		// 			<img src={poster?.url}></img>
		// 		</div>
		// 		{/* <div>
		// 	  {shortDescription}
		//   </div> */}
		// 		<div className={style.reiting}>
		// 			{reiting?.imdb}
		// 		</div>
		// 		<div className={style.favorite} onClick={addMyFavoriteMoviesClick}>Буду смотреть</div>
		// 		<div >
		// 			<h3>{filmName}</h3>
		// 			<p>{genre}</p>
		// 		</div>

		// 	</div>
		// )
	

//}
