import React from "react";
import { Link } from "react-router-dom";

import posts from "./Posts";

const loadImages = ({ id, src }) => {
  const image = new Image();
  image.src = src;

  image.onload = () => {
    const placeholder = document.querySelector(`[data-identifier='${id}']`);
    placeholder.replaceWith(image);
  };

  image.onerror = () => {
    const placeholder = document.querySelector(`[data-identifier='${id}']`);
    placeholder.textContent = "Image not available";
    placeholder.classList.add("stop");

    console.error(`Failed to load image: ${src}`);
  };
};

const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => {
          const image = {
            id: post.id,
            src: post.img,
          };

          loadImages(image);

          return (
            <div className="post" key={post.id}>
              <div className="img">
                <div className="pulsate" data-identifier={image.id}></div>
                {/* <img src={post.img} alt="post" /> */}
              </div>
              <div className="text">
                <div className="text-cont">
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                </div>
                <Link to={`/post/${post.id}`}>read more</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
