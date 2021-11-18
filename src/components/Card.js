import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={props.url} alt={props.doodleName} />
      <div className={"card-body"}>
        <p>{props.doodleName}</p>
        <p>{props.formattedDate}</p>
        <a href={`https://www.google.com/search?q=${props.doodleName}`}>
          What's in the doodle?
        </a>
      </div>
    </div>
  );
};

export default Card;
