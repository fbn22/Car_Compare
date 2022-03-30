import React from "react";
import axios from 'axios';
import { EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";
import Nav from "../Elements/Nav";
import { useState, useEffect } from "react";

function Display() {
  function Next() {
    CarData.shift();
  }

  // console.log(Crypto)
  // Shuffle();
  // function Load() {
  // window.onload = Shuffle()
  // }
  // Load();
    
  let item1 = CarData.slice(0, 1);
  let item2 = CarData.slice(1, 2);
  // let item3 = CarData.slice(2, 3);

  let item1Data = item1[0].speed;
  let item2Data = item2[0].speed;

  const [counter, setCount] = useState(0);
  function count() {
    setCount(counter + 1);
    localStorage.setItem("recentScore", counter + 1);
  }
  function goToGameOverPage() {
    return (window.location.href = "/gameover");
  }

  function isHigher() {
    if (item1Data < item2Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isEven() {
    if (item1Data === item2Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isLower() {
    if (item1Data > item2Data) {
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
      <div className='carScreens' >
        <div>{EvenFile(item1)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
        <VersusBar />
        <div>{EmptyFile(item2)}</div>
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

export default Display;
