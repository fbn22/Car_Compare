import "./GameOverPage.css";
import RandomMessage from "../../Elements/RandomMessage/RandomMessage";
import ScoreLogic from "../../Elements/ScoreLogic/ScoreLogic";
import ButtonsGameOver from "../../Elements/Buttons/ButtonGameOver";
import Logo from "../../Elements/Logo/Logo";

const GameOverPage = () => {
  return (
    <div className='gameOverPage'>
      <Logo />
      <RandomMessage />
      <ScoreLogic />
      <ButtonsGameOver />
    </div>
  );
};

export default GameOverPage;
