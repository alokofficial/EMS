import React from 'react'
import Login from '../Auth/Login';
import { setLocalStorage } from '../../utils/localStorage';

const Header = () => {

  const logoutUser = () => {
    localStorage.setItem('loggedInUser','')
    window.location.reload()

  }
  return (
    <div className='text-white flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello,<br /><span className='text-3xl font-semibold'>" "</span></h1>
        <button className='p-2 rounded-lg bg-red-500  py-2 pointer ' onClick={logoutUser} >Logout</button>
    </div>
  )
}

export default Header