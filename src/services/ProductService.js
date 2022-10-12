import axios from "axios";
const url = "http://localhost:8080/producto/";
export async function getProducts() {
  return await axios.get(url).then((response) => response.data.result);
}

export async function getProducto(id) {
  return await axios.get(url + id).then((response) => response.data.result);
}
