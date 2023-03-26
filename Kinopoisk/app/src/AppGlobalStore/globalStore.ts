import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { modalWinReducer } from '../components/Modal/Modal';
// import { popupReducer } from '../components/Popap/PopupReducer';
import { postReducer } from './PostReducer/PostReducer';
import thunkMiddleware from 'redux-thunk'
import { activateReducer, registerReducer } from './Register/reducer';
import { authReducer } from './Auth/reducer';
import { myPostReducer } from './posts/reducer';
import { getUserMeReducer } from './UserMe/reducer';
import { genreReducer } from './СhoiceGenre/reducer';
import { themeReducer } from './Theme/reduser';
import { searchReducer } from './SearchReducer/SearchReduser';
import { myFavoriteMoviesReducer } from './MyFavoriteMovies/reducer';
import { filterReducer } from './FilterReducer/reducer';

export const globalReducer = combineReducers({
	// modal: modalWinReducer,
	// popup: popupReducer,
	post: postReducer,
	register: registerReducer,
	activate: activateReducer,
	auth: authReducer,
	myPosts: myPostReducer,
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