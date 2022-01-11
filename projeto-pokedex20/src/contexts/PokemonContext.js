import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

export const PokemonContext = React.createContext();

const PokemonProvider = (props) => {
    const [pokemons, setPokemons] = useState("");

    useEffect(() => {
        requestPokes();
    }, []);

    const requestPokes = () => {
        const pokemonsList = [];
        let promises = [];
        for (let i = 1; i < 21; i++) {
            promises.push(
                axios.get(`${BASE_URL}/${i}`)
                    .then((res) => {
                        let pokemonWhere = { ...res.data, where: "home" };
                        pokemonsList.push(pokemonWhere);
                    }));
        }
        Promise.all(promises).then(() => {
            pokemonsList.sort((a, b) => a.id - b.id);
            setPokemons(pokemonsList);
        }
        );
    }

    return (
        <PokemonContext.Provider value={[pokemons, setPokemons]}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;