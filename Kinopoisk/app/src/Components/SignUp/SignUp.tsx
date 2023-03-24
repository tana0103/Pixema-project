import style from './SignUp.module.css'
import { useState } from 'react'
import { RegConfirm } from '../RegConfirm/RegConfirm'
import { useNavigate } from 'react-router-dom'
import Validator from 'fastest-validator'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { registerUserAsyncAction } from '../../AppGlobalStore/Register/action'
import { writeUserAction } from '../../AppGlobalStore/User/action'


const registerUserValidationSchema = {
	username: { type: 'string', min: 6, max: 48 },
	email: { type: 'email' },
	password: { type: 'string', min: 4, max: 16 }
}

export const check = (schema: Object, data: Object) => {
	const validator = new Validator()
	const compiledValidator = validator.compile(schema)
	return compiledValidator(data)
}

export const SignUp = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const register = useSelector((state: AppGlobalState) => {
		return state.register
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const result = check(registerUserValidationSchema, {
			username: e.currentTarget.username.value,
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value
		})

		console.log(result)
		if (result === true) {
			dispatch(registerUserAsyncAction(
				e.currentTarget.username.value,
				e.currentTarget.email.value,
				e.currentTarget.password.value,
				() => navigate('/confirm')
			))
		}

		const username = e.currentTarget.username.value
		const email = e.currentTarget.email.value
		const password = e.currentTarget.password.value

		dispatch(registerUserAsyncAction(username, email, password, () => navigate('/confirm')))
		//()=> navigate('/confirm')
	}

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		chekPassword: ''
	})

	const [showConfirm, setShowConfirm] = useState(false)
	const chekPassword = () => {
		setShowConfirm(formData.password !== formData.chekPassword)
	}

	const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setFormData({
			...formData,
			name: currentValue
		})
	}

	const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setFormData({
			...formData,
			email: currentValue
		})
	}

	const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setFormData({
			...formData,
			password: currentValue
		})
	}

	const changePasswordChek = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.currentTarget.value
		setFormData({
			...formData,
			chekPassword: currentValue
		})
	}

	if (showConfirm) {
		return <RegConfirm />
	}

	// console.log(!register.isRegistered
	// 	? JSON.stringify(register.errors)
	// 	: null);
	console.log(JSON.stringify(register.isRegistered));
	
	return (
		<>
			{/* {
				!register.isRegistered
					? JSON.stringify(register.errors)
					: null
			} */}
			{/* <div>{JSON.stringify(register.isRegistered)}</div> */}

			{/* <div className={style.nav} onClick={() => navigate('/')}>Back to home</div>
			<title className={style.title}>Sign Up</title> */}
			<form className={style.form} onSubmit={handleSubmit}>
				<title className={style.title}>Sign Up</title> 
				<label className={style.label}>Name</label>
				<input type="text" name="username" placeholder="Your name" value={formData.name} onChange={changeName} />
				<label>Email</label>
				<input type="email" name="email" placeholder="Your email" value={formData.email} onChange={changeEmail} />
				<label>Password</label>
				<input type="password" name="password" placeholder="Your password" value={formData.password} onChange={changePassword} />
				<label>Confirm your password</label>
				<input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.chekPassword} onChange={changePasswordChek} />
				<button className={style.button} type="submit" onClick={chekPassword} onChange={() => { dispatch(writeUserAction(formData.name)) }}>Sign Up</button>
				<h6>Already have an account?<span onClick={() => navigate('/login')}> Sign In</span></h6>
			</form>
			{/* <a>{formData.name}</a> */}
			
			<div className={style.footer}>
				<p>
					© All Rights Reserved
				</p>
			</div >
		</>
	)
}