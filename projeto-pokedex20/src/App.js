import React from "react";
import useRequestData from "./hooks/useRequestData";
import Router from "./routes/Router";
import { PokemonContext } from "./contexts/PokemonContext";

function App() {
  const pokemons = useRequestData();

  return (
    <PokemonContext.Provider value={pokemons}>
      <Router/>
    </PokemonContext.Provider>
  );
}

export default App;
