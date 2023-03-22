import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { modalWinReducer } from '../components/Modal/Modal';
// import { popupReducer } from '../components/Popap/PopupReducer';
import { postReducer } from './PostReducer/PostReducer';
import thunkMiddleware from 'redux-thunk'
import { activateReducer, registerReducer } from './Register/reducer';
import { authReducer } from './Auth/reducer';
import { myPostReducer } from './posts/reducer';
import { myFavoritePostsReducer } from './MyFavoritePost/reducer';
import { getUserMeReducer } from './UserMe/reducer';
import { genreReducer } from './СhoiceGenre/reducer';
import { themeReducer } from './Theme/reduser';
import { searchReducer } from './SearchReducer/SearchReduser';

export const globalReducer = combineReducers({
	// modal: modalWinReducer,
	// popup: popupReducer,
	post: postReducer,
	register: registerReducer,
	activate: activateReducer,
	auth: authReducer,
	myPosts: myPostReducer,
	myFavoritePosts: myFavoritePostsReducer,
	userName: getUserMeReducer,
	genres: genreReducer,
	theme: themeReducer,
	searchValue: searchReducer
})

export const globalStore = configureStore({
	reducer: globalReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppGlobalState = ReturnType<typeof globalStore.getState>
export type AppGlobalDispatch = typeof globalStore.dispatch