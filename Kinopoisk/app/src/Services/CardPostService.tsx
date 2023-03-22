import { PostType, ResType } from '../Tools/types'

export interface IPost {
	id: number
	title: string
	text: string
	date: Date
	image: string
}

const url = 'https://studapi.teachmeskills.by/blog/posts/'

export const GetPostList = (limit: number, offset: number = 0): Promise<PostType[]> => {
	return fetch(url + '?limit=' + limit + '&offset=' + offset)
		.then(response => response.json())
		.then((response: ResType) => (response.results))
}


export const GetPostSearch = (search: string) => {
	return fetch(url + '?search=' + search + '&limit=10')
		.then(response => response.json())
		.then((response: ResType) => (response.results))
}

export const GetPostId = (id: number) => {
	return fetch(url + id)
		.then(response => response.json())
		.then((response: ResType) => (response.results))
}
export const getPostById = (id: string = '1') => {
	return fetch('https://mockside.vercel.app/api/posts/' + id)
		.then(res => res.json())
		.then((response: IPost) => response)
}

export const getPosts = () => {
	return fetch('https://mockside.vercel.app/api/posts')
		.then(res => res.json())
		.then((response: IPost[]) => response)
}