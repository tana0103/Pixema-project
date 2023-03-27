import React from 'react'
import { Link } from 'react-router-dom'
import style from './Home.module.css'

export const Home = () => {
  return (
	  <Link to="/" className={style.link}>
		  <article>
			  	<svg width="35" height="18" viewBox="7 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			  		<path fillRule="evenodd" clipRule="evenodd" d="M11.4537 0.803197L16.4558 4.49793C17.4198 5.1956 17.9934 6.31112 18 7.50109V14.1895C17.938 16.3342 16.1566 18.0268 14.0116 17.979H3.99789C1.8492 18.032 0.0619475 16.338 0 14.1895V7.50109C0.00659331 6.31112 0.580187 5.1956 1.54421 4.49793L6.54632 0.803197C8.00682 -0.267732 9.99318 -0.267732 11.4537 0.803197ZM4.73684 13.9716H13.2632C13.6556 13.9716 13.9737 13.6535 13.9737 13.2611C13.9737 12.8687 13.6556 12.5506 13.2632 12.5506H4.73684C4.34443 12.5506 4.02632 12.8687 4.02632 13.2611C4.02632 13.6535 4.34443 13.9716 4.73684 13.9716Z" fill="#80858B" />
		  		</svg>
			  	Home
		  </article>
		  {/* <h2>Home</h2> */}
	  </Link>
  )
}
