import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../contexts/PokemonContext";

function DetailsPage() {
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [infoPoke, setInfoPoke] = useState("");
  const params = useParams();

  useEffect(() => {
    requestPoke();
  }, []);

  const requestPoke = () => {
    const indexPoke = pokemons.findIndex((poke) => { return poke.name === params.name });
    setInfoPoke(pokemons[indexPoke]);
  }

  return (
    <div>
      <h1>Página de detalhes do Pokemon</h1>
    </div>
  );
}

export default DetailsPage;

