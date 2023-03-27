import React from 'react'
import { PropsNavType } from '../../tools/Tools'
import { Favorites } from '../Favorites/Favorites'
import { Home } from '../Home/Home'
import { Settings } from '../Settings/Settings'
import { Trends } from '../Trends/Trends'
import style from './index.module.css'

export const LeftMenu = (props: PropsNavType) => {
	return (
		< >
			<div className={props.className}>
				<Home />
				<Trends />
				<Favorites />
				<Settings />
				<div className={style.last}>© All Rights Reserved</div>
			</div>
		</>
	)
}
