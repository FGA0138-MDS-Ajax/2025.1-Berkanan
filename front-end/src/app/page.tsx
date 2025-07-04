'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Filter from "@/components/search/Filter";
import SpeciesCard from "../components/species/Card";
import Navigation from "@/components/layout/Navigation";
import { useAnimals } from '@/hooks/useAnimals';
import { colorMap } from '@/utils/utils';
import Footer from '@/components/layout/Footer';
import logo from '@/resources/logo.png';
import { Bebas_Neue, Magra } from 'next/font/google';

// Fontes
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const magra = Magra({ weight: ['400'], subsets: ['latin'] });

export default function Page() {
  const { animals } = useAnimals();
  const router = useRouter();

  const handleAnimalSelect = (animalSlug: string) => {
    router.push(`/species/${animalSlug}`);
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <Navigation />

      {/* Primeira "página" - Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-background-light px-6 transition-all duration-700 ease-in-out">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={500}
              className="mb-4"
            />
          </div>

          {/* Texto */}
          <div className={`text-medium-green text-2xl leading-normal tracking-widest ${magra.className} animate-fade-in`}> 
            <p className="mb-2">Procure por uma espécie</p>
            <p>ou nos deixe te mostrar algumas!</p>
          </div>

          {/* Botão de iniciar busca */}
          <button
            onClick={() => {
              const section = document.getElementById('species-section');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-6 px-6 py-3 bg-medium-green text-background-light rounded-full text-lg tracking-wide hover:bg-[#5a6c5a] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Iniciar busca
          </button>
        </div>
      </section>

      {/* Segunda "página" - Seção de espécies */}
      <section id="species-section" className="min-h-screen bg-background-light flex flex-col overflow-hidden transition-opacity duration-700">
        {/* Seção de filtros com largura total e barra verde */}
        <div className="w-full bg-medium-green text-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            {/* Randomizar e ordenar */}
            <div className="flex gap-8">
              <button className="relative text-white transition-all duration-300 group">
  <span className="group-hover:text-background-light">Randomizar seleção</span>
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
</button>
              <button className="relative text-white transition-all duration-300 group">
  <span className="group-hover:text-background-light">Ordenar de A-Z</span>
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
</button>
            </div>
            {/* Input de pesquisa */}
            <div>
              <input
                type="text"
                placeholder="Pesquise por nome"
                className="bg-white/10 border border-white/20 placeholder:text-white/70 w-64 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Cards com rolagem interna */}
        <div className="flex-1 overflow-y-auto max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <div
                key={animal.id}
                onClick={() => animal.slug && handleAnimalSelect(animal.slug)}
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <SpeciesCard
                  image={animal.image}
                  name={animal.name}
                  tags={[
                    { label: animal.grupo, color: colorMap[animal.grupo] },
                    { label: animal.risco, color: colorMap[animal.risco] }
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
