import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FootballGame from "./Pages/Games/FootballGame";
import CryptoGame from "./Pages/Games/CryptoGame";
import CarsGame from "./Pages/Games/CarsGame";
import GameOverPage from "./Pages/GameOverPage/GameOverPage";
import GameStartPage from "./Pages/GameStartPage/GameStartPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<GameStartPage />} />
        <Route path='/cars' element={<CarsGame />} />
        <Route path='/crypto' element={<CryptoGame />} />
        <Route path='/football' element={<FootballGame />} />
        <Route path='/gameover' element={<GameOverPage />} />
      </Routes>
    </Router>
  );
};
export default App;



