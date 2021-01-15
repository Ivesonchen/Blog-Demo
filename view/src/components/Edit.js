import React, { useState, useEffect } from "react";

const Edit = ({ history, updateBlogPost, post }) => {

  const initialFormState = {
    title: "",
    category: "",
    content: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    post &&
      setFormState({
        title: post.title,
        category: post.category,
        content: post.content,
      });
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      _id: post._id,
      title: formState.title,
      category: formState.category || "general",
      date: new Date(),
      content: formState.content,
    };
    updateBlogPost(updatedPost);
    history.push(`/posts/${post._id}`);
  };

  return (
    <form id="editPostForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          required
          type="text"
          name="title"
          placeholder="Your title..."
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          className="form-control"
          required
          type="text"
          name="category"
          placeholder="Your category..."
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea
          form="newPostForm"
          required
          className="form-control"
          name="content"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  );
};

export default Edit;