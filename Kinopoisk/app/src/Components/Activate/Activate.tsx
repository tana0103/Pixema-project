import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { activateUserAsyncAction } from '../../AppGlobalStore/Register/action'

//http://studapi.teachmeskills.by//activate/NTgyNg/bjf3b5-9192e600a3e154f983b8d893c943a3ab
//http://localhost:3000/activate/NTgyNg/bjf3b5-9192e600a3e154f983b8d893c943a3ab
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
