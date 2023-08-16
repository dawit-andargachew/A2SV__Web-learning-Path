import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { taskAdd, taskUpdate, taskDelete, taskComplete } from './Reducers/TaskSlice';
import { nanoid } from '@reduxjs/toolkit';
import TaskList from './components/TaskList';

function App() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [input_task, setInputTask] = useState("");
  

  return (
    <div className="App rounded-md shadow-md w-11/12 bg-gray-200 h-[30rem]  mx-auto">
      <h1 className="pt-6 mt-4 text-teal-600 text-3xl font-bold">Taskify</h1>
      
      {!tasks && <span>No task yet ...</span>}

      <div className="flex flex-col  gap-10 items-center justify-center mt-6">
        <div className="task_input flex items-start">
          <textarea className="border-teal-600 border-2 rounded" type="text" value={input_task} onChange={e => {setInputTask(e.target.value)}}/>
          <button className=" bg-teal-600 px-7 rounded-lg py-3 ml-3 text-white" onClick= {e => {
            if (input_task.length > 0) {
            dispatch(taskAdd(
              {id:nanoid(), content:input_task, isComplete: false}
            ))
            setInputTask("")}
          }}>Add</button>
        </div>
        {/* task list */}
        {tasks && <TaskList tasks={tasks}/>}
      </div>
    </div>
  );
}

export default App;
