"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Params {
  params: { edit: number };
}

const BlogForm = ({ params }: Params) => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${Number(params.edit)}`
        );
        console.log(response.data);
        setTitle(response.data.title);
        setBlog(response.data.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Do something with the form data (e.g., submit to a server)
    console.log(title);
    console.log(blog);

    // Reset the form fields
    setTitle("");
    setBlog("");
  };

  return (
    <div className="bg-gray-100 p-6 w-10/12  my-[5rem]  mx-auto rounded-lg shadow-xl border-t-4 border-blue-500">
      <p className="text-3xl my-6 font-bold font-mono text-gray-600">
        Blog editing page
      </p>

      <form onSubmit={handleSubmit} className=" ">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-mono font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-mono font-bold mb-2"
            htmlFor="blog"
          >
            Blog
          </label>
          <textarea
            className=" h-20 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="blog"
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
