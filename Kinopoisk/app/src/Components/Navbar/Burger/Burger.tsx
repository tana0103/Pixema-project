import { useState } from 'react'
import { PropsNavType } from '../../../Tools/types'
import { Favorites } from '../../Favorites/Favorites'
import { Home } from '../../Home/Home'
import { Settings } from '../../Settings/Settings'
import { Trends } from '../../Trends/Trends'
import style from './Burger.module.css'

export const Burger = (props: PropsNavType) => {
	const [state, setState] = useState(false)
	const openList = () => {
		setState(!state)
	}
	return (
		<div className={props.className}>
			<svg className={style.btnburg} onClick={openList} width="56" height="59" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="56" height="56" rx="10" fill="#06365f" />
				<path d="M21 22L35 22M21 28H35M21 34H35" stroke="white" strokeWidth="2" strokeLinecap="round" />
			</svg>
			<ul className={style.listset} style={state ? { display: 'block' } : { display: 'none' }}>
				<li><Home /></li>
				<li><Trends /></li>
				<li><Favorites /></li>
				<li><Settings /></li>
			</ul>
		</div>
	)
}
