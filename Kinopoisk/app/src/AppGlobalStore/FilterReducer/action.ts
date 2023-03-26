export const FILTER_VALUE = "FILTER_VALUE"

export type ActionFilterType = {
	type: string,
	valueNameFilter: string | null,
	yearFilterFrom: number | null,
	yearFilterTo: number | null,
	ratingFilterFrom: number | null,
	ratingFilterTo: number | null,
	countryFilter: string | null,
	genre: string|null
}

export const filterAction = (nameMovie: string | null, yearFrom: number | null,
	yearTo: number | null, ratingFrom: number | null, ratingTo: number | null,
	country: string | null, genre: string|null): ActionFilterType => {
	return {
		type: FILTER_VALUE,
		valueNameFilter: nameMovie,
		yearFilterFrom: yearFrom,
		yearFilterTo: yearTo,
		ratingFilterFrom: ratingFrom,
		ratingFilterTo: ratingTo,
		countryFilter: country,
		genre: genre
	}
}