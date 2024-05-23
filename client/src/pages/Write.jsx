import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  const categories = [
    "art",
    "science",
    "technology",
    "cinema",
    "design",
    "food",
  ];

  return (
    <div className="write">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editor-container">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>publish</h1>
          <p>
            <b>status: </b>draft
          </p>
          <p>
            <b>visibility: </b>public
          </p>
          <label htmlFor="file">upload image</label>
          <input type="file" name="file" id="file" />
          <div className="buttons">
            <button className="no-sub">Save as a draft</button>
            <button>update</button>
          </div>
        </div>
        <div className="item">
          <h1>category</h1>
          {categories.map((cat) => (
            <div className="categories">
              <input type="radio" name="cat" id={cat} value={cat} />
              <label htmlFor={cat}>{cat}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Write;
