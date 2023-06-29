import { useEffect, useState } from "react";
import Head from "next/head";
import { apiGetAllCompany } from "@/service/apiService";

import Navbar from "@/components/Navbar/Navbar";
import Pagination from "@/components/Pagination/Pagination";
import Company from "@/components/Company/Company";

export default function Home() {
  const [allCompany, setAllCompany] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allCompanyPerPege] = useState(2);

  useEffect(() => {
    async function getAllCompany() {
      const backendAllCompany = await apiGetAllCompany();
      setAllCompany(backendAllCompany);
    }

    getAllCompany();
  }, []);

  const indexOfLastRecord = currentPage * allCompanyPerPege;
  const indexOfFirstRecord = indexOfLastRecord - allCompanyPerPege;
  const company = allCompany.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(allCompany.length / allCompanyPerPege);

  return (
    <>
      <Head>
        <title>Empresas Locais</title>
      </Head>
      <main>
        <nav>
          <Navbar />
        </nav>
        <div className="h-32 m-7">
          <h1 className="p-2 text-center font-bold text-2xl font-mono ">
            Confira as empresas parceiras próximo a você
          </h1>
        </div>
        <div className="">
          <Company data={company} />
          <div className="mt-3 flex justify-center">
            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </main>
    </>
  );
}
