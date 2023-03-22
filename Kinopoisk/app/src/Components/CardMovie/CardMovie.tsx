import React from 'react'
import { IMovie} from '../../Tools/IMovie'
import style from './CardMovie.module.css'

type PropsCardType = {
	element: IMovie
}

export const CardMovie = (props: PropsCardType) => {
	
	// const genre = props.element.genres?.name
	
	let arrGenresSlice = props.element.genres?.slice(0,3)
	// console.log(arrGenresSlice)
	let genre = arrGenresSlice?.map((el) => el.name).join(`, `)

		// .charAt(0).toUpperCase() + el.name.slice(1)
	
	let trailer = props.element.videos?.trailers.map((el) => el.url)
	let shortDescription = props.element.shortDescription
	let reiting = props.element.rating
	let filmName = props.element.name
	let poster = props.element.poster
	// console.log(trailer);
	
	// console.log(genre);
console.log(props);

	
  return (
	  <div className={style.card}>
		  	<div className={style.poster}>
			 	<img src={poster?.url}></img> 
		  	</div>
		  {/* <div>
			  {shortDescription}
		  </div> */}
		  	<div className={style.reiting}>
			 	{reiting?.imdb}
		  	</div>
		  	<div>
			  <h3>{filmName}</h3>
			  <p>{genre}</p>
			</div>
	 </div>
  )
}
