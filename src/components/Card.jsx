import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.image} />
      <h2>{props.name}</h2>
      <h3>{props.season}</h3>
      <h4>{props.rating}</h4>
      <div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </div>
  );
};

export default Card;
