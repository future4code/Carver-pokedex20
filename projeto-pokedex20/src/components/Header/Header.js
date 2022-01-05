import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { goToHomePage, goToPokedexListPage } from "../../routes/coordinator";
import { HeaderContainer, ImgLogo, PokeButton } from "./styled";
import Logo from '../../assets/logo.svg'

function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <HeaderContainer>
            <ImgLogo alt={"logo"} src={Logo} />
            {location.pathname === "/" ?
                <PokeButton onClick={() => goToPokedexListPage(navigate)}>Pokedéx</PokeButton>
                :
                <PokeButton onClick={() => goToHomePage(navigate)}>Pokelista</PokeButton>
            }
        </HeaderContainer>
    );
}

export default Header;
