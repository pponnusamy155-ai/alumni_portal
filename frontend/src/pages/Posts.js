import React, { useEffect, useState } from "react";
import API from "../api";
import PostCard from "../components/PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  const addPost = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", { content });
      setContent("");
      fetchPosts();
    } catch (error) {
      alert("Login required to post");
    }
  };

  return (
    <div className="container">
      <h2>Community Posts</h2>

      <form onSubmit={addPost} className="form">
        <textarea
          placeholder="Write a post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>

      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
