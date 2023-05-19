import { useNavigate } from 'react-router-dom'
import style from './RegConfirm.module.css'

export const RegConfirm = () => {
	const navigate = useNavigate()
	return (
		<div >
			<div className={style.divtitle}>Registration Confirmation</div>
			<form className={style.form}>
				<h6>Please activate your account with the activation link in the email example@gmail.com.Please, check your email</h6>
				<button className={style.btnconfirm} onClick={()=>navigate('/user')}>Go to home</button>
			</form>
		</div>
	)
}
