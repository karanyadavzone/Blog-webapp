import React from "react";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto py-12 px-8 lg:flex lg:justify-between">
        <div className="lg:w-1/3">
          {/* <Link to="/" className="flex items-center mb-8"> */}
            <img src="./First.jpg" alt="Logo" className="h-8 w-8 mr-2" />
            <h2 className="font-bold text-white text-xl">BlogSite</h2>
          {/* </Link> */}
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex">
            {/* <Link to="/" className="text-gray-400 hover:text-white mr-6"> */}
              Privacy Policy
            {/* </Link> */}
            {/* <Link to="/" className="text-gray-400 hover:text-white"> */} 
              Terms of Service
            {/* </Link> */}
          </div>
        </div>
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="font-bold text-white text-lg mb-4">Quick Links</h3>
          <nav>
            <ul className="flex flex-col lg:flex-row">
              <li className="mb-2 lg:mb-0 lg:mr-6">
                {/* <Link to="/" className="text-gray-400 hover:text-white"> */}
                  Home
                {/* </Link> */}
              </li>
              <li className="mb-2 lg:mb-0 lg:mr-6">
                {/* <Link to="/blog" className="text-gray-400 hover:text-white"> */}
                  Blog
                {/* </Link> */}
              </li>
              <li className="mb-2 lg:mb-0 lg:mr-6">
                {/* <Link to="/about" className="text-gray-400 hover:text-white"> */}
                  About Us
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to="/contact" className="text-gray-400 hover:text-white"> */}
                  Contact
                {/* </Link> */}
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:w-1/3">
          <h3 className="font-bold text-white text-lg mb-4">Follow Us</h3>
          <div className="flex mb-6">
            <a href="#" className="mr-4">
              <FaFacebookF
                className="text-white hover:text-gray-500 transition-colors duration-300"
                size={24}
              />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter
                className="text-white hover:text-gray-500 transition-colors duration-300"
                size={24}
              />
            </a>
            <a href="#" className="mr-4">
              <FaInstagram
                className="text-white hover:text-gray-500 transition-colors duration-300"
                size={24}
              />
            </a>
            <a href="#" className="mr-4">
              <FaYoutube
                className="text-white hover:text-gray-500 transition-colors duration-300"
                size={24}
              />
            </a>
          </div>
          <button
            className="text-gray-400 hover:text-white flex items-center"
            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <IoIosArrowRoundUp className="mr-2" size={20} />
          </button>
          <div className="mt-8">
            <p className="text-gray-400 text-center">
              © 2023 BlogSite. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
