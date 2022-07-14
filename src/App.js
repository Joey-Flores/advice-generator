import React, { useEffect, useState } from "react";

import "./App.css";
import divider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const axios = require("axios").default;
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    const quote = await axios.get("https://api.adviceslip.com/advice");
    setQuote(quote.data.slip);
  }

  function handleClick() {
    getQuote();
  }

  return (
    <div className="app">
      <div className="card">
        <h5>ADVICE #{quote.id}</h5>
        <p>"{quote.advice}"</p>
        <img className="divider" src={divider}></img>
        <div onClick={handleClick} className="circle">
          <img src={dice}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
