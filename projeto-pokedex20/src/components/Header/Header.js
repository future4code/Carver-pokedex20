import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexListPage } from "../../routes/coordinator";
import { HeaderContainer, ImgLogo, ListButton, PokeButton } from "./styled";
import Logo from '../../assets/logo.svg'

function Header() {
    const navigate = useNavigate()
  
    return (
        <HeaderContainer>
            <ImgLogo alt={"logo"} src={Logo}/>
            <PokeButton onClick={() => goToPokedexListPage(navigate)}>Pokedéx</PokeButton>
            <ListButton onClick={() => goToHomePage(navigate)}>Pokelista</ListButton>
        </HeaderContainer>
    );
}

export default Header;
