import { useRouter } from "next/router";
import React from "react";
import { apiGetAllCompany } from "@/service/apiService";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

export async function getServerSideProps() {
  const company = await apiGetAllCompany();

  return {
    props: {
      company,
    },
  };
}

function empresa(props) {
  const router = useRouter();
  const company_id = router.query.id;

  const allCompany = props.company.filter((company) => company.id == company_id);
  const titleCompany = allCompany[0].nome_empresa;

  return (
    <>
      <Head>
        <title>{titleCompany}</title>
      </Head>
      <Navbar />
      <div>
        <div className="flex justify-center">
          <Image src={"/capa.jpg"} width={500} height={500} alt="imagem da empresa" />
        </div>
        <div className="flex flex-row text-start justify-between p-6">
          <h1 className="text-2xl font-semibold">{titleCompany}</h1>
          <button className="flex flex-row text-center justify-center text-lg bg-sky-400 rounded-lg w-28 h-11 p-2">
            Seguir{" "}
            <span className="mt-1 pl-2">
              <AiOutlineHeart />
            </span>
          </button>
        </div>
      </div>
      <div>
        {allCompany.map((informationCompany) => {
          return (
            <p key={informationCompany.id} className="p-4 text-start font-medium font-sans">
              {informationCompany.descricao_empresa}
            </p>
          );
        })}
      </div>

      <div className="mt-8 p-4">
        <span>
          Faça-nos uma visita, estamos localizados na{" "}
          <span className="font-semibold">{allCompany[0].endereco_empresa}</span>
        </span>
      </div>

      <div className="mt-8 p-4">
        <span>
          Contato: <span className="font-semibold">{allCompany[0].contato}</span>
        </span>
      </div>
    </>
  );
}

export default empresa;
