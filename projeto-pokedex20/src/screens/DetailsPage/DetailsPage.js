import React from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { DetailsContainer, ImagesContainer, ImgPoke, InfosContainer, MovesContainer, StatsContainer, TitleContainer, TypesContainer } from "./styled";

function DetailsPage() {
  const params = useParams();
  const [infoPoke, setInfoPoke] = useRequestData(params);

  return (
    <DetailsContainer>
      {infoPoke && <>
        <h2>{infoPoke.name.toUpperCase()}</h2>
        <ImagesContainer>
          <ImgPoke alt="Foto do Pokémon" src={infoPoke.sprites.back_default} />
          <ImgPoke alt="Foto do Pokémon" src={infoPoke.sprites.front_default} />
        </ImagesContainer>
        <InfosContainer>
          <TypesContainer>
            <TitleContainer> Tipo:</TitleContainer>
            <h4> {infoPoke.types[0].type.name} </h4>
          </TypesContainer>
          <MovesContainer>
            <TitleContainer> Ataques:</TitleContainer>
            <h4>
              {infoPoke.moves[0].move.name}
              {infoPoke.moves[1].move.name}
              {infoPoke.moves[2].move.name}
              {infoPoke.moves[3].move.name}
              {infoPoke.moves[4].move.name}
            </h4>
          </MovesContainer>
          <StatsContainer>
            <TitleContainer>Poderes</TitleContainer>
            <h4>
              HP: {infoPoke.stats[0].base_stat}
              Ataque: {infoPoke.stats[1].base_stat}
              Defesa: {infoPoke.stats[2].base_stat}
              Ataque Especial: {infoPoke.stats[3].base_stat}
              Defesa Especial: {infoPoke.stats[4].base_stat}
              Velocidade: {infoPoke.stats[5].base_stat}
            </h4>
          </StatsContainer>
        </InfosContainer>
      </>
      }
    </DetailsContainer>
  );
}

export default DetailsPage;

