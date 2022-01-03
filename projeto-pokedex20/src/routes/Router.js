import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../screens/HomePage/HomePage";
import DetailsPage from "../screens/DetailsPage/DetailsPage";
import PokedexListPage from "../screens/PokedexListPage/PokedexList";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} exact element={<HomePage />}  />
                <Route path={"/detalhes-do-pokemon"} element={<DetailsPage />} />
                <Route path={"/pokedex"} element={<PokedexListPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
