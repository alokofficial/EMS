import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (

    <div id='taskList' className='h-[55%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-start flex-nowrap gap-5'>
        {data.tasks.map((item, index) => {
            if(item.active){
              return <AcceptTask data={item} key={index} />
            }
            else if(item.completed){
              return <CompleteTask data={item} key={index} />
            }
            else if(item.failed){
              return <FailedTask data={item} key={index} />
            }
            else{
              return <NewTask data={item} key={index} />
            }
        })}
        

    </div>
  )
}

export default TaskList