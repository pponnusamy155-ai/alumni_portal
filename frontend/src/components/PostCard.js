import React from "react";

function PostCard({ post }) {
  return (
    <div className="card">
      <h4>{post.author?.name}</h4>
      <p>{post.content}</p>
    </div>
  );
}

export default PostCard;
