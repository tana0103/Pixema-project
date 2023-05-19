export const WRITE_USER = "WRITE_USER"

export type WriteUserActionType =  {
	type: string
	payload:string
}

export const writeUserAction = (user: string): WriteUserActionType => {
	return {
		type: WRITE_USER,
		payload: user
	}
}