import React, { useContext, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { PokemonContext } from "../../contexts/PokemonContext";
import { ContainerHome, ContainerCards, Teste } from "./styled";

function HomePage() {
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [refresh, setRefresh] = useState(false);

  const pokeInfos = pokemons && pokemons.map((poke, id) => {
    if (poke.where === "home") {
      return <PokeCard key={id} poke={poke} refresh={refresh} setRefresh={setRefresh} />
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