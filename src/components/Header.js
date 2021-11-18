import React, { useState } from "react";
import "./Header.css";

const Header = ({ doodles, setFilteredDoodle, ...props }) => {
  const [hover, setHover] = useState(true);
  const [date, setDate] = useState(props.date);

  const handleDate = (action) => {
    if (action === "increment") {
      props.setDate(new Date(props.date.setDate(props.date.getDate() + 1)));
    } else {
      props.setDate(new Date(props.date.setDate(props.date.getDate() - 1)));
    }
    setFilteredDoodle(filterDoodle());
  };

  const filterDoodle = () => {
    let newDoodles = [];
    doodles.forEach((doodle) =>
      doodle.forEach((item) => {
        if (item.run_date_array[2] === props.date.getDate()) {
          newDoodles.push(item);
        }
      })
    );
    return newDoodles;
  };
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = () => {
    let [month, day, year] = date.split("/");
    console.log(month, day, year);
    props.setDate(new Date(year, month - 1, day));
  };

  return (
    <div className='header-container'>
      <h1>Today in Google Doodles History</h1>
      <h3>
        {hover ? (
          <>
            <button onClick={() => handleDate("decrement")}> {"<"} </button>{" "}
            <p onMouseEnter={() => setHover(false)}> {props.formattedDate} </p>
            <button onClick={() => handleDate("increment")}>
              {" "}
              {">"}{" "}
            </button>{" "}
          </>
        ) : (
          <>
            <input
              type='text'
              name='date'
              onMouseLeave={() => setHover(true)}
              onChange={handleChange}
              value={date.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            />
            <button onClick={submitHandler}>Get Doodles</button>
          </>
        )}
      </h3>
    </div>
  );
};

export default Header;
