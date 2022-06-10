import React from "react";
import axios from "axios";
import VersusBar from "../../Elements/VersusBar/VersusBar";
import { LeftTemplateCrypto } from "../../Elements/ScreenTemplates/LeftTemplateCrypto";
import { RightTemplateCrypto } from "../../Elements/ScreenTemplates/RightTemplateCrypto";
import Nav from "../../Elements/Navbar/Nav";
import { useState, useEffect } from "react";
import { Reshuffled } from "../../Elements/Functions/Shuffle";

function CryptoGame() {
  const [crypto, setCrypto] = useState([]);
  const [loader, setLoader] = useState(true);
  const [counter, setCount] = useState(0);

  const fetchData = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        if (
          response.status >= 200 &&
          response.status <= 299
        ) {
          setCrypto(Reshuffled(response.data));
          setLoader(false);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function Next() {
    crypto.shift();
  }

  if (loader) {
    return "...";
  }

  let item3 = crypto.slice(0, 1);
  let item4 = crypto.slice(1, 2);

  let item3Data = item3.map((item) => item.market_cap);
  let item4Data = item4.map((item) => item.market_cap);

  function count() {
    setCount(counter + 1);
    localStorage.setItem("recentScore", counter + 1);
  }
  function goToGameOverPage() {
    return (window.location.href = "/gameover");
  }

  function isHigher() {
    if (item3Data > item4Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isEven() {
    if (item3Data === item4Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isLower() {
    if (item3Data < item4Data) {
      count();
      Next();
    } else goToGameOverPage();
  }

  const getHighScore = JSON.parse(
    localStorage.getItem("highScore")
  )[0].score;

  return (
    <>
      <Nav score={counter} high={getHighScore} />
      <div className='carScreens'>
        <div>{LeftTemplateCrypto(item3)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
        <VersusBar />
        <div>{RightTemplateCrypto(item4)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
      </div>

      <div id='movies' className='button-bar'>
        <button
          onClick={() => isHigher()}
          className='button button-higher'
          style={{ marginBottom: "0.5em" }}
        >
          Higher
        </button>
        <button
          onClick={() => isEven()}
          className='button button-even'
          style={{ marginBottom: "0.5em" }}
        >
          Even
        </button>
        <button
          onClick={() => isLower()}
          className='button button-lower'
          style={{ marginBottom: "0.5em" }}
        >
          Lower
        </button>
      </div>
    </>
  );
}

export default CryptoGame;


