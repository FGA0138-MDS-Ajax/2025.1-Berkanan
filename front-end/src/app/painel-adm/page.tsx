'use client';

import React, { useState, useMemo } from "react";
import { useRouter } from 'next/navigation';

import { colorMap } from "@/utils/utils";
import { useAnimals } from "@/hooks/useAnimals";
import Footer from "@/components/layout/Footer";
import { useSpecies } from "@/hooks/useSpecies";
import Manager from "@/components/species/Manager";
import SearchBar from "@/components/search/Searchbar";
import Pagination from "@/components/utils/Pagination";
import Navigation from "@/components/layout/Navigation";
import SelectGroup from "@/components/layout/Group";
import SelectStatus from "@/components/layout/Status";
import { RiskStatus } from "@/types/general.types";

export default function PainelAdministrador() {
  const router = useRouter();
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

  const AddSpecie = () => {
     router.push(`/adicionar-animal`);
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pb-5">
        <section className="max-w-7xl mx-auto my-8 text-center">
          <div className="bg-light-green rounded-lg p-5 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-black">Filtros</h2>
              <button className="bg-[#6f826a] text-white px-8 py-2 rounded-lg flex items-center gap-2" onClick={AddSpecie}>
                <span>➕</span> Adicionar Espécie
              </button>
            </div>

            <div className="flex flex-col gap-8">
              <SelectGroup onClick={setGrupoSelecionado} selected={grupoSelecionado} showAll/>
              <SelectStatus selectedRiskStatuses={selectedRiskStatuses} setSelectedRiskStatuses={setSelectedRiskStatuses}/>
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