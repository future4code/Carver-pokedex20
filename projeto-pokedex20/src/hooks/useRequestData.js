import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const useRequestData = (poke) => {
  const [data, setData] = useState("");

  useEffect(() => {
   axios.get(`${BASE_URL}/${poke.name}`)
   .then((res) => {
     setData(res.data);
   }).catch((err) => {
     alert("Erro, tente novamente.")
   })
  }, []);

  return [data, setData];
};

export default useRequestData;
