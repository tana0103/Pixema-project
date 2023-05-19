import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getTokenAsyncAction } from '../../AppGlobalStore/Auth/action'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import style from './SignIn.module.css'

export const SignInPage = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const fromPage = location.state?.from?.pathname || '/'

	const auth = useSelector((state: AppGlobalState) => state.auth)
	const dispatch = useDispatch()
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const email = e.currentTarget.email.value
		const password = e.currentTarget.password.value
		dispatch(getTokenAsyncAction(email, password, () => navigate(fromPage, { replace: true })))
	}

	return (
		<div className={style.fon}>
			{/* <div>
				{JSON.stringify(auth, null, 2)}
			</div> */}
			
			<form className={style.userform} onSubmit={handleSubmit}>
				<title className={style.title}>Sign In</title>
				<label >
					Email
				</label>
				<input type="email" name="email" placeholder="Your email" />
				<label >
					Password
				</label>
				<input  type="password" name="password" placeholder="Your password" />
				<label>Forgot password?</label>
				<button className={style.button}> Sign In</button>
				<h6>Don’t have an account? <span onClick={() => navigate('/user')}> Sign Up</span></h6>
			</form>
			<div className={style.footer}>
				<p>
					© All Rights Reserved
				</p>
			</div >
		</div>
	)
}
