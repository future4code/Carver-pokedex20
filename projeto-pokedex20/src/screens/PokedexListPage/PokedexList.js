import React from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ContainerHome, ContainerCards } from "../HomePage/styled";

function PokedexListPage() {
  const poke = {
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  }

  return (
    <ContainerHome>
      <ContainerCards>
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
        <PokeCard poke={poke} />
      </ContainerCards>
    </ContainerHome>
  );
}


export default PokedexListPage;