import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { activateUserAsyncAction } from '../../AppGlobalStore/Register/action'

export const Activate = () => {
	const { uid, token } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const activate = useSelector((state: AppGlobalState) => state.activate)
	useEffect(() => {
		if (uid && token) {
			dispatch(activateUserAsyncAction(uid, token, () => navigate('/success')))
		}
	}, [uid, token, navigate, dispatch])

	return (
		<div>
			Activation {JSON.stringify(activate)}
		</div>
	)
}
