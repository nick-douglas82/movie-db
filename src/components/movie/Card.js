import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.poster} alt="" />
      {props.title}
      {props.rating}
    </div>
  );
}
export default Card;
