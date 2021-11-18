import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ doodles, formattedDate }) => {
  return (
    <div className='card-list-container'>
      {doodles.map((doodle) => (
        <Card
          doodleName={doodle.query}
          url={doodle.url}
          formattedDate={formattedDate}
        />
      ))}
    </div>
  );
};

export default CardList;
