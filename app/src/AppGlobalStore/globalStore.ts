import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import { activateReducer, registerReducer } from './Register/reducer';
import { authReducer } from './Auth/reducer';
import { getUserMeReducer } from './UserMe/reducer';
import { genreReducer } from './СhoiceGenre/reducer';
import { themeReducer } from './Theme/reduser';
import { searchReducer } from './SearchReducer/reduser';
import { myFavoriteMoviesReducer } from './MyFavoriteMovies/reducer';
import { filterReducer } from './FilterReducer/reducer';

export const globalReducer = combineReducers({
	register: registerReducer,
	activate: activateReducer,
	auth: authReducer,
	myFavoriteMovies: myFavoriteMoviesReducer,
	userName: getUserMeReducer,
	genres: genreReducer,
	theme: themeReducer,
	searchValue: searchReducer,
	filter: filterReducer
})

export const globalStore = configureStore({
	reducer: globalReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppGlobalState = ReturnType<typeof globalStore.getState>
export type AppGlobalDispatch = typeof globalStore.dispatch