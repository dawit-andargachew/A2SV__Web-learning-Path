import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskUpdate, taskDelete, taskComplete } from "../Reducers/TaskSlice";

const SingleTask = (props) => {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const task = props.task;
  const [edit_task, setEditTask] = useState(task.content);

  //each task is rendered
  return (
    <div
      className="  single_task p-3 rounded border-teal-600 border-2 flex justify-between gap-3"
      key={task.id}
    >
      {!isEdit ? (
        <span className={`${task.isComplete ? "line-through" : ""} `}>
          {task.content}
        </span>
      ) : (
        <textarea
          className="border-teal-600 border-2 rounded"
          type="text"
          value={edit_task}
          onChange={(e) => setEditTask(e.target.value)}
          onKeyDown={(e) => {
            //if enter key is pressed edit the task content
            if (e.key === "Enter") {
              dispatch(
                taskUpdate({
                  id: task.id,
                  content: edit_task,
                  isComplete: task.isComplete,
                })
              );
              setEdit(false);
            }
          }}
        />
      )}

      <div className="flex gap-3">
        <svg
          className="hover:cursor-pointer w-6 h-6 text-yellow-600"
          onClick={(e) => {
            if (!task.isComplete) {
              setEdit(true);
              setEditTask(task.content);
            }
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>

        <svg
          className="hover:cursor-pointer w-6 h-6 text-green-800"
          onClick={(e) => {
            dispatch(taskComplete(task.id));
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>

        <svg
          className="hover:cursor-pointer w-6 h-6 text-red-600"
          onClick={(e) => {
            dispatch(taskDelete(task.id));
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default SingleTask;
