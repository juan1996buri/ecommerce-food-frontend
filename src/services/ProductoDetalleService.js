import axios from "axios";

const url = "http://localhost:8080/productoDetalle/";

export const getProductoDetalles = async () => {
  return await axios.get(url).then((res) => res.data.result);
};
export const getProductoDetalle = async (id) => {
  return await axios.get(url + id).then((res) => res.data.result);
};
