import React, { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <h1>StarRating</h1>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          <span
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: (rating || hover) >= star ? "gold" : "gray",
            }}
          >
            ★
          </span>
        </span>
      ))}

      {
        <p>You rated {rating} / 5 </p>
      }
    </div>
  );
}
