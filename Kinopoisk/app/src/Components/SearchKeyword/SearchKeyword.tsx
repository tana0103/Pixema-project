import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { searchValueAction } from '../../AppGlobalStore/SearchReducer/SearchReduser'
import { API_KEY } from '../../Constants/Constants'
import { getMoviesSearch } from '../../Services/MovieService'
import { IMovie } from '../../tools/IMovie'
import { CardMovie } from '../CardMovie/CardMovie'
import style from './SearchKeyword.module.css'

export const SearchKeyword = () => {
	const valueSearch = useSelector((state: AppGlobalState) => state.searchValue.value)
	const [state, setState] = useState<IMovie[]>([])
	const [offsetState, setOffsetState] = useState(0)
	const [limitState, setlimitState] = useState(10)
	const nextPage = () => {
		setOffsetState(offsetState + 10)
		setlimitState(limitState + 10)
	}
	useEffect(() => {
		const pause = setTimeout(() => {
			if (valueSearch) {
				getMoviesSearch(API_KEY, valueSearch, limitState, offsetState)
					.then((movies: IMovie[]) => {
						setState(movies)
					})
			}
		}, 300)
		return () => clearTimeout(pause)

	}, [valueSearch, limitState, offsetState])

	return (
		<>
			<div className={style.container}>
				{state.map(movie =>
					(<CardMovie element={movie} key={movie.id} />)
				)}
			</div>
			<div className={style.page} onClick={nextPage}>
				<svg width="162" height="40" viewBox="0 0 162 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.5" width="161" height="40" rx="20" fill="#323537" />
					<path d="M29.012 14.768C29.5453 14.7787 30.0947 14.8053 30.66 14.848C31.236 14.8907 31.8067 14.976 32.372 15.104L32.26 16.24C31.8013 16.2187 31.284 16.2027 30.708 16.192C30.1427 16.1813 29.5933 16.176 29.06 16.176C28.6867 16.176 28.3667 16.1867 28.1 16.208C27.8333 16.2293 27.6147 16.288 27.444 16.384C27.2733 16.48 27.1453 16.6347 27.06 16.848C26.9853 17.0613 26.948 17.3547 26.948 17.728C26.948 18.2933 27.0547 18.6933 27.268 18.928C27.4813 19.152 27.828 19.3227 28.308 19.44L30.532 20.032C31.3853 20.2453 31.972 20.608 32.292 21.12C32.612 21.6213 32.772 22.2987 32.772 23.152C32.772 23.792 32.6973 24.3093 32.548 24.704C32.4093 25.0987 32.1853 25.4027 31.876 25.616C31.5773 25.8293 31.188 25.9787 30.708 26.064C30.228 26.1493 29.6573 26.192 28.996 26.192C28.6333 26.192 28.1533 26.176 27.556 26.144C26.9587 26.112 26.2707 26.0213 25.492 25.872L25.604 24.704C26.2333 24.7253 26.7453 24.7467 27.14 24.768C27.5453 24.7787 27.892 24.784 28.18 24.784C28.468 24.784 28.756 24.784 29.044 24.784C29.5773 24.784 29.9987 24.7467 30.308 24.672C30.6173 24.5867 30.836 24.4267 30.964 24.192C31.092 23.9467 31.156 23.5947 31.156 23.136C31.156 22.7413 31.108 22.432 31.012 22.208C30.9267 21.984 30.7827 21.8187 30.58 21.712C30.388 21.5947 30.1373 21.4987 29.828 21.424L27.54 20.8C26.74 20.576 26.1747 20.2133 25.844 19.712C25.5133 19.2107 25.348 18.544 25.348 17.712C25.348 17.072 25.4173 16.5547 25.556 16.16C25.7053 15.7653 25.9293 15.472 26.228 15.28C26.5267 15.0773 26.9053 14.944 27.364 14.88C27.8227 14.8053 28.372 14.768 29.012 14.768ZM39.6425 18C41.0612 18 41.7705 18.7147 41.7705 20.144V26H40.2025V20.592C40.2025 20.1013 40.1225 19.7653 39.9625 19.584C39.8132 19.392 39.5465 19.296 39.1625 19.296C38.7038 19.296 38.2452 19.4027 37.7865 19.616C37.3278 19.8187 36.7785 20.1227 36.1385 20.528L36.0585 19.504C36.6558 19.0347 37.2532 18.6667 37.8505 18.4C38.4585 18.1333 39.0558 18 39.6425 18ZM36.2985 14.8L36.3145 17.824C36.3145 18.1867 36.2985 18.528 36.2665 18.848C36.2452 19.168 36.2025 19.4507 36.1385 19.696L36.2985 19.92V26H34.7625V14.8H36.2985ZM47.4979 18C48.4152 18 49.1459 18.1333 49.6899 18.4C50.2445 18.6667 50.6392 19.104 50.8739 19.712C51.1192 20.3093 51.2419 21.104 51.2419 22.096C51.2419 23.0987 51.1192 23.904 50.8739 24.512C50.6392 25.1093 50.2445 25.5413 49.6899 25.808C49.1459 26.0747 48.4152 26.208 47.4979 26.208C46.5912 26.208 45.8605 26.0747 45.3059 25.808C44.7619 25.5413 44.3672 25.1093 44.1219 24.512C43.8765 23.904 43.7539 23.0987 43.7539 22.096C43.7539 21.104 43.8765 20.3093 44.1219 19.712C44.3672 19.104 44.7619 18.6667 45.3059 18.4C45.8605 18.1333 46.5912 18 47.4979 18ZM47.4979 19.248C46.9645 19.248 46.5432 19.3333 46.2339 19.504C45.9245 19.6747 45.7059 19.968 45.5779 20.384C45.4499 20.7893 45.3859 21.36 45.3859 22.096C45.3859 22.832 45.4499 23.408 45.5779 23.824C45.7059 24.24 45.9245 24.5333 46.2339 24.704C46.5432 24.864 46.9645 24.944 47.4979 24.944C48.0312 24.944 48.4525 24.864 48.7619 24.704C49.0819 24.5333 49.3059 24.24 49.4339 23.824C49.5619 23.408 49.6259 22.832 49.6259 22.096C49.6259 21.36 49.5619 20.7893 49.4339 20.384C49.3059 19.968 49.0819 19.6747 48.7619 19.504C48.4525 19.3333 48.0312 19.248 47.4979 19.248ZM64.9113 18.192L62.7033 25.568C62.6713 25.696 62.6019 25.8027 62.4953 25.888C62.3886 25.9627 62.2659 26 62.1273 26H60.7833C60.6446 26 60.5166 25.9573 60.3993 25.872C60.2926 25.776 60.2286 25.6587 60.2073 25.52L59.0073 20.368C58.9646 20.1653 58.9219 19.9627 58.8793 19.76C58.8473 19.5573 58.8046 19.344 58.7513 19.12H58.5593C58.5273 19.344 58.4846 19.5573 58.4313 19.76C58.3886 19.9627 58.3459 20.1653 58.3033 20.368L57.1193 25.52C57.0873 25.6587 57.0179 25.776 56.9113 25.872C56.8046 25.9573 56.6713 26 56.5113 26H55.1993C55.0606 26 54.9379 25.9627 54.8313 25.888C54.7246 25.8027 54.6553 25.696 54.6233 25.568L52.3993 18.192H53.9993L55.5193 23.808C55.5619 24.0107 55.6046 24.2133 55.6473 24.416C55.6899 24.608 55.7273 24.8053 55.7593 25.008H55.9673C56.0099 24.8053 56.0526 24.608 56.0953 24.416C56.1486 24.2133 56.1966 24.0107 56.2393 23.808L57.4553 18.672C57.4766 18.5333 57.5353 18.4213 57.6313 18.336C57.7379 18.24 57.8713 18.192 58.0313 18.192H59.3113C59.4606 18.192 59.5833 18.24 59.6793 18.336C59.7859 18.4213 59.8553 18.5387 59.8873 18.688L61.0873 23.808C61.1299 24.0107 61.1726 24.2133 61.2153 24.416C61.2579 24.608 61.3006 24.8053 61.3433 25.008H61.5513C61.6046 24.8053 61.6473 24.608 61.6793 24.416C61.7113 24.224 61.7539 24.0213 61.8073 23.808L63.3273 18.192H64.9113ZM79.3153 18C79.9979 18 80.5153 18.1813 80.8673 18.544C81.2299 18.9067 81.4113 19.44 81.4113 20.144V26H79.8753V20.592C79.8753 20.144 79.7846 19.8187 79.6033 19.616C79.4326 19.4027 79.1393 19.296 78.7233 19.296C78.4673 19.296 78.2219 19.3387 77.9873 19.424C77.7526 19.5093 77.4913 19.6427 77.2033 19.824C76.9153 19.9947 76.5686 20.2293 76.1633 20.528L76.0833 19.488C76.6379 18.9867 77.1766 18.6133 77.6993 18.368C78.2219 18.1227 78.7606 18 79.3153 18ZM70.9953 18.192L71.1073 19.696L71.2673 19.92V26H69.7313V18.192H70.9953ZM74.2433 18C74.9153 18 75.4273 18.1813 75.7793 18.544C76.1313 18.896 76.3126 19.4293 76.3233 20.144V26H74.8353V20.592C74.8353 20.1227 74.7393 19.792 74.5473 19.6C74.3553 19.3973 74.0673 19.296 73.6833 19.296C73.4273 19.296 73.1819 19.3387 72.9473 19.424C72.7126 19.4987 72.4459 19.6267 72.1473 19.808C71.8593 19.9787 71.5073 20.2187 71.0913 20.528L70.9953 19.488C71.5499 18.9867 72.0886 18.6133 72.6113 18.368C73.1339 18.1227 73.6779 18 74.2433 18ZM87.1385 18C88.0558 18 88.7865 18.1333 89.3305 18.4C89.8852 18.6667 90.2798 19.104 90.5145 19.712C90.7598 20.3093 90.8825 21.104 90.8825 22.096C90.8825 23.0987 90.7598 23.904 90.5145 24.512C90.2798 25.1093 89.8852 25.5413 89.3305 25.808C88.7865 26.0747 88.0558 26.208 87.1385 26.208C86.2318 26.208 85.5012 26.0747 84.9465 25.808C84.4025 25.5413 84.0078 25.1093 83.7625 24.512C83.5172 23.904 83.3945 23.0987 83.3945 22.096C83.3945 21.104 83.5172 20.3093 83.7625 19.712C84.0078 19.104 84.4025 18.6667 84.9465 18.4C85.5012 18.1333 86.2318 18 87.1385 18ZM87.1385 19.248C86.6052 19.248 86.1838 19.3333 85.8745 19.504C85.5652 19.6747 85.3465 19.968 85.2185 20.384C85.0905 20.7893 85.0265 21.36 85.0265 22.096C85.0265 22.832 85.0905 23.408 85.2185 23.824C85.3465 24.24 85.5652 24.5333 85.8745 24.704C86.1838 24.864 86.6052 24.944 87.1385 24.944C87.6718 24.944 88.0932 24.864 88.4025 24.704C88.7225 24.5333 88.9465 24.24 89.0745 23.824C89.2025 23.408 89.2665 22.832 89.2665 22.096C89.2665 21.36 89.2025 20.7893 89.0745 20.384C88.9465 19.968 88.7225 19.6747 88.4025 19.504C88.0932 19.3333 87.6718 19.248 87.1385 19.248ZM94.1188 18.192L94.3108 19.696L94.4548 19.92V26H92.9188V18.192H94.1188ZM97.9428 18L97.7828 19.44H97.2868C96.8494 19.44 96.4014 19.5253 95.9427 19.696C95.4948 19.8667 94.9454 20.112 94.2948 20.432L94.1828 19.488C94.7481 19.0187 95.3188 18.656 95.8948 18.4C96.4814 18.1333 97.0468 18 97.5908 18H97.9428ZM102.527 18C103.733 18 104.602 18.2187 105.135 18.656C105.679 19.0827 105.951 19.7173 105.951 20.56C105.962 21.264 105.807 21.808 105.487 22.192C105.178 22.576 104.671 22.768 103.967 22.768H99.4553V21.664H103.567C103.919 21.664 104.149 21.552 104.255 21.328C104.362 21.104 104.415 20.848 104.415 20.56C104.405 20.08 104.261 19.7387 103.983 19.536C103.717 19.3333 103.253 19.232 102.591 19.232C102.047 19.232 101.621 19.312 101.311 19.472C101.002 19.632 100.783 19.9093 100.655 20.304C100.538 20.6987 100.479 21.2533 100.479 21.968C100.479 22.768 100.554 23.3813 100.703 23.808C100.863 24.224 101.114 24.512 101.455 24.672C101.807 24.832 102.271 24.912 102.847 24.912C103.253 24.912 103.706 24.896 104.207 24.864C104.719 24.8213 105.183 24.7733 105.599 24.72L105.759 25.728C105.503 25.8347 105.194 25.9253 104.831 26C104.469 26.064 104.095 26.112 103.711 26.144C103.327 26.176 102.975 26.192 102.655 26.192C101.738 26.192 101.002 26.0533 100.447 25.776C99.8926 25.4987 99.4873 25.0613 99.2313 24.464C98.9753 23.856 98.8473 23.0613 98.8473 22.08C98.8473 21.056 98.9753 20.2453 99.2313 19.648C99.4873 19.0507 99.8873 18.6293 100.431 18.384C100.975 18.128 101.674 18 102.527 18Z" fill="white" />
					<path d="M124.953 12C121.774 13.1407 119.5 16.1842 119.5 19.7596C119.5 24.3106 123.185 28 127.73 28V28C131.322 28 134.376 25.6965 135.5 22.4844" stroke="#7B61FF" strokeWidth="2.5" strokeLinecap="round" />
				</svg>
			</div>
		</>
	)
}