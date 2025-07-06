'use client';

import React, { useState, useMemo, useCallback } from "react";

import { colorMap } from "@/utils/utils";
import { useAnimals } from "@/hooks/useAnimals";
import Footer from "@/components/layout/Footer";
import { useSpecies } from "@/hooks/useSpecies";
import Manager from "@/components/species/Manager";
import SearchBar from "@/components/search/Searchbar";
import Pagination from "@/components/utils/Pagination";
import Navigation from "@/components/layout/Navigation";

enum RiskStatus {
  CR = "CR",
  EN = "EN"
}

const grupos = ["Todos", "Mamífero", "Invertebrado", "Réptil", "Peixe"];

export default function PainelAdministrador() {
  const { animals, fetchAnimals } = useAnimals();
  const { pagination, fetchSpecies } = useSpecies();

  const [grupoSelecionado, setGrupoSelecionado] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRiskStatuses, setSelectedRiskStatuses] = useState<RiskStatus[]>([]);

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesGrupo = grupoSelecionado === "Todos" || animal.grupo === grupoSelecionado;
      const matchesSearch = searchTerm.trim() === "" || [
        animal.name,
        animal.grupo,
        animal.risco,
        animal.id?.toString()
      ].some(field => field?.toLowerCase().includes(searchTerm.toLowerCase().trim()));

      const matchesRisk = selectedRiskStatuses.length === 0 || selectedRiskStatuses.includes(animal.risco as RiskStatus);
      return matchesGrupo && matchesSearch && matchesRisk;
    });
  }, [animals, grupoSelecionado, searchTerm, selectedRiskStatuses]);

  const handleRiskStatusToggle = useCallback((status: RiskStatus) => {
    setSelectedRiskStatuses(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  }, []);

  const getRiskStatusLabel = (status: RiskStatus): string => ({
    [RiskStatus.CR]: "Criticamente em perigo (CR)",
    [RiskStatus.EN]: "Em perigo (EN)"
  })[status];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pb-5">
        <section className="max-w-7xl mx-auto my-8 text-center">
          <div className="bg-light-green rounded-lg p-5 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-black">Filtros</h2>
              <button className="bg-[#6f826a] text-white px-8 py-2 rounded-lg flex items-center gap-2">
                <span>➕</span> Adicionar Espécie
              </button>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <span className="font-semibold text-dark-green min-w-[60px]">Grupo</span>
                <div className="flex gap-4 flex-wrap">
                  {grupos.map(grupo => (
                    <button
                      key={grupo}
                      className={`px-4 py-1 rounded-full transition-colors ${grupoSelecionado === grupo
                          ? "bg-[#6f826a] text-white"
                          : "bg-white border border-[#6f826a] text-[#6f826a]"
                        }`}
                      onClick={() => setGrupoSelecionado(grupo)}
                    >
                      {grupo}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-semibold text-dark-green min-w-[100px]">Status</span>
                <div className="flex gap-4 flex-wrap">
                  {Object.values(RiskStatus).map(status => (
                    <label key={status} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedRiskStatuses.includes(status)}
                        onChange={() => handleRiskStatusToggle(status)}
                        className="w-5 h-5 border-3 border-medium-green bg-transparent appearance-none rounded-sm 
                      checked:bg-[#6f826a] checked:border-[#6f826a] 
                      relative checked:after:content-['✓'] checked:after:text-white 
                      checked:after:text-xs checked:after:absolute checked:after:inset-0 
                      checked:after:flex checked:after:items-center checked:after:justify-center"
                      />
                      <span className="text-dark-green">{getRiskStatusLabel(status)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-medium-green text-background rounded-lg">
            <div className="flex justify-between items-center p-4">
              <h2 className="ml-5 text-2xl">Total: {filteredAnimals.length}</h2>
              <SearchBar
                placeholder="Pesquise por nome, grupo ou status"
                className="mb-4"
                onSearch={setSearchTerm}
              />
            </div>

            <div className="flex justify-evenly items-center font-semibold">
              {["ID", "Nome da espécie", "Grupo", "Status", "Editar", "Remover"].map(header => (
                <p key={header} className="w-1/6">{header}</p>
              ))}
            </div>

            <div className="flex flex-col mt-4 text-center text-foreground w-full">
              {filteredAnimals.length > 0 ? (
                filteredAnimals.map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-full ${index === filteredAnimals.length - 1 ? "rounded-b-lg" : ""}`}
                    style={{ backgroundColor: index % 2 === 0 ? "#6F826A" : "#BBD8A3" }}
                  >
                    <Manager
                      id={item.id!}
                      name={item.name}
                      tags={[
                        { label: item.grupo, color: colorMap[item.grupo] },
                        { label: item.risco, color: colorMap[item.risco] }
                      ]}
                    />
                  </div>
                ))
              ) : (
                <div className="text-white py-4">Nenhuma espécie encontrada</div>
              )}
            </div>
          </div>

          <Pagination
            pagination={pagination}
            fetchSpecies={fetchSpecies}
            fetchAnimals={fetchAnimals}
            length={filteredAnimals.length}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
