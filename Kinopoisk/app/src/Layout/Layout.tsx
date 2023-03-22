import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from "react-router-dom";
import { AppGlobalState } from '../AppGlobalStore/globalStore';
import { LeftMenu } from '../Components/LeftMenu/LeftMenu';
import { Burger } from '../Components/Navbar/Burger/Burger';
import { Logo } from '../Components/Navbar/Logo/Logo';
import { Search } from '../Components/Navbar/Search/Search';
import { NameDiv } from '../Components/Navbar/User/NameDiv';
import { User } from '../Components/Navbar/User/User';
import { UserBtn } from '../Components/Navbar/User/UserBtn';
import style from './Layout.module.css'


export const Layout = () => {
	
	const userName = useSelector((state: AppGlobalState) => state.userName)
	console.log(userName);
	console.log(userName.username)

	const userIcon = () => {
		if ('' || !userName.username) {
			return <UserBtn />
		} else {
			return <NameDiv name={userName.username.slice(0, 1).toLocaleUpperCase()} user={userName.username} />
		}
	}

  return (
	  <div className={style.layout}>
		  <header>
		  		<nav className={style.nav}>
			   <Logo className={style.logo} />
			   <Burger className={style.burger} />
				<Search className={style.search} />
			   <NavLink to='/login' className={style.user}>
					{userIcon}
			   </NavLink>
		  		</nav>
		  		<nav>
			  		<LeftMenu className={style.leftmenu} />
			  </nav>
		  </header>
	
		  <main >
			  <Outlet />
		  </main>

	  </div>
  )
}
