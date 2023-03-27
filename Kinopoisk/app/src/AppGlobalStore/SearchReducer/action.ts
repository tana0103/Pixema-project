export const SEARCH_VALUE = "SEARCH_VALUE"

export type ActionSearchType = {
	type: string,
	value: string
}

export const searchValueAction = (value: string): ActionSearchType => {
	return {
		type: SEARCH_VALUE,
		value: value
	}
}