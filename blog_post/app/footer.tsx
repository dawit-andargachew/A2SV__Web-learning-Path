import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-white text-lg font-bold mb-4">About</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, laudantium?
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-white text-lg font-bold mb-4">Categories</h2>
            <ul className="text-gray-300">
              <li>Technology</li>
              <li>History</li>
              <li>Science</li>
              <li>Automotive</li>
              <li>Politics</li>
              <li>Culture</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-white text-lg font-bold mb-4">Contact</h2>
            <p className="text-gray-300">Email: example@example.com</p>
            <p className="text-gray-300">Phone: 123-456-7890</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-white text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook">facebook</i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter">twitter</i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram">Instagram</i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-center text-gray-300">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
