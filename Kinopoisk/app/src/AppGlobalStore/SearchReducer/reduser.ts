import { ActionSearchType, SEARCH_VALUE } from "./action"

type SearchType = {
	value: string|null
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