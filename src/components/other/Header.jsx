import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello,<br /><span className='text-3xl font-semibold'>Alok</span></h1>
        <button className='p-2 rounded-lg bg-red-500  py-2 '>Logout</button>
    </div>
  )
}

export default Header