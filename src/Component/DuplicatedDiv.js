import React from 'react';

const DuplicatedDiv = ({ n }) => {
  // Create an array of length 'n' with undefined values
  const times = Array.from({ length: n });

  return (
    <div>
      {times.map((_, index) => (
    <i key={index} className="fa-solid fa-star icon"></i>
      ))}
    </div>
  );
};

export default DuplicatedDiv;