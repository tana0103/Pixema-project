import style from './NameDiv.module.css'

interface INameType {
	user: string,
	name?: string
}

export const NameDiv = (props: INameType) => {
	return (
		<div className={style.user}>
			<div className={style.name}>
				{props.name}
			</div>
			<div>
				{props.user}
			</div>
		</div>
	)
}