import "./GameStartPage.css";
import CategoryBar from "../../Elements/CategoryBar/CategoryBar";
import noPoints from "../../Elements/ScoreLogic/ScoreLogic";

const GameStartPage = () => {
  return (
    <div className='gameStartPage' onLoad={noPoints()}>
      <img
        src='https://res.cloudinary.com/efer/image/upload/v1645276420/CarCompare/Logo-white_x1p432.svg'
        alt='logo'
      ></img>
      <h1>VS:GO</h1>
      <h3
        style={{ color: "var(--grey)", fontSize: "1.7em" }}
      >
        Pick category and start your challenge!
      </h3>
      <CategoryBar />

        {/* <Link to="/game">
        <button
          style={{}}
          className='button button-start'
          onClick={noPoints()}
        >
          Start Game
        </button>
        </Link> */}

    </div>
  );
};
export default GameStartPage;
