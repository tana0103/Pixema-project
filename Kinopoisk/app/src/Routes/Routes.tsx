import React from 'react'
import { Route, Routes } from 'react-router';
import { Activate } from '../Components/Activate/Activate';
import { NotFound } from '../Components/NotFound/NotFound';
import { Profile } from '../Components/Profile/Profile';
import { RegConfirm } from '../Components/RegConfirm/RegConfirm';
import { SearchKeyword } from '../Components/SearchKeyword/SearchKeyword';
import { ShowCardSearch } from '../Components/ShowCardSearch/ShowCardSearch';
import { SignInPage } from '../Components/SignIn/SignIn';
import { SignUp } from '../Components/SignUp/SignUp';
import { TitlePage } from '../Components/TitlePage/TitlePage';
import { TrendsCard } from '../Components/TrendsCard/TrendsCard';
import { Layout } from '../Layout/Layout';
import { Navigate } from "react-router-dom";

export const Routs = () => {
  return (
	  <Routes>
		  <Route path='/' element={<Layout />} >
			  <Route index element={<TitlePage />} />
			  <Route path='home' element={<Profile />} />
			  <Route path='trends' element={<TrendsCard />} />
			  <Route path='search' element={<ShowCardSearch />} />
			  <Route path='search/id' element={<ShowCardSearch />} />
			  <Route path='user' element={<SignUp />} />
			  <Route path='confirm' element={<RegConfirm />} />
			  <Route path='activate/:uid/:token' element={<Activate />} />
			  <Route path='about-us' element={<Navigate to={'/about'} replace />} />
			  {/* <Route path='user/logout' element={<LogOut />} />*/}
			  <Route path='search/keyword' element={<SearchKeyword />} />
			  <Route path='login' element={<SignInPage />} /> 
			  <Route path='*' element={<NotFound />} />
		  </Route>
	  </Routes>
  )
}
