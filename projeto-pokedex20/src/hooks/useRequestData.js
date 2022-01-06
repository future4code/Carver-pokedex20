import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const useRequestData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let pokemonsList = [];
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
      setData(pokemonsList);
    }
    );
  }, []);

  return [data, setData];
};

export default useRequestData;
