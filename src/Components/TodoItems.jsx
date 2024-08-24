import React from 'react'

const TodoItems = ({text , isComplete , id , toggleTodo , deleteTodo}) => {
  return (
    <div className='flex gap-2 justify-between items-center'>
        <label className={`flex-1 hover:bg-slate-100 rounded-md cursor-pointer select-none p-2 ${isComplete? "line-through text-slate-600":""}`} onClick={ ()=> toggleTodo(id)}>{ text }</label>
        <div>
            <div className=' hover:bg-red-50 p-1 rounded-md' onClick={()=>deleteTodo(id)}>
                <svg  className='hover:fill-red-700 size-[26px]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </div>
    </div>
  )
}

export default TodoItems;