import { GetPostList } from '../../Services/CardPostService'
import { AppGlobalDispatch } from '../globalStore'
import { PostType } from '../../Tools/types'

const ADD_POST = "ADD_POST"
const ADD_POST_LIST = "ADD_POST_LIST"
const CHANGE_TAB = "CHANGE_TAB"

type PostReducerType = {
	posts?: PostType[],
	singlePost?: PostType,
	tabTitle: string,
	like?: number
}

type ActionPostType = {
	type: string,
	payload: string | PostType | PostType[] | number
}

const defaultPostState: PostReducerType = {
	posts: [] as PostType[],
	tabTitle: "All"
}

export const postReducer = (state: PostReducerType = defaultPostState, action: ActionPostType): PostReducerType => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				singlePost: action.payload as PostType
			}
		case ADD_POST_LIST:
			return {
				...state,
				posts: action.payload as PostType[]
			}
		case CHANGE_TAB:
			return {
				...state,
				tabTitle: action.payload as string
			}
		default:
			return state
	}
}

export const changeTabAction = (tabTitle: string) => {
	return {
		type: CHANGE_TAB,
		payload: tabTitle
	}
}

export const loadPostAction = (post: PostType): ActionPostType => {
	return {
		type: ADD_POST,
		payload: post
	}
}

export const loadPostsAction = (post: PostType[]): ActionPostType => {
	return {
		type: ADD_POST_LIST,
		payload: post
	}
}

export const fetchPostAsyncAction = (limit: number = 5, offset: number = 0): any => {
	return (dispatch: AppGlobalDispatch) => {
		GetPostList(limit, offset)
			.then(post => dispatch(loadPostsAction(post)))
	}
}