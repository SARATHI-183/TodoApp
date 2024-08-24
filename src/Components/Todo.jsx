import React, { useRef, useState } from 'react'
import TodoItems from './TodoItems'

const Todo = () => {
    const [todoList ,SetTodoList]=useState([]);

    const inputRef = useRef();
    //add new task
    const addTask =() =>{
        const inputText = inputRef.current.value.trim();
        if(inputText === ""){
            return null;
        }
        const newTodo ={
            id:Date.now(),
            text: inputText,
            isComplete: false,
        };

        SetTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value="";
    };

    //update task
    const toggleTask =(id)=>{
        SetTodoList((prev)=>{
            return prev.map((todo)=>{
                if(id===todo.id){
                    return {...todo, isComplete: !todo.isComplete};
                }
                return todo;
            })
        })
    }

    //delete task
    const deleteTask =(id)=>{
        SetTodoList((prev)=>{
            return prev.filter((todo)=> todo.id !== id);
        });
    };

  return (
    <>
        <div className='w-[30em]'>
            <h1 className='font-medium text-lg my-2 text-amber-500'>To-do List</h1>  
            <div className="flex gap-2">
                <div className='flex-1'>
                    <input ref={inputRef} type="text" className='py-3 px-4 w-full text-sm border focus:outline-none focus:border-amber-500' placeholder="Add your task" id="" />
                </div>
                <button className='py-3 px-4 bg-blue-600 hover:bg-blue-700 text-sm rounded-sm font-medium text-white border-none' onClick={addTask}>Add task</button>
            </div>
            <p className='text-zinc-400 my-3 px-1 text-sm'>
                Fill task details
            </p>
        </div>
        <div className='w-[302m] bg-white shadow py-6 px-4'>
            <fieldset className='space-y-3'>
                <legend className='text-pink-600 font-medium'>List of tasks</legend>
                {/* items list */}
                {
                    todoList.length===0 ? (
                        <p className='text-gray-500 text-sm'>No tasks found</p>
                    ):(
                        todoList.map((todo,index)=>{
                            return <TodoItems text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTodo={toggleTask} deleteTodo={deleteTask}/>
                        })
                    )
                }
                
            </fieldset>

        </div>
    </>
    
  )
}

export default Todo