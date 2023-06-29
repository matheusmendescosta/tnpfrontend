import { read } from "./httpService";

export async function apiGetAllCompany() {
  const allCompany = await read("/empresas");
  return allCompany;
}
