import React from 'react'
import { Todo } from '../models/model'
import { AiOutlineDelete, AiOutlineEdit, AiFillCheckCircle } from 'react-icons/ai'

interface Props {
    todos: Todo[];
    deleteTask: (id: any) => void;
    updateTask: (id: any) => void;
}



export const ShowTodo: React.FC<Props> = ({ todos, deleteTask, updateTask }: Props) => {
    return (
        <section className=' flex min-h-[20rem] w-full'>

            <article className='w-1/2 '>
                {todos.map((todo) =>!todo.isDone &&<div key={todo.id} className='bg-yellow-100 flex  justify-center items-center rounded-md w-10/12 mx-auto p-3  my-2 text-xl'>

                        <span className=' text-xl font-semibold ml-5' >  {todo.todo} </span>
                        <p className='flex  w-4/12 ml-auto justify-center  gap-x-8 items-center'>
                            <span className='  outline hover:bg-yellow-500 hover:text-[white] rounded-md outline-yellow-500 outline-[2px] text-yellow-500  p-2 m-1'> <AiOutlineEdit /> </span>
                            <span
                                onClick={() => updateTask(todo.id)}
                                className=' outline hover:bg-[green] hover:text-white rounded-md outline-[green] outline-[2px] text-[green] p-2 m-1'> <AiFillCheckCircle /> </span>
                            <span
                                onClick={() => deleteTask(todo.id)}
                                className=' outline hover:bg-[red] hover:text-white rounded-md outline-[red] outline-[2px] text-[red] p-2 m-1'> <AiOutlineDelete /> </span>
                        </p>
                    </div>
                )
                }
            </article>




            <article className='w-1/2 '>
                {todos.map((todo) => todo.isDone && <div key={todo.id} className='bg-green-400 flex  justify-center items-center rounded-md w-10/12 mx-auto p-3  my-2 text-xl'>
                        <span className='ext-xl font-semibold ml-5' >  {todo.todo} </span>
                        <p className='flex  w-4/12 ml-auto justify-center  gap-x-8 items-center'>
                            <span
                                onClick={() => deleteTask(todo.id)}
                                className=' outline hover:bg-[red] hover:text-white rounded-md outline-[red] outline-[2px] text-[red] p-2 m-1'> <AiOutlineDelete /> </span>
                        </p>
                    </div>
                )
                }
            </article>
        </section>
    )
}
