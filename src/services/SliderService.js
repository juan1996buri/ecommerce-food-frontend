import axios from "axios";
const api = "http://localhost:8080/slider";

export const getSliders = async () => {
  return await axios.get(api).then((res) => res.data.result);
};
