import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex justify-around items-center text-lg font-bold font-mono space-x-4">
        <li>
          <Link  href="/">
            <p className="text-white text-4xl font-thin hover:text-gray-300  outline outline-[2px] outline-gray-200 px-2 py-1 rounded-lg">
              Blog Posts
            </p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className="text-white hover:text-gray-300">Feeds</p>
          </Link>
        </li>
        <li>
          <Link href="/science">
            <p className="text-white hover:text-gray-300">Science</p>
          </Link>
        </li>
        <li>
          <Link href="/automotive">
            <p className="text-white hover:text-gray-300">Automotive</p>
          </Link>
        </li>
        <li>
          <Link href="/politics">
            <p className="text-white hover:text-gray-300">Politics</p>
          </Link>
        </li>
        <li>
          <Link href="/post/add">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add Blog
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
