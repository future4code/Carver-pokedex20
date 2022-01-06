export const goToHomePage = (navigate) => {
    navigate("/");
  };
  
  export const goToDetailsPage = (navigate, pokeName) => {
    navigate(`/detalhes/pokemon/${pokeName}`);
  };
  
  export const goToPokedexListPage = (navigate) => {
    navigate("/pokedex");
  };
  