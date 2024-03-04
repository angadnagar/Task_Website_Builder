import React from "react";

const RatingBox = ({ rating }) => {
  // Calculate the number of filled stars based on the rating
  const filledStars = Math.floor(rating);
  
  // Create an array to hold the star elements
  const stars = [];
  
  // Fill the array with filled and empty stars
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
    }
  }
  
  return (
    <div>
      {stars}
    </div>
  );
};



export default RatingBox;