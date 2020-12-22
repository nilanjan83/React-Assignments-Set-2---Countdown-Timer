import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const value = Math.floor(event.target.value);
      if (isNumber(value) && value > 0) {
        setTime(value);
        setStart(true);
      } else {
        setTime(0);
      }
    }
  };

  useEffect(() => {
    if (time === 0) {
      setStart(false);
    }
    if (start) {
      const timer = setInterval(() => {
        const tCount = time - 1;
        setTime(tCount);
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }
  }, [time, start]);

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handleKeyDown(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
