import React from 'react'

const TaskList = () => {
  return (

    <div id='taskList' className='h-[55%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-start flex-nowrap gap-5'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl  '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded-lg text-sm text-white'>High</h3>
            <h4 className='text-sm'>20 Mar 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold text-white'>Make a youtube video</h2>
          <p className='text-sm mt-2  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur reiciendis ullam. Asperiores, sunt ut?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-orange-400 rounded-xl  '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded-lg text-sm text-white'>High</h3>
            <h4 className='text-sm'>20 Mar 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold text-white'>Make a youtube video</h2>
          <p className='text-sm mt-2  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur reiciendis ullam. Asperiores, sunt ut?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl  '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded-lg text-sm text-white'>High</h3>
            <h4 className='text-sm'>20 Mar 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold text-white'>Make a youtube video</h2>
          <p className='text-sm mt-2  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur reiciendis ullam. Asperiores, sunt ut?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl  '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded-lg text-sm text-white'>High</h3>
            <h4 className='text-sm'>20 Mar 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold text-white'>Make a youtube video</h2>
          <p className='text-sm mt-2  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur reiciendis ullam. Asperiores, sunt ut?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-violet-400 rounded-xl  '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded-lg text-sm text-white'>High</h3>
            <h4 className='text-sm'>20 Mar 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold text-white'>Make a youtube video</h2>
          <p className='text-sm mt-2  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur reiciendis ullam. Asperiores, sunt ut?</p>
        </div>
        

    </div>
  )
}

export default TaskList