import { useSelector } from 'react-redux'
import { AppGlobalState } from '../../../AppGlobalStore/globalStore'
import { CardMovie } from '../../CardMovie/CardMovie'
import style from './ShowCardFavorites.module.css'

export const ShowCardFavorites = () => {
	const favoritesMovies = useSelector((state: AppGlobalState) => state.myFavoriteMovies)
	const arrFavoritesMovies = favoritesMovies.movies ? favoritesMovies.movies.slice(0, 10) : []
  
	return (
	  <div className={style.container}>
		  {arrFavoritesMovies.map(movie => <CardMovie element={movie} />)}
	  </div>
  )
}
