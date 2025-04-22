import Home from "./Home";
import Searchedpokemon from "./Searchedpokemon";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemon" element={<Searchedpokemon />} />
      </Routes>
    </div>
  );
}

export default App;
