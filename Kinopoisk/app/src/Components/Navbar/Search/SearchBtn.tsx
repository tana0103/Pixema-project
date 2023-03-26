import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadGenreAction, loadGenresAction } from '../../../AppGlobalStore/СhoiceGenre/reducer'
import { Filter } from '../../Filtermenu/Filter'
import style from './Search.module.css'



export const SearchBtn = () => {
	// const dispatch = useDispatch()
	const [state, setState] = useState(false)
	const openList = () => {
		setState(!state)
	}
	// const allGenres = [
	// 	{ label: "Семейные", value: "семейный" },
	// 	{ label: "Биографии", value: "биография" },
	// 	{ label: "Боевики", value: "боевик" },
	// 	{ label: "Вестерны", value: "вестерн" },
	// 	{ label: "Военные", value: "военный" },
	// 	{ label: "Детективы", value: "детектив" },
	// 	{ label: "Детские", value: "детский" },
	// 	{ label: "Документальные", value: "документальный" },
	// 	{ label: "Драмы", value: "драма" },
	// 	{ label: "Исторические", value: "история" },
	// 	{ label: "Комедии", value: "комедия" },
	// 	{ label: "Короткометражки", value: "короткометражка" },
	// 	{ label: "Криминал", value: "криминал" },
	// 	{ label: "Мелодрамы", value: "мелодрама" },
	// 	{ label: "Музыкальные", value: "музыка" },
	// 	{ label: "Мюзиклы", value: "мюзикл" },
	// 	{ label: "Новости", value: "новости" },
	// 	{ label: "Приключения", value: "приключения" },
	// 	{ label: "Спортивные", value: "спорт" },
	// 	{ label: "Триллеры", value: "триллер" },
	// 	{ label: "Ужасы", value: "ужасы" },
	// 	{ label: "Фантастика", value: "фантастика" },
	// 	{ label: "Фильмы-нуар", value: "фильм-нуар" },
	// 	{ label: "Фэнтези", value: "фэнтези" },
	// ];

	// const hadleMouseEnter = (genre: {
	// 	label: string;
	// 	value: string;
	// }) => {
	// 	dispatch(loadGenreAction(`${genre.value}`))
	// 	setState(!state)
	// 	// const arrGenres = []
	// 	// arrGenres.push(`${genre.value}`)
	// 	// dispatch(loadGenresAction(arrGenres))
	// 	// console.log(arrGenres);

	// 	// console.log(`${genre.value}`);
	// }

	// let genr: any = allGenres.map((genre) => (
	// 	<li key={genre.label} onClick={() => hadleMouseEnter(genre)}>
	// 		{genre.value}
	// 	</li>
	// ))
	// // console.log(genr);
	

	return (
		<div >
			<button className={style.input} onClick={openList}>
					<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L15 1M6 7H15M10 13H15" stroke="#80858B" fill="red" stroke-width="2" stroke-linecap="round" />
					</svg>
			</button>
			<div className={style.dropcontainer} style={state ? { display: 'block' } : { display: 'none' }}><Filter /></div>
			{/* <ul className={style.dropcontent} style={state ? { display: 'block' } : { display: 'none' }}>{genr}</ul> */}
		</div>
	)
}