'use client';
import { useRouter } from 'next/navigation'
import { Bebas_Neue } from 'next/font/google'
import Filter from "@/components/search/Filter"
import SpeciesCard from "../components/species/Card"
import Navigation from "@/components/layout/Navigation"
import { useAnimals } from '@/hooks/useAnimals';
import { colorMap } from '@/utils/utils';

// Configuração da fonte
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function Page() {
    const { animals } = useAnimals();
    const router = useRouter();

    const handleAnimalSelect = (animalSlug: string) => {
        router.push(`/species/${animalSlug}`);
    };

    return (
        <div className="min-h-screen bg-[#fffed7] flex flex-col">
            <Navigation />
            <main className="flex-grow">
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
            </main>
            
            {/* Rodapé com fonte Bebas Neue e espaçamento entre letras */}
    <footer className="bg-[#6f826a] text-[#fffed7] py-2 px-6 w-full">
  <h2 className={`text-lg tracking-[0.1em] ${bebasNeue.className}`}>
    C E R R A D E X
  </h2>
</footer>
        </div>
    )
}