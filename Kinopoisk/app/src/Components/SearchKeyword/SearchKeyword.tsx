import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { searchValueAction } from '../../AppGlobalStore/SearchReducer/SearchReduser'
import { API_KEY } from '../../Constants/Constants'
import { getMoviesSearch } from '../../Services/MovieService'
import { IMovie } from '../../Tools/IMovie'
import { CardMovie } from '../CardMovie/CardMovie'
import style from './SearchKeyword.module.css'

export const SearchKeyword = () => {
  	const valueSearch = useSelector((state: AppGlobalState) => state.searchValue.value)
   const [state, setState] = useState<IMovie[]>([])

	useEffect(() => {
		const pause = setTimeout(() => { 
		 if (valueSearch) {
			getMoviesSearch(API_KEY, valueSearch, 10)
				.then((movies: IMovie[]) => {
					setState(movies)
				})
		}
		}, 300)
		return () => clearTimeout(pause)
		
	}, [valueSearch])
	
    return (
      <>
        <div className={style.container}>
          {state.map(movie =>
            (<CardMovie element={movie} key={movie.id} />)
          )}
        </div>
      </>
    )
  }