import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import mockData from "./mockData";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Header from "./components/Header";

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(mockData);
  }, []);

  const getPostFromId = (id) => {
    return blogPosts.find((p) => p._id === parseInt(id));
  };

  const nextId = () => {
    return (
      blogPosts.reduce((acc, cur) => (acc._id > cur._id ? acc : cur), {
        _id: 0,
      })._id + 1
    );
  };

  const addBlogPost = (post) => {
    setBlogPosts([...blogPosts, post]);
  };

  const deleteBlogPost = (id) => {
    const updatedPosts = blogPosts.filter((p) => p._id !== parseInt(id));
    setBlogPosts(updatedPosts);
  };

  const updateBlogPost = (inPost) => {
    const updatedPosts = blogPosts.map((p) =>
      p._id === inPost._id ? inPost : p
    );
    setBlogPosts(updatedPosts);
  };

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <h1>Xiaoqian Chen's Blog</h1>
        <Route
          exact
          path="/posts/edit/:id"
          render={(props) => (
            <Edit
              {...props}
              updateBlogPost={updateBlogPost}
              post={getPostFromId(props.match.params.id)}
            />
          )}
        />
        <Route
          exact
          path="/posts/new"
          render={(props) => (
            <Create
              {...props}
              addBlogPost={addBlogPost}
              nextId={nextId()}
            />
          )}
        />
        <Route
          exact
          path="/posts/:id"
          render={(props) => (
            <Post
              {...props}
              post={getPostFromId(props.match.params.id)}
              showControls
              deleteBlogPost={deleteBlogPost}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => <PostsList {...props} postsData={blogPosts} />}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;