import { useState } from 'react'
import { Filter } from '../../Filtermenu/Filter'
import style from './Search.module.css'



export const SearchBtn = () => {
	// const dispatch = useDispatch()
	const [state, setState] = useState(false)
	const openList = () => {
		setState(!state)
	}
	
	return (
		<div >
			<button className={style.input} onClick={openList}>
					<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L15 1M6 7H15M10 13H15" stroke="#80858B" fill="red" strokeWidth="2" strokeLinecap="round" />
					</svg>
			</button>
			<div  style={state ? { display: 'block' } : { display: 'none' }}><Filter /></div>
			{/* <ul className={style.dropcontent} style={state ? { display: 'block' } : { display: 'none' }}>{genr}</ul> */}
		</div>
	)
}