import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loadGenreAction } from '../../AppGlobalStore/СhoiceGenre/reducer';
import style from './Filter.module.css'

export const Filter = () => {
	const dispatch = useDispatch()
	const allGenres = [
		{ label: "Семейные", value: "семейный" },
		{ label: "Биографии", value: "биография" },
		{ label: "Боевики", value: "боевик" },
		{ label: "Вестерны", value: "вестерн" },
		{ label: "Военные", value: "военный" },
		{ label: "Детективы", value: "детектив" },
		{ label: "Детские", value: "детский" },
		{ label: "Документальные", value: "документальный" },
		{ label: "Драмы", value: "драма" },
		{ label: "Исторические", value: "история" },
		{ label: "Комедии", value: "комедия" },
		{ label: "Короткометражки", value: "короткометражка" },
		{ label: "Криминал", value: "криминал" },
		{ label: "Мелодрамы", value: "мелодрама" },
		{ label: "Музыкальные", value: "музыка" },
		{ label: "Мюзиклы", value: "мюзикл" },
		{ label: "Новости", value: "новости" },
		{ label: "Приключения", value: "приключения" },
		{ label: "Спортивные", value: "спорт" },
		{ label: "Триллеры", value: "триллер" },
		{ label: "Ужасы", value: "ужасы" },
		{ label: "Фантастика", value: "фантастика" },
		{ label: "Фильмы-нуар", value: "фильм-нуар" },
		{ label: "Фэнтези", value: "фэнтези" },
	];

	const hadleMouseEnter = (genre: {
		label: string;
		value: string;
	}) => {
		dispatch(loadGenreAction(`${genre.value}`))
		// const arrGenres = []
		// arrGenres.push(`${genre.value}`)
		// dispatch(loadGenresAction(arrGenres))
		// console.log(arrGenres);

		// console.log(`${genre.value}`);
	}

	let genr: any = allGenres.map((genre) => (
		<li className={style.ulgenre} key={genre.label} onClick={() => hadleMouseEnter(genre)}>
			{genre.value}
		</li>
	))
  return (
	  <div className={style.containerfilter} >
		  <div className={style.titlefilter}>
			  <h2>Filters</h2>
			  {/* <div>
		  		<svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			 		<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6569 10.2429L7.41421 6.00023L11.6569 1.75759C12.0472 1.36727 12.0472 0.733701 11.6569 0.343378C11.2665 -0.0469454 10.633 -0.0469453 10.2426 0.343378L6 4.58602L1.75736 0.343378C1.36704 -0.0469453 0.733469 -0.0469454 0.343146 0.343378C-0.0471771 0.733701 -0.0471771 1.36727 0.343146 1.75759L4.58579 6.00023L0.343146 10.2429C-0.0478838 10.6339 -0.0471771 11.2668 0.343146 11.6571C0.733469 12.0474 1.36633 12.0481 1.75736 11.6571L6 7.41445L10.2426 11.6571C10.6337 12.0481 11.2665 12.0474 11.6569 11.6571C12.0472 11.2668 12.0479 10.6339 11.6569 10.2429Z" fill="#AFB2B6" />
				  </svg>
			  </div> */}
		  </div>
		  <div>
			  <h3>Sort dy</h3>
			  <div>
				  <button className={style.btnraiting}>Rating</button>
				  <button className={style.btnyear}>Year</button>
			  </div>
			  <hr className={style.hrfilter} />
		  </div>
		  <div>
			  <h3>Full or short movie name</h3>
			  <input placeholder='Your text'></input>
		  </div>
		  <div>
			  <h3>Country</h3>
			  <input placeholder='Selected country'></input>
		  </div>
		  <div>
			  <h3>Year</h3>
			  <div className={style.fromto}>
				  <input className={style.btnfromto} placeholder='From'></input>
				  <input className={style.btnfromto} placeholder='To'></input>
			  </div>
		  </div>
		  <div>
			  <h3>Rating</h3>
			  <div className={style.fromto}>
			  		<input className={style.btnfromto} placeholder='From'></input>
					<input className={style.btnfromto} placeholder='To'></input>
			  </div>
		  </div>
		  <div>
			  <h3>Genre</h3>
			  <ul>
				  {genr}
			  </ul>
		  </div>
		  <div className={style.fromto}>
			  <button className={style.btnclear}>Clear filter</button>
			  <button className={style.btnresult}>Show results</button>
		  </div>
	 </div>
  )
}
