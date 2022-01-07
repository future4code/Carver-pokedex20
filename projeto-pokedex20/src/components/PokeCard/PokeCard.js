import React, { useContext } from "react";
import { ButtonCard, ContainerCard } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { PokemonContext } from "../../contexts/PokemonContext";
import { goToDetailsPage } from "../../routes/coordinator";

const PokeCard = (props) => {
    const [pokemons, setPokemons] = useContext(PokemonContext);
    const location = useLocation();
    const navigate= useNavigate();

    const addPoke = () => {
        const indexPoke = pokemons.findIndex((poke) => { return poke.name === props.poke.name }); 
        pokemons[indexPoke].where = "pokedex";
        setPokemons(pokemons);
        props.setRefresh(!props.refresh);
    }

    const delPoke = () => {
        const indexPoke = pokemons.findIndex((poke) => { return poke.name === props.poke.name }); 
        pokemons[indexPoke].where = "home";
        setPokemons(pokemons);
        props.setRefresh(!props.refresh);
    }

    return (
        <ContainerCard>
            <img alt="Foto do Pokémon" src={props.poke.sprites.front_default} />
            <div>
                {location.pathname === "/pokedex" ?
                    <ButtonCard onClick={delPoke}>Remover da Pokédex</ButtonCard>
                    :
                    <ButtonCard onClick={addPoke}>Adiconar a Pokédex</ButtonCard>
                }
                <ButtonCard onClick={() => goToDetailsPage(navigate, props.poke.name)}>Ver detalhes</ButtonCard>
            </div>
        </ContainerCard>
    )
}

export default PokeCard;