import React from "react";
import dog1 from "./images/snake.jpeg";
import cat from "./images/snake.jpeg";
import dog2 from "./images/snake.jpeg";
import "./css/photos.css";

function Photos() {
  return (
    <div className="container-fluid Photos">
      <div className="row">
        <div className="col">
          <img src={cat} alt="cat" />
        </div>
        <div className="col">
          <img src={dog2} alt="small dog" />
        </div>
        <div className="col">
          <img src={dog1} alt="large dog" />
        </div>
      </div>
    </div>
  );
}

export default Photos;
