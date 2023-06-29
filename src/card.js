import React from "react";
import star from "./images/icon-star.svg";
import "./CSS/card.css";

function Card() {
  return (
    <div className="card">
      <div className="img">
        <img alt="star" src={star} />
      </div>
      <h1>How did we do ?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="number">
        <div className="one num">1</div>
        <div className="two num">2</div>
        <div className="three num">3</div>
        <div className="four num">4</div>
        <div className="five num">5</div>
      </div>
      <button type="sumbit">Submit</button>
    </div>
  );
}

export default Card;
