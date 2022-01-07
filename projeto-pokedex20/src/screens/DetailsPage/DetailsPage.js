import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../contexts/PokemonContext";
import useRequestData from "../../hooks/useRequestData";

function DetailsPage() {
  const params = useParams();
  const [infoPoke, setInfoPoke] = useRequestData(params);

  console.log(infoPoke && infoPoke)
  return (
    <div>
      <h1>Página de detalhes do Pokemon</h1>
      {infoPoke && <>
        <p>{infoPoke.name}</p>

        <img alt="Foto do Pokémon" src={infoPoke.sprites.back_default} /> 
        <img alt="Foto do Pokémon" src={infoPoke.sprites.front_default} /> 
        - tipo: {infoPoke.types[0].type.name}
        - ataques:
        {infoPoke.moves[0].move.name}
        {infoPoke.moves[1].move.name}
        {infoPoke.moves[2].move.name}
        {infoPoke.moves[3].move.name}
        {infoPoke.moves[4].move.name}
        - poderes:

        HP: {infoPoke.stats[0].base_stat}
        Ataque: {infoPoke.stats[1].base_stat}
        Defesa: {infoPoke.stats[2].base_stat}
        Ataque Especial: {infoPoke.stats[3].base_stat}
        Defesa Especial: {infoPoke.stats[4].base_stat}
        Velocidade: {infoPoke.stats[5].base_stat}
      </>
      }
    </div>
  );
}

export default DetailsPage;