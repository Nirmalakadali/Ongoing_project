import React from 'react';
import { Header } from '../../components';
import { Outlet } from 'react-router-dom';
import './Home.scss';
const Home = () => {
  return (
   <main>
    <Header/>
    <Outlet/>
   </main>
  )
}

export default Home