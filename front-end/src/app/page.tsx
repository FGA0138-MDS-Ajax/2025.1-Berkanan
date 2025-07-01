'use client';
import { useRouter } from 'next/navigation'
import { Bebas_Neue, Magra } from 'next/font/google'
import Image from 'next/image';
import Filter from "@/components/search/Filter"
import SpeciesCard from "../components/species/Card"
import Navigation from "@/components/layout/Navigation"
import { useAnimals } from '@/hooks/useAnimals';
import { colorMap } from '@/utils/utils';
import logo from '@/resources/logo.png';

// Fontes
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const magra = Magra({
  weight: ['400'],
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
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                            <Image 
                                src={logo}
                                alt="logo"
                                width={400}
                                height={150}
                                className="mb-4"
                            />
                        </div>
                        {/* Texto com Magra e tamanho aumentado */}
                        <div className={`text-[#6f826a] text-2xl leading-relaxed tracking-wider ${magra.className}`}>
                            <p className="mb-2">Procure por uma espécie</p>
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

            {/* Rodapé com Bebas Neue */}
            <footer className="bg-[#6f826a] text-[#fffed7] py-2 px-6 w-full">
                <h2 className={`text-lg tracking-[0.1em] ${bebasNeue.className}`}>
                    C E R R A D E X
                </h2>
            </footer>
        </div>
    )
}
