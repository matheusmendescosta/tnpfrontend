import React from "react";
import Router from "next/router";

function Company({ data }) {
  function handleRedirectLink(event) {
    Router.push(`http://localhost:3000/empresa/${event.target.value}`);
  }

  return (
    <div>
      {data.map((company) => {
        return (
          <div key={company.id} className="border p-2 hover:bg-slate-50">
            <ul>
              <li className="font-mono text-lg font-semibold pb-2">{company.nome_empresa}</li>
              <li>
                <span className="font-semibold">Endereço:</span> {company.endereco_empresa}
              </li>
              <li>
                <span className="font-semibold">Contato:</span> {company.contato}
              </li>
            </ul>
            <div className="p-2 flex justify-end">
              <button
                className=" bg-sky-400 rounded-lg w-52 h-8 font-semibold text-white hover:bg-sky-300"
                onClick={handleRedirectLink}
                value={company.id}
              >
                Visitar Loja
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Company;
