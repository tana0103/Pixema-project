import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterAction } from '../../AppGlobalStore/FilterReducer/action';
import style from './Filter.module.css'

export const Filter = () => {
	const navigate = useNavigate()
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

	const [stateNameMovie, setStateNameMovie] = useState('')
	const changeValueNameMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setStateNameMovie(currentValue)
	}
	const [stateYearFrom, setStateYearFrom] = useState('')
	const changeValueYearFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setStateYearFrom(currentValue)
	}
	const [stateYearTo, setStateYearTo] = useState('')
	const changeValueYearTo = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setStateYearTo(currentValue)
	}
	const [stateRatingFrom, setStateRatingFrom] = useState('')
	const changeValueRatingFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setStateRatingFrom(currentValue)
	}
	const [stateRatingTo, setStateRatingTo] = useState('')
	const changeValueRatingTo = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setStateRatingTo(currentValue)
	}
	const [stateCountry, setStateCountry] = useState('')
	const changeValueCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setStateCountry(currentValue)
	}
	const [stateGenre, setStateGenre] = useState('')
	
	let genr: any = allGenres.map((genre) => (
		<li className={style.ulgenre} key={genre.label} onClick={() =>setStateGenre(genre.value)}>
			{genre.value}
		</li>
	))

	const filterTurnOn = () => {
		dispatch(filterAction(stateNameMovie, +stateYearFrom, +stateYearTo, +stateRatingFrom,
			+stateRatingTo, stateCountry, stateGenre))
		navigate('/search')
	}
	// const hadleMouseEnter = (genre: {
	// 	label: string;
	// 	value: string;
	// }) => {
	// 	dispatch(loadGenreAction(`${genre.value}`))
	// }

	// let genr: any = allGenres.map((genre) => (
	// 	<li className={style.ulgenre} key={genre.label} onClick={() => hadleMouseEnter(genre)}>
	// 		{genre.value}
	// 	</li>
	// ))

  return (
	  <div className={style.containerfilter} >
		  <div className={style.titlefilter}>
			  <h2>Filters</h2>
		  </div>
		  <div>
			  <h3>Sort dy</h3>
			  <div>
				  <button className={style.btnraiting} onClick={()=>navigate('/sort/rating')}>Rating</button>
				  <button className={style.btnyear} onClick={() => navigate('/sort/year')}>Year</button>
			  </div>
			  <hr className={style.hrfilter} />
		  </div>
		  {/* <div>
			  <h3>Full or short movie name</h3>
			  <input placeholder='Your text' value={stateNameMovie} onChange={changeValueNameMovie} ></input>
		  </div> */}
		  <div>
			  <h3>Country</h3>
			  <input className={style.inputfilter} placeholder='Selected country' value={stateCountry} onChange={changeValueCountry}></input>
		  </div>
		  <div>
			  <h3>Year</h3>
			  <div className={style.fromto}>
				  <input className={style.btnfromto} placeholder='From' value={stateYearFrom} onChange={changeValueYearFrom}></input>
				  <input className={style.btnfromto} placeholder='To' value={stateYearTo} onChange={changeValueYearTo}></input>
			  </div>
		  </div>
		  <div>
			  <h3>Rating</h3>
			  <div className={style.fromto}>
				  <input className={style.btnfromto} placeholder='From' value={stateRatingFrom} onChange={changeValueRatingFrom}></input>
				  <input className={style.btnfromto} placeholder='To' value={stateRatingTo} onChange={changeValueRatingTo}></input>
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
			  <button className={style.btnresult} onClick={filterTurnOn}>Show results</button>
		  </div>
	 </div>
  )
}
