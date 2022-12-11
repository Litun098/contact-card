import React from "react";

export default function Star(props) {
  const starIcon = props.isFilled
    ? "../image/stars-filled.png"
    : "../image/stars-empty.png";
  return (
    <>
      <img
        src={starIcon}
        alt="favourite"
        className="card--favourite"
        onClick={props.handleClick}
      />
    </>
  );
}
