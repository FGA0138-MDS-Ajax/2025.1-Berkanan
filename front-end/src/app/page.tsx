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
        <div className="min-h-screen bg-[#F1FFED] flex flex-col">
            <Navigation />
            
            {/* Primeira "página" - Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#F1FFED] px-6">
                <div className="max-w-4xl mx-auto px-6">
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

                    <div className={`text-[#6f826a] text-2xl leading-normal tracking-widest ${magra.className}`}>
                        <p className="mb-2">Procure por uma espécie</p>
                        <p>ou nos deixe te mostrar algumas!</p>
                    </div>

                    {/* Botão de iniciar busca */}
                    <button
                        onClick={() => {
                            const section = document.getElementById('species-section');
                            section?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-6 px-6 py-3 bg-[#6f826a] text-[#F1FFED] rounded-full text-lg tracking-wide hover:bg-[#5a6c5a] transition-colors"
                    >
                        Iniciar busca
                    </button>
                </div>
            </section>

            {/* Segunda "página" - Seção de espécies */}
            <section id="species-section" className="min-h-screen bg-[#F1FFED]">
                {/* Seção de filtros com largura total */}
                <div className="w-full text-white bg-[#6f826a]">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-8">
                                <button className="hover:text-[#F1FFED] transition-colors text-[#ffffff]">
                                    Randomizar seleção
                                </button>
                                <button className="hover:text-[#F1FFED] transition-colors text-[#ffffff]">
                                    Ordenar de A-Z
                                </button>
                                <div className="relative"></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <input 
                                    placeholder="Pesquise por nome" 
                                    className="bg-white/10 border border-white/20 placeholder:text-white/70 w-64 text-[#F1FFED] px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent" 
                                    type="text" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conteúdo dos cards */}
                <div className="max-w-7xl mx-auto px-6 py-12">
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
                </div>
            </section>

            {/* Rodapé */}
            <footer className="bg-[#6f826a] text-[#F1FFED] py-4 px-6 w-full">
                <h2 className={`text-xl tracking-[0.2em] ${bebasNeue.className} text-center`}>
                    C E R R A D E X
                </h2>
            </footer>
        </div>
    )
}