import React from "react";
import { ButtonCard, ContainerCard } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";

const PokeCard = (props) => {
    const location = useLocation();
    const navigate = useNavigate()

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
                    <ButtonCard onClick={delPoke}>Remover da Pokédex</ButtonCard>
                    :
                    <ButtonCard onClick={addPoke}>Adiconar a Pokédex</ButtonCard>
                }
                <ButtonCard onClick={() => goToDetailsPage(navigate)}>Ver detalhes</ButtonCard>
            </div>
        </ContainerCard>
    )
}

export default PokeCard;