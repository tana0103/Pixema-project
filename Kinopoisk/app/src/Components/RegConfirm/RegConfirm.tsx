import style from './RegConfirm.module.css'

export const RegConfirm = () => {
	return (
		<div >
			<div className={style.divtitle}>Registration Confirmation</div>
			<form className={style.form}>
				<h6>Please activate your account with the activation link in the email example@gmail.com.Please, check your email</h6>
				<button className={style.btnconfirm}>Go to home</button>
			</form>
		</div>
	)
}
