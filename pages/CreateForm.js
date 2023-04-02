"use client";
import React from "react";
import { useState } from "react";
// import QuillNoSSRWrapper from "./Editor/Editor";
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic'
import { AiOutlineArrowLeft } from "react-icons/ai";


const Createform = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]
  return (
    <div className="p-8 ml-44 mt-24 mb-12">
      <a href="/" className="flex gap-2 items-center mb-4">
          <AiOutlineArrowLeft className="items-center" />Back
        </a>
      <div className="text-3xl mb-2">Create Blog</div>
      <form onSubmit={handleSubmit}  className="mt-4">
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
        <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" className="mb-4 h-52 w-4/6"/>
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
