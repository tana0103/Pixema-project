import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { searchValueAction } from '../../../AppGlobalStore/SearchReducer/action'
import { PropsNavType } from '../../../tools/Tools'
import { BtnGlass } from './Glass/Glass'
import style from './Search.module.css'
import { SearchBtn } from './SearchBtn'

export const Search = (props: PropsNavType) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [valueInput, setValueInput] = useState('')

	const changeValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setValueInput(currentValue)
		dispatch(searchValueAction(valueInput))
	}

	return (
		<div className={props.className}>
			<label className={style.label}>
				<input className={style.input} type='search'
					placeholder={'Search'} value={valueInput} onChange={changeValueInput}>
				</input>
				<div className={style.glass} style={valueInput ? { display: 'block' } : { display: 'none' }} onClick={() => navigate('/search/keyword')}><BtnGlass /></div>
				<SearchBtn />
			</label>
		</div>
	)
}