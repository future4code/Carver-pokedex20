import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PokemonContext } from "../../contexts/PokemonContext";
import useRequestData from "../../hooks/useRequestData";
import { goToPokedexListPage } from "../../routes/coordinator";
import { DetailsContainer, MainContainer, ContainerButtons, ButtonCard, ImagesContainer, ImgPoke, InfosContainer, MovesContainer, StatsContainer, TitleContainer, TypesContainer } from "./styled";

function DetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [infoPoke, setInfoPoke] = useRequestData(params);
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [refresh, setRefresh] = useState(false);

  const indexPoke = pokemons && pokemons.findIndex((poke) => { return poke.name === params.name });

  const uppercaseFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.substr(1)
  }

  const addPoke = () => {
    pokemons[indexPoke].where = "pokedex";
    setPokemons(pokemons);
    setRefresh(!refresh);
  }

  const delPoke = () => {
    pokemons[indexPoke].where = "home";
    setPokemons(pokemons);
    setRefresh(!refresh);
  }

  const listTypes = infoPoke && infoPoke.types.map((type, id) => {
    return <li key={id}>{uppercaseFirst(type.type.name)}</li>
  });

  const listMoves = infoPoke && infoPoke.moves.map((move, id) => {
    if (id <= 4) {
      return <li key={id}>{uppercaseFirst(move.move.name)}</li>
    }
  });


  return (
    <DetailsContainer>
      {infoPoke && <>

        <h2>{uppercaseFirst(infoPoke.name)}</h2>
        <ContainerButtons>
          {pokemons && pokemons[indexPoke].where === "pokedex" ?
            <ButtonCard onClick={delPoke}>Remover da Pokédex</ButtonCard>
            :
            <ButtonCard onClick={addPoke}>Adicionar à Pokédex</ButtonCard>
          }
          <ButtonCard onClick={() => goToPokedexListPage(navigate)}> Ir para Pokédex</ButtonCard>
        </ContainerButtons>

        <MainContainer>
          <ImagesContainer>
            <ImgPoke alt="Foto do Pokémon" src={infoPoke.sprites.front_default} />
            <ImgPoke alt="Foto do Pokémon" src={infoPoke.sprites.back_default} />
          </ImagesContainer>
          <InfosContainer>
            <div>
              <TypesContainer>

                <TitleContainer>Tipo</TitleContainer>
                <ul>
                  {infoPoke && listTypes}
                </ul>

              </TypesContainer>
              <MovesContainer>
                <TitleContainer>Ataques</TitleContainer>
                <ul>
                  {infoPoke && listMoves}
                </ul>
              </MovesContainer>
            </div>
            <div>
              <StatsContainer>
                <TitleContainer>Status</TitleContainer>
                <ul>
                  <li>HP: {infoPoke.stats[0].base_stat}</li>
                  <li>Ataque: {infoPoke.stats[1].base_stat}</li>
                  <li>Defesa: {infoPoke.stats[2].base_stat}</li>
                  <li>Ataque Especial: {infoPoke.stats[3].base_stat}</li>
                  <li>Defesa Especial: {infoPoke.stats[4].base_stat}</li>
                  <li>Velocidade: {infoPoke.stats[5].base_stat}</li>
                </ul>
              </StatsContainer>
            </div>
          </InfosContainer>
        </MainContainer>
      </>
      }
    </DetailsContainer>
  );
}

export default DetailsPage;

