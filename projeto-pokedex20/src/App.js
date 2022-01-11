import React from "react";
import Router from "./routes/Router";
import PokemonProvider from "./contexts/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
}

export default App;
