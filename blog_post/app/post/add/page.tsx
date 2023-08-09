'use client'

import React, { useState } from "react";
const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");

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
        <p className="text-3xl my-6 font-bold font-mono text-gray-600">Blog adding page</p>
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
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
