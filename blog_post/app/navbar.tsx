import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex justify-around text-lg font-bold font-mono space-x-4">
        <li>
          <Link href="/technology">
            <p className="text-white hover:text-gray-300">Technology</p>
          </Link>
        </li>
        <li>
          <Link href="/history">
            <p className="text-white hover:text-gray-300">History</p>
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
          <Link href="/culture">
            <p className="text-white hover:text-gray-300">Culture</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
