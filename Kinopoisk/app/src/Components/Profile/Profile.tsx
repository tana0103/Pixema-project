import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { newPasswordAsyncAction } from '../../AppGlobalStore/ChangePassword/action'
import { darkThemeAction, lightThemeAction } from '../../AppGlobalStore/Theme/reduser'
import style from './Profile.module.css'

export const Profile = () => {
	const dispatch = useDispatch()
	const [stateRangeValue, setStateRangeValue] = useState(100)
	const navigate = useNavigate()
	const params = useParams()
	const {uid, token} = params
	
	const changeRangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = +e.currentTarget.value
		setStateRangeValue(currentValue)
	}

	if (stateRangeValue == 100) {
		dispatch(darkThemeAction())
	} else {
		dispatch(lightThemeAction())
	}
	

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const changePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setFormData({
			...formData,
			password: currentValue
		})
	}

	const changeConfirmPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setFormData({
			...formData,
			confirmPassword: currentValue
		})
	}
	
	const changePassword = () => {
		if (formData.password === formData.confirmPassword) {
			dispatch(newPasswordAsyncAction(params.uid!, formData.confirmPassword, () => navigate('login')))
		}
	}

  return (
	  <form className={style.formprofile}>
		  <title className={style.title}>Profile</title>
		  <div className={style.blok1}>
			  <label className={style.namelabel}>Name
				  <input className={style.input} />
			  </label >
			  <label className={style.namelabel}>Email
				  <input className={style.input} />
			  </label>
		  </div>
		  <title className={style.title}>Password</title>
		  <div className={style.blok2}>
			  <label className={style.namelabel}>New password
				  <input className={style.input} />
			  </label >
			  <label className={style.namelabel}>Password
				  <input className={style.input} value={formData.password} onChange={changePasswordValue} />
			  </label>
			  <label className={style.namelabel} >Confirm password
				  <input className={style.input} value={formData.confirmPassword} onChange={changeConfirmPasswordValue} />
			  </label>
		  </div>
		  <div><button onClick={changePassword}>ChangePassword</button></div>
		  <title className={style.title}>Color mode</title>
		  <div className={style.blok1}>
			  <div className={style.dark}>
				  <h2>Dark</h2>
				  <h4> Use dark thema</h4>
			  </div>
			  <div className={style.range}>
				  off
				  <input type='range' step='5' min={0} max={100} className={style.inputrange}
					  value={+stateRangeValue} onChange={(e) => changeRangeValue(e)} />
				 on
			  </div>
		  </div>
		  <div></div>
	 </form>
  )
}
