// "use client";

import Link from "next/link";
import React from "react";
interface Props {
  title: string;
  body: string;
  id: number;
}

const BlogPost = ({ title, body, id }: Props) => {
  return (
    <div className="bg-gray-100 p-6 w-10/12 mx-auto rounded-lg shadow-xl border-t-4   border-blue-500">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="mb-4 font-sans justify-center line-clamp-3">
        {body} {body} {body}
      </p>
      <div className="flex justify-between items-center">
        <Link
          href={`/post/${id}`}
          className="text-blue-500 hover:text-blue-700"
        >
          Read more
        </Link>
        <Link
          href={`/${id}`}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
