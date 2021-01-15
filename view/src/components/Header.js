import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin:"1em"
  };


  
  return (
    <div style={divStyle}>
      <Link to="/">
        <button type="button" className="btn btn-primary">Home</button>
      </Link>
      <Link to="/posts/new">
        <button type="button" className="btn btn-primary">Add new</button>
      </Link>
    </div>
  );
};

export default Header;