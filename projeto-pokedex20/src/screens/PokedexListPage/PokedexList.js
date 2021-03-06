import React, { useContext, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ContainerHome, ContainerCards } from "../HomePage/styled";
import { PokemonContext } from "../../contexts/PokemonContext";

function PokedexListPage() {
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [refresh, setRefresh] = useState(false);

  const pokeInfos = pokemons && pokemons.map((poke, id) => {
    if (poke.where === "pokedex") {
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

export default PokedexListPage;