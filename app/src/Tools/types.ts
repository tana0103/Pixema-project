// export type PostType = {
// 	"id": number,
// 	"image": string,
// 	"text": string,
// 	"date": string,
// 	"lesson_num"?: number,
// 	"title": string,
// 	"author": number
// }

// export type ResType = {
// 	count: number,
// 	next?: string,
// 	results: PostType[]
// }

export type UserType = {
	username: string
	email: string
	id: number
}

export type BaseActionType = {
	type: string
}

export type ObjectListType = {
	[key: string]: string[]
}

export type tokenDto = {
	access: string,
	refresh: string
}

export type PropsNavType = {
	className: string
}