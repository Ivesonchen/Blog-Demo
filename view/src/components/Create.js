import React, { useState } from "react";

const Create = ({ history, addBlogPost, nextId }) => {

  const initialFormState = {
    title: "",
    category: "",
    content: "",
  };

  const [formState, setFormState] = useState(initialFormState);

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
    const newPost = {
      _id: nextId,
      title: formState.title,
      category: formState.category || "general",
      date: new Date(),
      content: formState.content,
    };
    addBlogPost(newPost);
    history.push(`/posts/${nextId}`);
  };

  return (
    <form id="newPostForm" onSubmit={handleSubmit}>
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
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default Create;