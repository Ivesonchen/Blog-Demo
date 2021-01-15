import React from "react";
import { Link } from "react-router-dom";

const Post = ({ history, post, showControls, deleteBlogPost }) => {
  if (!post) {
    return null;
  } else {
    const buttonStyles = {
      display:"flex",
      justifyContent: "flex-end",
    };

    const divStyles = {
      margin:"1em",
      padding:"1em",
    };
    const { title, date, content, category } = post;

    const handleDelete = (e) => {
      e.preventDefault();
      deleteBlogPost(post._id);
      history.push("/");
    };
    const handleEdit = (e) => {
      e.preventDefault();
      history.push(`/posts/edit/${post._id}`);
    };
    return (
      <div className="card" style={divStyles}>
        <Link to={`/posts/${post._id}`}>
          <h1 className="card-header">{title}</h1>
        </Link>
        <h3 className="card-title">{category}</h3>
        <h3 className="card-title">{date.toLocaleString()}</h3>
        <p className="card-text">{content}</p>
        {showControls && (
          <div style={buttonStyles}>
            <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
            <button type="button" className="btn btn-outline-secondary" onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
};

export default Post;