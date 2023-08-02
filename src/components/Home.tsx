import React, { useState } from 'react'
import { Form } from './Form'
import { Todo } from '../models/model'
import { ShowTodo } from './ShowTodo'

export const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  // cons

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  const deleteTask = (id: any) => {
    const updatedItems = todos.filter((item) => item.id !== id);
    setTodos(updatedItems);
  }
  const updateTask = (id: any) => {
    const updatedItems = todos.map((item) =>
      item.id === id ? { ...item, isDone: true } : item
    );
    setTodos(updatedItems);
  }




  console.log(todos)

  return (
    <div className=' m-4 p-2 '>

      <div className='text-3xl font-mono font-semibold text-center py-3 my-4'>Taskfiy</div>
      <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <ShowTodo todos={todos} deleteTask={deleteTask} updateTask={updateTask} />


    </div>
  )
}
