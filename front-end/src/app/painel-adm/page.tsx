'use client';

import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import SearchBar from "@/components/search/Searchbar";
import Manager from "@/components/species/Manager";
import { useSpecies } from "@/hooks/useSpecies";
import React, { useState } from "react";

export default function PainelAdministrador() {
  const { species } = useSpecies();
  const [grupoSelecionado, setGrupoSelecionado] = useState("Mamífero");

  const requestOptions = {
    totalPages: 2,
    currentPage: 1,
    pageSize: 3,
  }

  function getPaginationPages(current: number, total: number): (number | string)[] {
    const pages: (number | string)[] = [];

    if (total <= 5) {
      // Mostra todas as páginas se forem poucas
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (current <= 3) {
        // Início da paginação
        pages.push(1, 2, 3, 4, '...', total);
      } else if (current >= total - 2) {
        // Fim da paginação
        pages.push(1, '...', total - 3, total - 2, total - 1, total);
      } else {
        // Meio da paginação
        pages.push(1, '...', current - 1, current, current + 1, '...', total);
      }
    }

    return pages;
  }
  return (
    <div className="min-h-screen bg-[#FFFFED] flex flex-col">
      <Navigation />
      <div className="flex-grow pb-5">
        <div className="max-w-7xl mx-auto my-8 text-center justify-center">
          <div className="bg-[#BBD8A3] rounded-lg p-5 mb-6 flex-col gap-6">
            <p className="text-2xl font-semibold text-black mb-6 text-left">Filtros</p>
            <div className="flex flex-col items-end gap-2">
              <button className="bg-[#6f826a] text-white px-8 py-2 rounded-lg flex items-center gap-2">
                <span>➕</span>
                Adicionar Espécie
              </button>
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex items-center gap-16">
                <span className="font-semibold text-[#4F4F4F] text-left font-medium min-w-[60px]">Grupo</span>
                <div className="flex gap-8">
                  <button
                    className={`px-4 py-1 rounded-full ${grupoSelecionado === "Mamífero" ? "bg-[#6f826a] text-white" : "bg-white border border-[#6f826a] text-[#6f826a]"}`}
                    onClick={() => setGrupoSelecionado("Mamífero")}
                  >
                    Mamífero
                  </button>
                  <button
                    className={`px-4 py-1 rounded-full ${grupoSelecionado === "Invertebrado" ? "bg-[#6f826a] text-white" : "bg-white border border-[#6f826a] text-[#6f826a]"}`}
                    onClick={() => setGrupoSelecionado("Invertebrado")}
                  >
                    Invertebrado
                  </button>
                  <button
                    className={`px-4 py-1 rounded-full ${grupoSelecionado === "Réptil" ? "bg-[#6f826a] text-white" : "bg-white border border-[#6f826a] text-[#6f826a]"}`}
                    onClick={() => setGrupoSelecionado("Réptil")}
                  >
                    Réptil
                  </button>
                  <button
                    className={`px-4 py-1 rounded-full ${grupoSelecionado === "Peixe" ? "bg-[#6f826a] text-white" : "bg-white border border-[#6f826a] text-[#6f826a]"}`}
                    onClick={() => setGrupoSelecionado("Peixe")}
                  >
                    Peixe
                  </button>
                </div>

              </div>
              <div className="flex items-center gap-8">
                <span className="font-semibold text-[#4F4F4F] min-w-[100px] text-left">Status</span>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 border-3 border-[#6f826a] bg-transparent appearance-none rounded-sm checked:bg-[#6f826a] checked:border-[#6f826a] relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center" />
                  <span className="text-[#6f826a]">Criticamente em perigo (CR)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 border-3 border-[#6f826a] bg-transparent appearance-none rounded-sm checked:bg-[#6f826a] checked:border-[#6f826a] relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center" />
                  <span className="text-[#6f826a]">Em perigo (EN)</span>
                </label>
                <div className="flex flex-col items-end gap-2">
                </div>
              </div>

            </div>
          </div>

          <div className="bg-[#6F826A] rounded-lg">
            <div className="flex justify-between items-center text-center mb-4 p-4">
              <h2 className="ml-5 text-2xl">Total: {species.length}</h2>
              <SearchBar placeholder="Pesquise por nome" className="mb-4" />
            </div>
            <div className="flex justify-evenly items-center">
              <p className="w-1/6 font-semibold">ID</p>
              <p className="w-1/6 font-semibold">Nome da espécie</p>
              <p className="w-1/6 font-semibold">Grupo</p>
              <p className="w-1/6 font-semibold">Status</p>
              <p className="w-1/6 font-semibold">Editar</p>
              <p className="w-1/6 font-semibold">Remover</p>
            </div>
            <div className="flex flex-col gap-auto mt-4 text-center w-full">
              {species.map((item, index) => (
                <div
                  key={item.id}
                  className={"w-full" + (species.length == index + 1 ? " rounded-b-lg" : " ")}
                  style={(index % 2 === 0 ? { backgroundColor: "#6F826A" } : { backgroundColor: "#BBD8A3" })}>
                  <Manager
                    key={item.id}
                    id={item.id!}
                    name={item.name}
                    tags={item.tags}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <div className="flex ">
                <p className=" text-black">Página {requestOptions.currentPage} - {requestOptions.totalPages} de {species.length} registros.</p>
            </div>
            <div className="flex gap-2">
            {getPaginationPages(requestOptions.currentPage, requestOptions.totalPages).map((page, idx) => {
                if (page === '...') {
                    return (
                        <span key={idx} className="px-3 py-2 text-gray-500 select-none">
                    ...
                  </span>
                );
            }
            
            return (
                <button
                key={idx}
                className={`px-4 py-2 rounded-lg transition-colors  ${page === requestOptions.currentPage
                    ? 'bg-[#BBD8A3] text-white'
                    : 'bg-[#BBD8A3] text-white hover:bg-[#5a6b5c]'
                }`}
                onClick={() => {
                    requestOptions.currentPage = page as number;
                }}
                >
                  {page}
                </button>
              );
            })}
            <div className="flex justify-center gap-2 mt-4">
              {requestOptions.currentPage > 1 && (
                  <button
                  className="px-4 py-2 bg-[#BBD8A3] text-white rounded-lg hover:bg-[#5a6b5c] transition-colors"
                  onClick={() => {
                      if (requestOptions.currentPage > 1) {
                          requestOptions.currentPage -= 1;
                        }
                    }}
                    >
                  {"<"}
                </button>
              )}

              {requestOptions.currentPage < requestOptions.totalPages && (
                  <button
                  className="px-4 py-2 bg-[#BBD8A3] text-white rounded-lg hover:bg-[#5a6b5c] transition-colors"
                  disabled={requestOptions.currentPage >= requestOptions.totalPages}
                  onClick={() => {
                      if (requestOptions.currentPage < requestOptions.totalPages) {
                          requestOptions.currentPage += 1;
                        }
                    }}
                >
                  {">"}
                </button>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}