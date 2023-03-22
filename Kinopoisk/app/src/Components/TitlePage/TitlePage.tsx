import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { API_KEY } from '../../Constants/Constants'
import { getMoviesList } from '../../Services/MovieService'
import { IMovie } from '../../Tools/IMovie'
import { CardMovie } from '../CardMovie/CardMovie'
import style from './TitlePage.module.css'

export const TitlePage = () => {
  const genre: any = useSelector((state: AppGlobalState) => state.genres.genre)
  
  const [state, setState] = useState<IMovie[]>([])
  useEffect(() => {
    getMoviesList(API_KEY, 10)
      .then((movies: IMovie[]) => {
        setState(movies)
      })
  }, [])
  console.log(state);

  // const ganre = state.filter((el) => {
  //   if (el.genres?.map((el) => el.name).includes('комедия')) {
  //     return el
  //   }
  // })
  // console.log(ganre);
  

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
