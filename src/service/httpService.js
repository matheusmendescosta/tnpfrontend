import axios from "axios";

const BASE_URL = "http://localhost:4000/empresas";

export async function read() {
  const { data } = await axios.get(BASE_URL);
  return data;
}

// export async function read() {
//   const res = await fetch("http://localhost:4000/empresas");
//   const data = await res.json();

//   return data;
// }
