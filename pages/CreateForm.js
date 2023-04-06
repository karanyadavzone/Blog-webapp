"use client";
import React from "react";
import { useState } from "react"; 
import { AiOutlineArrowLeft } from "react-icons/ai";
import ReactQuillEditor from "../components/TextEditor"
const Createform = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission her
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, content }),
      });
      if (response.ok) {
        router.push("/");
      } else {
        console.error("Error creating post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

 
  return (
    <div className="p-8 ml-44 mt-24 mb-12">
      <a href="/" className="flex gap-2 items-center mb-4">
        <AiOutlineArrowLeft className="items-center" />
        Back
      </a>
      <div className="text-3xl mb-2">Create Blog</div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="shadow appearance-none border rounded w-3/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-bold mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="shadow appearance-none border rounded w-3/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter author name"
            required
          />
        </div>
        <div id="editor"></div>
        
        {/* <ReactQuillEditor setContent={setContent}/> */}
        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};
export default Createform;
