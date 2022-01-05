import React, { useContext } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ContainerHome, ContainerCards } from "../HomePage/styled";
import { PokemonContext } from "../../contexts/PokemonContext";

function PokedexListPage() {
  const pokeContext = useContext(PokemonContext);

  const pokeInfos = pokeContext && pokeContext.map((poke, id) => {
    if (poke.where === "pokedex") {
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

export default PokedexListPage;