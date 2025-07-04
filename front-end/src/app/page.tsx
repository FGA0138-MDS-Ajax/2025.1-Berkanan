'use client';
import { useRouter } from 'next/navigation'

import Filter from "@/components/search/Filter"
import SpeciesCard from "../components/species/Card"
import Navigation from "@/components/layout/Navigation"
import { useAnimals } from '@/hooks/useAnimals';
import { colorMap } from '@/utils/utils';
import Footer from '@/components/layout/Footer';

export default function Page() {
    const { animals } = useAnimals();
    const router = useRouter();

    // Função para selecionar um animal
    const handleAnimalSelect = (animalSlug: string) => {
        router.push(`/species/${animalSlug}`);
    };

    // Caso contrário, mostra a página principal
    return (
        <div className="min-h-screen">
            <Navigation />
            <section className="py-16 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-lg mb-4 tracking-wider text-medium-green">Bem-vindo ao</p>
                    <h1 className="text-5xl font-light text-beige text-shadow-lg border-inherit mb-8 tracking-wider">CERRADEX</h1>
                    <div className="text-medium-green text-lg leading-relaxed tracking-wide">
                        <p>Procure por uma espécie</p>
                        <p>ou nos deixe te mostrar algumas!</p>
                    </div>
                </div>
            </section>
            <Filter />
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {animals.map((animal) => (
                        <div 
                            key={animal.id} 
                            onClick={() => animal.slug && handleAnimalSelect(animal.slug)}
                            className="cursor-pointer" 
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
            </section>
            <Footer />
        </div>
    )
}