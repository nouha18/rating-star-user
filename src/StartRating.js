import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
const RatingStar = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="ratingstar">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        console.log(ratingValue);
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={100}
            />
          </label>
        );
      })}
    </div>
  );
};
export default RatingStar;
