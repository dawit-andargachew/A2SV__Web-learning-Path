import React from 'react'
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}

export const Form: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <form onSubmit={handleAdd} className=" flex items-center justify-center gap-x-2  w-10/12 mx-auto my-5 p-2">
            <input
                type="text"
                value={todo}
                onChange={(event) => { setTodo(event?.target.value) }}
                placeholder="add your task here . . ."
                className=" w-8/12 h-14 shadow-xl ring-offset-ld focus:scale-110 ring-white   rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button
                type="submit"
                className="text-xl bg-teal-400 h-14 w-2/12 hover:bg-teal-500 text-white font-bold rounded-r-md px-4 py-2 shadow-md transition-colors duration-300"
            >
                Add task
            </button>
        </form>
    )
}
