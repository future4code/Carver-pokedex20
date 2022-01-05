import React from "react";
import { ContainerCard } from "./styled";
import { useLocation } from "react-router-dom";

const PokeCard = (props) => {
    const location = useLocation();

    const addPoke = () => {
        alert(`Pokémon adicionado! =)`);
    }

    const delPoke = () => {
        alert(`Pokémon removido!`);
    }

    return (
        <ContainerCard>
            <img alt="Foto do Pokémon" src={props.poke.sprites.front_default} />
            <div>
                {location.pathname === "/pokedex" ?
                    <button onClick={delPoke}>Remover da Pokédex</button>
                    :
                    <button onClick={addPoke}>Adiconar a Pokédex</button>
                }
                <button>Ver detalhes</button>
            </div>
        </ContainerCard>
    )
}

export default PokeCard;