import { tokenDto } from "../../Tools/types"

// type NewPasswordStateType = {
// 	password: string,
// 	newPassword: string,
// 	tokens: tokenDto
// }

// const defaultUserState: NewPasswordStateType = {
// 	password: '',
// 	newPassword: '',
// 	token: {
// 		access: '',
// 		refresh: ''
// 	}
// }
// export const NewPasswordReducer = (state: NewPasswordStateType = defaultUserState, action: NewPasswordActionType): NewPasswordStateType => {
// 	switch (action.type) {
// 		case CHANGE_PASSWORD:
// 			return {
// 				...state,
// 				password: action.password,
// 				newPassword: action.newPassword,
// 				token: action.token
// 			}
// 		default:
// 			return state
// 	}
// }