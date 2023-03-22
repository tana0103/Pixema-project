import React from 'react'
import { PropsNavType } from '../../../Tools/Tools'

export const Burger = (props: PropsNavType) => {
  return (
	<svg className={props.className}  width="56" height="59" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <rect width="56" height="56" rx="10" fill="#06365f"/>
		<path d="M21 22L35 22M21 28H35M21 34H35" stroke="white" stroke-width="2" stroke-linecap="round"/>
	</svg>
  )
}
