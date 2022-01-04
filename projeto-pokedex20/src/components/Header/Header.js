import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexListPage } from "../../routes/coordinator";
import { HeaderContainer, ListButton, PokeButton } from "./styled";

function Header() {
    const navigate = useNavigate()
  
    return (
        <HeaderContainer>
            <h1>Pokémons</h1>
            <PokeButton onClick={() => goToPokedexListPage(navigate)}>Ir para Pokedéx</PokeButton>
            <ListButton onClick={() => goToHomePage(navigate)}>Voltar para lista</ListButton>
        </HeaderContainer>
    );
}

export default Header;
