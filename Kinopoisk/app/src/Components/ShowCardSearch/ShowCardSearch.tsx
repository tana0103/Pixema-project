import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { getMoviesFilterList } from '../../Services/MovieService'
import { IMovie } from '../../Tools/IMovie'
import { CardMovie } from '../CardMovie/CardMovie'
import style from './ShowCardSearch.module.css'

export const ShowCardSearch = () => {
  // const genre: any = useSelector((state: AppGlobalState) => state.genres.genre)

  const [state, setState] = useState<IMovie[]>([])

  const genre: any = useSelector((state: AppGlobalState) => state.filter.genre)
  const country: any = useSelector((state: AppGlobalState) => state.filter.countryFilter)
  const ratingFrom: any = useSelector((state: AppGlobalState) => state.filter.ratingFilterFrom)
  const ratingTo: any = useSelector((state: AppGlobalState) => state.filter.ratingFilterTo)
  const yearFrom: any = useSelector((state: AppGlobalState) => state.filter.yearFilterFrom)
  const yearTo: any = useSelector((state: AppGlobalState) => state.filter.yearFilterTo)
  const nameMovie: any = useSelector((state: AppGlobalState) => state.filter.valueNameFilter)
  console.log(genre, country, ratingFrom, ratingTo, yearFrom, yearTo)

  useEffect(() => {
      if(genre && country && ratingFrom && ratingTo && yearFrom && yearTo)
      getMoviesFilterList(yearFrom,yearTo,ratingFrom,ratingTo,country,genre)
        // .then((movies: IMovie[]) => {
        //   setState(movies)
        // })
    .then(res=> setState(res.docs));
    
  }, [genre, country, ratingFrom, ratingTo, yearFrom, yearTo])
  //   console.log(state);
  // const god = 2016
  // const filter = state.filter((el) => {
  //     const reating = el.rating!.imdb
  //     console.log(reating);
    
  //   if ((el.genres?.map((el) => el.name).includes(genre)) && ((el.year == god)||!god)  && (reating > 7.6 || reating == 7.6 )) {
  //       return el
  //     }
  //   })
  

  // const filter = state.filter((el) => {
  //   if (el.year==2021) {
  //     return el
  //   }
  // })
  
  const filterLimit = state.slice(0, 10)
  const arrfilter = filterLimit.map(movie =>
      (<CardMovie element={movie} key={movie.id} />)
    )
  

    return (
      <>
      <div>
      <input className={style.input} value={genre} />
      </div>
        <div className={style.container}>
          {arrfilter}
          {/* {filterLimit.map(movie =>
            (<CardMovie element={movie} key={movie.id} />)
          )} */}
        </div>
      </>
    )
}
  



// export const ShowCardSearch = () => {
//   const genre: any = useSelector((state: AppGlobalState) => state.genres.genre)
//   const searchValue = useSelector((state: AppGlobalState) => state.searchValue.value)
//   //   console.log(searchValue);
//   //   const [state, setState] = useState<IMovie[]>([])
//   //   let valueSearch = ''
//   //   if (searchValue) {
//   //     valueSearch = searchValue
//   //   } else {
//   //     valueSearch = genre
//   //   }
//   //   useEffect(() => {
//   //     getMoviesSearch(API_KEY, valueSearch, 3)
//   //       .then((movies: IMovie[]) => {
//   //         setState(movies)
//   //       })
//   //   }, [])
//   //   return (
//   //     <>
//   //       <div className={style.container}>
//   //         {state.map(movie =>
//   //           (<CardMovie element={movie} key={movie.id} />)
//   //         )}
//   //       </div>
//   //     </>
//   //   )
//   // }





//   const [state, setState] = useState<IMovie[]>([])

//   // if (searchValue) {
//   //   getMoviesSearch(API_KEY, searchValue, 10)
//   //     .then((movies: IMovie[]) => {
//   //       setState(movies)
//   //     })
//   //   return (
//   //     <><div>
//   //       <input className={style.input} value={genre} />
//   //     </div>
//   //       <div className={style.container}>
//   //         {state.map(movie =>
//   //           (<CardMovie element={movie} key={movie.id} />)
//   //         )}
//   //       </div>
//   //     </>
//   //   )
//   // } else {
//   //   // const genres: any = useSelector((state: AppGlobalState) => state.genres.genres)
//   //   // console.log(genres);
//   //   // console.log(getMoviesList(API_KEY));
//   //   // const [valueInput, setValueInput] = useState<any>({ value:  genre})

//   //   // const getValueInput = () => {
//   //   //   const currentValue = lala
//   //   //   setValueInput({
//   //   //     ...valueInput,
//   //   //     value: currentValue
//   //   //   })
//   //   // }
//   //   // console.log(valueInput.value);
//   //   // let list: any = genres.map((el:{label:string, value:string}) => (
//   //   //   <button key={el.value}>{el.value}</button>
//   //   // )
//   //   // )

//   useEffect(() => {
//     getMoviesList(API_KEY, 200)
//       .then((movies: IMovie[]) => {
//         setState(movies)
//       })
//   }, [])
//   console.log(state);

//   const filter = state.filter((el) => {
//     if (el.genres?.map((el) => el.name).includes(genre)) {
//       return el
//     }
//   })

//   const filterLimit = filter.slice(0, 10)


//   return (
//     <>
//       <div>
//         <input className={style.input} value={genre} />
//       </div>
//       <div className={style.container}>
//         {filterLimit.map(movie =>
//           (<CardMovie element={movie} key={movie.id} />)
//         )}
//         {/* <CardMovie element={}/> */}
//         {/* {list} */}

//         {/* {genres.map((genre) => (*/}

//       </div>
//     </>
//   )
// }