import { ActionFilterType, FILTER_VALUE } from "./action"

type FilterType = {
	valueNameFilter: string | null,
	yearFilterFrom: number | null,
	yearFilterTo: number | null,
	ratingFilterFrom: number | null,
	ratingFilterTo: number | null,
	countryFilter: string | null,
	genre: string|null
}

const defaultFilterState: FilterType = {
	valueNameFilter:  null,
	yearFilterFrom:  null,
	yearFilterTo:  null,
	ratingFilterFrom:  null,
	ratingFilterTo:  null,
	countryFilter: null,
	genre: null
}

export const filterReducer = (state: FilterType = defaultFilterState, action: ActionFilterType): FilterType => {
	switch (action.type) {
		case FILTER_VALUE:
			return {
				...state,
				valueNameFilter: action.valueNameFilter,
				yearFilterFrom: action.yearFilterFrom,
				yearFilterTo: action.yearFilterTo,
				ratingFilterFrom: action.ratingFilterFrom,
				ratingFilterTo: action.ratingFilterTo,
				countryFilter: action.countryFilter,
				genre: action.genre
			}
		default:
			return state
	}
}