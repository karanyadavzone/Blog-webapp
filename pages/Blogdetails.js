"use client";
import React from "react";
import { useState } from "react";
import Comment from "./api/comments";
import { useRouter } from 'next/router';
import axios from "axios";
import { BsFillArrowLeftCircleFill, AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

function BlogDetails(post) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const router = useRouter();
  const blogData = router.query.blogData;
  console.log(blogData,'bdta')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/comments", { postId, name, comment });
      setName("");
      setComment("");
      alert("Comment submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit comment");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-40">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="flex gap-2 items-center mb-4">
          <AiOutlineArrowLeft className="items-center" />Back
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {blogData?.title}
        </h1>
        <p className="text-gray-500 mb-4">
          Written by {blogData?.author},{blogData?.category} on {blogData?.date}
        </p>
        <img src="./First.jpg" alt="Blog post" className="mb-4" />
        <p className="text-lg text-gray-900 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis
          vel nisl accumsan commodo. Morbi non ante at felis semper
          feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          et turpis vel nisl accumsan commodo. Morbi non ante at felis semper
          feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          et turpis vel nisl accumsan commodo. Morbi non ante at felis semper
          feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          et turpis vel nisl accumsan commodo. Morbi non ante at felis semper
          feugiat.
        </p>
        <p className="text-lg text-gray-900 mb-4">
          Sed id lectus at nibh suscipit tristique. Mauris vel magna aliquam,
          pulvinar enim vel, eleifend lorem. Curabitur sed mi vel libero
          placerat sagittis in eget lorem.
        </p>
      </div>
      <div className="my-6 mt-24 max-w-7xl mx-auto py-6 lg:px-8">
        <h2 className="text-lg font-medium mb-2">Leave a comment:</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 rounded w-4/5 p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-medium mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              className="border border-gray-400 rounded w-4/5 p-2"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <div>
          <h1 className="text-2xl font-bold mb-4">{post.name}</h1>
          <p className="mb-4">{post.comment}</p>
          <Comment postId={post.id} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
