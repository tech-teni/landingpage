import React from "react";

const Label = ({ className, img, title, subTitle }) => {
  return (
    <div className={className}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default Label;
