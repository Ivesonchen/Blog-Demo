import React from "react";
import Post from "./Post";

const PostsList = ({ postsData }) => {
  return (
    <div>
      {postsData
        .sort((a, b) => b.date - a.date)
        .map((post) => (
          <Post key={post._id} post={post} />
        ))}
    </div>
  );
};

export default PostsList;