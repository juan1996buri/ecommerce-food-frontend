import axios from "axios";
const api = "http://localhost:8080/categoria";

export const getCategorias = async () => {
  return await axios.get(api).then((res) => res.data.result);
};
