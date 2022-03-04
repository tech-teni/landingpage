import React from "react";

const MiniCard = ({ image, title, description }) => {
  return (
    <div className="mini-cards">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MiniCard;
