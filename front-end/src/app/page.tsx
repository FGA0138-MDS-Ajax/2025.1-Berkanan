'use client';
import { useRouter } from 'next/navigation'

import Filter from "@/components/search/Filter"
import { useSpecies } from "../hooks/useSpecies"
import SpeciesCard from "../components/species/Card"
import Navigation from "@/components/layout/Navigation"

export default function Page() {
    const { species } = useSpecies();
    const router = useRouter();

    // Função para selecionar um animal
    const handleAnimalSelect = (animalId: string) => {
        router.push(`/species/${animalId}`);
    };

    // Caso contrário, mostra a página principal
    return (
        <div className="min-h-screen bg-[#fffed7]">
            <Navigation />
            <section className="py-16 text-center bg-[#fffed7]">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-lg mb-4 tracking-wider text-[#6f826a]">Bem-vindo ao</p>
                    <h1 className="text-5xl font-light text-gray-800 mb-8 tracking-wider">CerraDex</h1>
                    <div className="text-[#6f826a] text-lg leading-relaxed tracking-wide">
                        <p>Procure por uma espécie</p>
                        <p>ou nos deixe te mostrar algumas!</p>
                    </div>
                </div>
            </section>
            <Filter />
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {species.map((animal, index) => (
                        <div 
                            key={animal.id} 
                            onClick={() => animal.id && handleAnimalSelect(animal.id)} // Added null check
                            className="cursor-pointer" // Added cursor pointer for better UX
                        >
                            <SpeciesCard 
                                image={animal.image}
                                name={animal.name} 
                                tags={animal.tags} 
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}