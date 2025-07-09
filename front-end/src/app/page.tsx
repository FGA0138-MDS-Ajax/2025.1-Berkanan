'use client';
import React, { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import logo from '@/resources/logo.png';
import { colorMap } from '@/utils/utils';
import { useAnimals } from '@/hooks/useAnimals';
import Footer from '@/components/layout/Footer';

import { Bebas_Neue, Magra } from 'next/font/google';

const magra = Magra({ weight: ['400'], subsets: ['latin'] });

import SpeciesCard from "../components/species/Card";
import FilterSection from '@/components/search/Filter';
import Navigation from "@/components/layout/Navigation";
import Pagination from '@/components/utils/Pagination';

export default function SpeciesPage() {
  const { animals, pagination, fetchAnimals } = useAnimals();
  const router = useRouter();

  
  const [searchTerm, setSearchTerm] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [isRandomized, setIsRandomized] = useState(false);

  const handleAnimalSelect = useCallback((animalSlug: string) => {
    router.push(`/species/${animalSlug}`);
  }, [router]);

  const scrollToSpecies = useCallback(() => {
    const section = document.getElementById('species-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value.toLowerCase());
  }, []);

  const handleSortAlphabetically = useCallback(() => {
    setIsSorted(prev => !prev);
  }, []);

  const handleRandomizeSelection = useCallback(() => {
    setIsRandomized(prev => !prev);
  }, []);

  const filteredAnimals = useMemo(() => {
    let result = [...animals];

    if (searchTerm) {
      result = result.filter(animal =>
        animal.name.toLowerCase().includes(searchTerm) ||
        animal.grupo.toLowerCase().includes(searchTerm) ||
        animal.risco.toLowerCase().includes(searchTerm)
      );
    }

    if (isSorted) {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (isRandomized) {
      result.sort(() => Math.random() - 0.5);
    }

    return result;
  }, [animals, searchTerm, isSorted, isRandomized]);

  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <Navigation />
      <section className="h-screen flex flex-col justify-center items-center text-center bg-background-light px-6 transition-all duration-700 ease-in-out">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-4">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={500}
              className="mb-4"
              priority
            />
          </div>
          <div className={`text-medium-green text-2xl leading-normal tracking-widest animate-fade-in`}>
            <p className="mb-2">Procure por uma espécie</p>
            <p>ou nos deixe te mostrar algumas!</p>
          </div>
          <button
            onClick={scrollToSpecies}
            className="
          mt-6 
          px-6 
          py-3 
          text-lg 
          text-white
          rounded-full 
          tracking-wide 
          bg-medium-green 
          hover:bg-[#5a6c5a] 
          text-background-light 
          transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Iniciar busca
          </button>
        </div>
      </section>
      <section
        id="species-section"
        className="min-h-screen bg-background-light flex flex-col overflow-hidden transition-opacity duration-700"
      >
        <FilterSection
          onSearch={handleSearch}
          onClickRandomize={handleRandomizeSelection}
          onClickSort={handleSortAlphabetically}
        />
        <div className="flex-1 overflow-y-auto max-w-7xl mx-auto px-6 py-12">
          {filteredAnimals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAnimals.map((animal) => (
                <div
                  key={animal.id}
                  onClick={() => animal.slug && handleAnimalSelect(animal.slug)}
                  className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                >
                  <SpeciesCard
                    image={animal.images}
                    name={animal.name}
                    tags={[
                      { label: animal.grupo, color: colorMap[animal.grupo] },
                      { label: animal.risco, color: colorMap[animal.risco] }
                    ]}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-xl">
              Nenhum animal encontrado
            </div>
          )}
        <div className='mt-10'>
        <Pagination
          pagination={pagination}
          fetchAnimals={fetchAnimals}
          length={animals.length}
          />
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}