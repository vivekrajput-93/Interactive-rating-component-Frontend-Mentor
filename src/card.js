import React, { useState } from "react";
import star from "./images/icon-star.svg";

import "./CSS/card.css";
import Thank from "./images/illustration-thank-you.svg";

function Card() {
  const [rating, setRating] = useState();
  const [sumbit, setSubmit] = useState(false);


  function handleRating(num) {
    setRating(num);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }
  return sumbit ? (
    <div className="card">
      <img src={Thank} className="image" alt="thank you" />
      <div className="rate">You have selected {rating} out of 5</div>
      <h1 className="you">Thank You !</h1>
      <p className="para" >
        We appreciate you taking time to give a rating.If you even need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="card">
      <div className="img">
        <img alt="star" src={star} />
      </div>
      <h1>How did we do ?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="number">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            type="button"
            onClick={() => handleRating(num)}
            className="num"
          >
            {num}
          </button>
        ))}
      </div>
      <button disabled={rating == undefined} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Card;
