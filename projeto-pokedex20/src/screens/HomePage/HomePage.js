import React, { useContext } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { PokemonContext } from "../../contexts/PokemonContext";
import { ContainerHome, ContainerCards } from "./styled";

function HomePage() {
  const pokeContext = useContext(PokemonContext);

  const pokeInfos = pokeContext && pokeContext.map((poke, id) => {
    if (poke.where === "home") {
      return <PokeCard key={id} poke={poke} />
    }
  })

  return (
    <ContainerHome>
      <ContainerCards>
        {pokeInfos}
      </ContainerCards>
    </ContainerHome>
  );
}

export default HomePage;