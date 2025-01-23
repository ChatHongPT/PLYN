import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StylePage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts on component mount
    axios.get("/api/posts").then((res) => setPosts(res.data));
  }, []);

  const handleNewPost = () => {
    navigate("/style/new-post"); // Navigate to post creation page
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold">STYLE</h1>
        <button
          onClick={handleNewPost}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          New Post
        </button>
      </header>

      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded shadow p-4">
            <img
              src={post.image_url}
              alt={post.description}
              className="w-full h-64 object-cover rounded"
            />
            <p className="mt-2">{post.description}</p>
            <div className="mt-2 flex justify-between">
              <span>{post.likes} ❤️</span>
              <button className="text-blue-500">Comment</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default StylePage;
