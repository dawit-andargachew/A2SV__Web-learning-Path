import React from "react";

interface Props {
  title: string;
  body: string;
}

const BlogPost = ({ title, body }: Props) => {
  return (
    <div className="bg-gray-100 p-4 w-9/12 mx-auto rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="mb-4">{body}</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Read more
        </a>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
