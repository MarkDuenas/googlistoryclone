import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  const [date, setDate] = useState(new Date());
  const [doodles, setDoodles] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());

  useEffect(() => {
    // axios
    //   .get(
    //     `https://google-doodles.herokuapp.com/doodles/${date.getFullYear()}/${
    //       date.getMonth() + 1
    //     }?hl=en`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setDoodles(res.data);
    //   })
    //   .catch((e) => console.error(e));
    fetchDoodles();
  }, [currentMonth]);

  const fetchDoodles = () => {
    let arr = [];
    let promises = [];
    for (let i = 0; i < 20; i++) {
      promises.push(
        axios
          .get(
            `https://google-doodles.herokuapp.com/doodles/${
              date.getFullYear() - i
            }/${date.getMonth() + 1}?hl=en`
          )
          .then((res) => arr.push(res.data))
      );
    }
    Promise.all(promises).then(() => {
      setDoodles(arr);
    });
  };

  useEffect(() => {
    formatDate(date);
    if (date.getMonth() !== currentMonth) {
      setCurrentMonth(date.getMonth());
    }
  }, [date]);

  const formatDate = (d) => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    let newDate = d.toLocaleString("en-US", options);
    setFormattedDate(newDate);
  };

  return (
    <div className='App'>
      <Header date={date} setDate={setDate} formattedDate={formattedDate} />
      <CardList doodles={doodles} date={date} formattedDate={formattedDate} />
    </div>
  );
}

export default App;
