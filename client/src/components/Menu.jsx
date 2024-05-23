import React from "react";
import { Link } from "react-router-dom";

import posts from "../pages/Posts";

const Menu = () => {
  const menuPosts = posts.slice(7);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      <div className="posts">
        {menuPosts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.img} alt="post" />
            <h2>{post.title}</h2>
            <Link to={`/post/${post.id}`}>read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
