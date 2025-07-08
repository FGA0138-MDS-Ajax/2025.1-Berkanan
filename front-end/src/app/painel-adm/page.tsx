'use client';

import React, { useState } from "react";

import { colorMap } from "@/utils/utils";
import { useSpecies } from "@/hooks/useSpecies";
import Footer from "@/components/layout/Footer";
import { useAnimals } from "@/hooks/useAnimals";
import Manager from "@/components/species/Manager";
import SearchBar from "@/components/search/Searchbar";
import Navigation from "@/components/layout/Navigation";

export default function PainelAdministrador() {
  const { animals, fetchAnimals } = useAnimals();
  const { species, pagination, fetchSpecies } = useSpecies();

  const [grupoSelecionado, setGrupoSelecionado] = useState("Mamífero");
  const grupos = ["Mamífero", "Invertebrado", "Réptil", "Peixe"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pb-5">
        <div className="max-w-7xl mx-auto my-8 text-center justify-center">
          <div className="bg-light-green rounded-lg p-5 mb-6 flex-col gap-6">
            <p className="text-2xl font-semibold text-black mb-6 text-left">Filtros</p>
            <div className="flex flex-col items-end gap-2">
              <button className="bg-[#6f826a] text-white px-8 py-2 rounded-lg flex items-center gap-2">
                <span>➕</span>
                Adicionar Espécie
              </button>
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex items-center gap-16">
                <span className="font-semibold text-dark-green text-left font-medium min-w-[60px]">Grupo</span>
                <div className="flex gap-8">
                {grupos.map((grupo) => (
                  <button
                    key={grupo}
                    className={`px-4 py-1 rounded-full ${
                      grupoSelecionado === grupo ? "bg-[#6f826a] text-white" : "bg-white border border-[#6f826a] text-[#6f826a]"
                    }`}
                    onClick={() => setGrupoSelecionado(grupo)}
                  >
                    {grupo}
                  </button>
                ))}
              </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="font-semibold text-dark-green min-w-[100px] text-left">Status</span>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 border-3 border-medium-green bg-transparent appearance-none rounded-sm checked:bg-[#6f826a] checked:border-[#6f826a] relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center" />
                  <span className="text-dark-green">Criticamente em perigo (CR)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 border-3 border-medium-green bg-transparent appearance-none rounded-sm checked:bg-[#6f826a] checked:border-[#6f826a] relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center" />
                  <span className="text-dark-green">Em perigo (EN)</span>
                </label>
                <div className="flex flex-col items-end gap-2">
                </div>
              </div>
            </div>
          </div>

          <div className="bg-medium-green text-background rounded-lg">
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
            <div className="flex flex-col gap-auto mt-4 text-center text-foreground w-full">
              {animals.map((item, index) => (
                <div
                  key={item.id}
                  className={"w-full" + (animals.length == index + 1 ? " rounded-b-lg" : " ")}
                  style={(index % 2 === 0 ? { backgroundColor: "#6F826A" } : { backgroundColor: "#BBD8A3" })}>
                  <Manager
                    id={item.id!}
                    name={item.name}
                    tags={[
                      { label: item.grupo, color: colorMap[item.grupo] },
                      { label: item.risco, color: colorMap[item.risco] }
                    ]}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <div className="flex ">
              <p className=" text-black">Página {pagination.currentPage} - {pagination.totalPages} de {species.length} registros.</p>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-2 items-center">
                {(() => {
                  const pages = [];
                  const { currentPage, totalPages } = pagination;

                  const handleClick = (page: number) => {
                    
                    if (page !== currentPage) {
                      fetchSpecies(page);
                      fetchAnimals(page);
                    }
                  };
                  for (let i = 1; i <= Math.min(3, totalPages); i++) {
                    pages.push(
                      <button
                        key={i}
                        className={`px-4 py-2 rounded-lg transition-colors ${i === currentPage
                            ? 'bg-light-green text-white'
                            : 'bg-light-green text-white hover:bg-dark-green'
                          }`}
                        onClick={() => handleClick(i)}
                      >
                        {i}
                      </button>
                    );
                  }
                  if (currentPage > 4 && currentPage < totalPages - 2) {
                    pages.push(<span key="dots1">...</span>);
                  }
                  if (currentPage > 3 && currentPage < totalPages - 2) {
                    pages.push(
                      <button
                        key={currentPage}
                        className="px-4 py-2 rounded-lg bg-light-green text-white"
                        onClick={() => handleClick(currentPage)}
                      >
                        {currentPage}
                      </button>
                    );
                  }
                  if (currentPage < totalPages - 3) {
                    pages.push(<span key="dots2">...</span>);
                  }
                  for (let i = Math.max(totalPages - 1, 4); i <= totalPages; i++) {
                    if (i > 3) {
                      pages.push(
                        <button
                          key={i}
                          className={`px-4 py-2 rounded-lg transition-colors ${i === currentPage
                              ? 'bg-[#BBD8A3] text-white'
                              : 'bg-[#BBD8A3] text-white hover:bg-[#5a6b5c]'
                            }`}
                          onClick={() => handleClick(i)}
                        >
                          {i}
                        </button>
                      );
                    }
                  }
                  if (currentPage < totalPages) {
                    pages.push(
                      <button
                        key="next"
                        className="px-4 py-2 rounded-lg bg-[#BBD8A3] text-white hover:bg-[#5a6b5c]"
                        onClick={() => handleClick(currentPage + 1)}
                      >
                        &gt;
                      </button>
                    );
                  }
                  return pages;
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}