const SEARCH_VALUE = "SEARCH_VALUE"

type SearchType = {
	value: string|null
}

type ActionSearchType = {
	type: string,
	value: string 
}

const defaultSearchState: SearchType = {
	value: ''
}

export const searchReducer = (state: SearchType = defaultSearchState, action: ActionSearchType): SearchType => {
	switch (action.type) {
		case SEARCH_VALUE:
			return {
				...state,
				value: action.value
			}
		default:
			return state
	}
}

export const searchValueAction = (value:string): ActionSearchType => {
	return {
		type: SEARCH_VALUE,
		value: value
	}
}

