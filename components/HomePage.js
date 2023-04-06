"use client";
import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

// http://localhost:3000/Blogdetails
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="bg-gradient-to-br from-gray-200 via-slate-200 to-gray-300 min-h-full w-full items-center  ">
      <div className="p-32 ml-10">
        <div className="text-4xl font-bold font-sans">Blog</div>
        <div className="justify-between flex w-full max-w-screen-lg bg-white mt-8 rounded-3xl min-h-300 ">
          <div className="pt-16 pl-16 w-6/12 ">
            {/* First Left Side Card */}
            <p className=" text-2xl  font-bold font-sans">
              This is a featured article - the most important
            </p>
            <p className="pt-4 font-sans">
              very short description of what's actually being discussed in this
              article, maybe the first sentences to provide a preview
            </p>
            <Link href="/Blogdetails">
            <button className="mt-8 bg-black hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Read Now
            </button>
            </Link>
            {/* Second Left Side Card */}
          </div>
          <div className="w-full">
            <img className="ml-28 p-3 w-10/12 rounded-3xl" src="./First.jpg" />
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="ml-40 mr-40 pb-8">
        {/* Filter Search Div */}
        <div className="flex items-center mb-10">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search blogs..."
              className="border border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
          </div>
          <select
            className="border border-gray-300 bg-white h-10 px-5 rounded-full text-sm focus:outline-none "
            value={filter}
            onChange={handleFilter}
          >
            <option value="all">All Categories</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        {/* Main Card Div Start */}
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./First.jpg"
              alt="Blog Image 1"
            />
            <div className="p-6">
              <h2 className="text-lg font-medium mb-2">Blog Post 1</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                nunc nec sapien efficitur sollicitudin. Integer in turpis vitae
                massa accumsan rhoncus.
              </p>
              <a
                href="/Blogdetails"
                className="text-blue-600 font-medium mt-4 inline-block hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./First.jpg"
              alt="Blog Image 2"
            />
            <div className="p-6">
              <h2 className="text-lg font-medium mb-2">Blog Post 2</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                nunc nec sapien efficitur sollicitudin. Integer in turpis vitae
                massa accumsan rhoncus.
              </p>
              <a
                href="/Blogdetails"
                className="text-blue-600 font-medium mt-4 inline-block hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./First.jpg"
              alt="Blog Image 3"
            />
            <div className="p-6">
              <h2 className="text-lg font-medium mb-2">Blog Post 3</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                nunc nec sapien efficitur sollicitudin. Integer in turpis vitae
                massa accumsan rhoncus.
              </p>
              <a
                href="/Blogdetails"
                className="text-blue-600 font-medium mt-4 inline-block hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
