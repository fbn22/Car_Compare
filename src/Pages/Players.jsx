import axios from "axios";
import React from "react";
import VersusBar from "../Elements/VersusBar";
import { LeftTemplatePlayer } from "../Elements/LeftTemplatePlayer";
import { RightTemplatePlayer } from "../Elements/RightTemplatePlayer";
import Nav from "../Elements/Nav";
import { useState, useEffect } from "react";
import { Reshuffled } from "../Elements/Shuffle";

function PlayersGame() {
  const [team, setTeam] = useState([]);
  const [loader, setLoader] = useState(true);
  const [counter, setCount] = useState(0);

  const fetchData = () => {
    axios
      .get(
        "https://v3.football.api-sports.io/standings?league=39&season=2019",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key":
              "a68a072738eefbd9c1c91dc5b62f2b85",
          },
        }
      )
      .then((response) => {
        if (
          response.status >= 200 &&
          response.status <= 299
        ) {
            setTeam(
              Reshuffled(
                response.data.response[0].league
                  .standings[0]
              )
            );
          setLoader(false);
          console.log(response.data.response[0].league.standings[0]);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function Next() {
    team.shift();
  }

  if (loader) {
    return "...";
  }

  let item3 = team.slice(0, 1);
  let item4 = team.slice(1, 2);

  let item3Data = item3.map((item) => item.team);
    let item4Data = item4.map((item) => item);
    
    console.log(item3Data);

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
        <div>{LeftTemplatePlayer(item3)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
        <VersusBar />
        <div>{RightTemplatePlayer(item4)}</div>
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

export default PlayersGame;














