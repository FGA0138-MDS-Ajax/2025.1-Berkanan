'use client';

import React from 'react';
import { speciesData } from '@/_api/species.api'; // Ajuste o caminho conforme necessário
import type { Species } from "@/types/species.types";

interface AnimalInfoProps {
  id: string;
  onBack: () => void;
}

interface ExtendedAnimalData {
  id: string;
  scientificName: string;
  commonName: string;
  commonNameSecondary: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  group: string;
  category: string;
  categoryStatus: 'EN' | 'VU' | 'CR' | 'LC' | 'NT';
  weight: string;
  height: string;
  lifespan: string;
  habitat: string;
  habitatRegions: string[];
  description: string;
  image: string;
  tags: Array<{
    label: string;
    color: string;
  }>;
}

// Função para buscar dados da espécie pelo ID
const getSpeciesById = (id: string): Species | undefined => {
  return (speciesData as Species[]).find((species: Species) => species.id === id);
};

// Função para converter Species para ExtendedAnimalData
const convertSpeciesToAnimalData = (species: Species): ExtendedAnimalData => {
  // Dados específicos para cada espécie - você pode expandir isso
  const detailedData: Record<string, Partial<ExtendedAnimalData>> = {
    "bugio-maos-ruivas": {
      scientificName: 'Alouatta ululata',
      commonNameSecondary: 'BUGIO-DE-MÃOS-RUIVAS-DO-MARANHÃO / GUARIBA',
      phylum: 'CHORDATA',
      class: 'MAMMALIA',
      order: 'PRIMATES',
      family: 'ATELIDAE',
      group: 'MAMÍFEROS',
      weight: '4,7 - 5,3 kg',
      height: '95 - 107,5 cm',
      lifespan: '15-20 anos',
      habitat: 'Habita o cerrado e caatinga, nas UF: Ceará, Maranhão, Piauí.',
      habitatRegions: ['Ceará', 'Maranhão', 'Piauí'],
      description: 'GERALMENTE HÁ DIMORFISMO SEXUAL ENTRE OS SEXOS, OU SEJA, MACHOS E FÊMEAS TÊM APARÊNCIAS DIFERENTES. AS GUARIBAS-DA-CAATINGA SÃO PRIMATAS DE MÉDIO PORTE QUE SE LOCOMOVEM DE FORMA QUADRÚPEDE E UTILIZAM A CAUDA COMO QUINTO MEMBRO. AS GUARIBAS VIVEM EM BANDOS, FORMADOS POR UM MACHO-ALFA, ALGUMAS FÊMEAS E OS FILHOTES.',
      image: '/images/bugio-maos-ruivas.jpg',
    },
    "cobra-duas-cabecas": {
      scientificName: 'Amphisbaena amazonica',
      commonNameSecondary: 'COBRA-DE-DUAS-CABEÇAS',
      phylum: 'CHORDATA',
      class: 'REPTILIA',
      order: 'SQUAMATA',
      family: 'AMPHISBAENIDAE',
      group: 'RÉPTEIS',
      weight: '50 - 100 g',
      height: '30 - 40 cm',
      lifespan: '8-12 anos',
      habitat: 'Habita solos arenosos do cerrado e caatinga.',
      habitatRegions: ['Cerrado', 'Caatinga'],
      description: 'A cobra-de-duas-cabeças é um réptil fossoriano que vive enterrado no solo. Possui corpo cilíndrico e cabeça pouco diferenciada da cauda, o que lhe confere a aparência de ter duas cabeças.',
      image: '/images/cobra-duas-cabecas.jpg',
    },
    // Adicione mais espécies conforme necessário
  };

  const specificData = detailedData['species.id'] || {};

  return {
    id: 'species.id',
    scientificName: specificData.scientificName || species.name || '',
    commonName: species.name || '',
    commonNameSecondary: specificData.commonNameSecondary || (species.name ? species.name.toUpperCase() : ''),
    phylum: specificData.phylum || 'N/A',
    class: specificData.class || 'N/A',
    order: specificData.order || 'N/A',
    family: specificData.family || 'N/A',
    group: specificData.group || (species.category ? species.category.toUpperCase() : 'N/A'),
    category: getCategoryName(species.conservationStatus || ''),
    categoryStatus: (species.conservationStatus || 'NT') as 'EN' | 'VU' | 'CR' | 'LC' | 'NT',
    weight: specificData.weight || 'N/A',
    height: specificData.height || 'N/A',
    lifespan: specificData.lifespan || 'N/A',
    habitat: specificData.habitat || 'Informação não disponível',
    habitatRegions: specificData.habitatRegions || [],
    description: specificData.description || 'Descrição não disponível para esta espécie.',
    image: specificData.image || '/api/placeholder/300/400',
    tags: species.tags || [],
  };
};

const getCategoryName = (status: string | undefined): string => {
  if (!status) return 'NÃO AVALIADA';
  
  switch (status) {
    case 'EN': return 'EM PERIGO';
    case 'VU': return 'VULNERÁVEL';
    case 'CR': return 'CRITICAMENTE EM PERIGO';
    case 'LC': return 'MENOS PREOCUPANTE';
    case 'NT': return 'QUASE AMEAÇADA';
    default: return 'NÃO AVALIADA';
  }
};

const getCategoryColor = (status: string): string => {
  switch (status) {
    case 'EN': return 'bg-red-500 text-white';
    case 'VU': return 'bg-orange-500 text-white';
    case 'CR': return 'bg-red-700 text-white';
    case 'LC': return 'bg-green-500 text-white';
    case 'NT': return 'bg-yellow-500 text-white';
    default: return 'bg-gray-500 text-white';
  }
};

// Componente do Header
const Header = () => {
  return (
    <header className="bg-[#7A8B6F] shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#A8C27A] font-[var(--magra-font)]">
                CerraDex
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-[#7A8B6F] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Espécies
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-[#7A8B6F] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sobre
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-[#7A8B6F] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contato
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#7A8B6F]"
            >
              <span className="sr-only">Abrir menu principal</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function AnimalInfo({ id, onBack }: AnimalInfoProps) {
  const [animal, setAnimal] = React.useState<ExtendedAnimalData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadAnimalData = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        // Simula uma chamada de API com delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const species = getSpeciesById(id);
        
        if (!species) {
          setError('Espécie não encontrada');
          return;
        }

        const animalData = convertSpeciesToAnimalData(species);
        setAnimal(animalData);
      } catch (err) {
        setError('Erro ao carregar dados da espécie');
        console.error('Erro ao carregar animal:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadAnimalData();
    }
  }, [id]);

  // Estados de loading e erro
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 font-[var(--magra-font)]">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7A8B6F] mx-auto mb-4"></div>
            <p className="text-[#7A8B6F] text-lg">Carregando informações...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !animal) {
    return (
      <div className="min-h-screen bg-gray-50 font-[var(--magra-font)]">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-gray-700 text-lg mb-4">{error || 'Espécie não encontrada'}</p>
            <button 
              onClick={onBack}
              className="px-6 py-2 bg-[#7A8B6F] text-white rounded hover:bg-[#6a7a5f] transition-colors"
            >
              Voltar para a lista
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-[var(--magra-font)]">
      <Header />
      
      <main className="bg-[#C5D4A8] min-h-[calc(100vh-4rem)] p-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {animal.scientificName}
            </h1>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Image and Details */}
            <div className="space-y-6">
              {/* Back Button and Image */}
              <div className="bg-[#7A8B6F] rounded-lg p-4">
                <button 
                  onClick={onBack}
                  className="flex items-center text-white mb-4 hover:text-gray-200 transition-colors"
                >
                  <span className="mr-2">←</span>
                  Voltar para {animal.commonName}
                </button>

                {/* Animal Image */}
                <div className="relative mb-4">
                  <img 
                    src={animal.image} 
                    alt={animal.commonName}
                    className="w-full h-64 object-cover rounded-lg"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      target.src = '/api/placeholder/300/400';
                    }}
                  />
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-red-500 text-lg">♡</span>
                  </button>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {animal.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`${tag.color} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Measurements */}
                <div className="text-center">
                  <h3 className="text-white font-semibold mb-3">MEDIDAS</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-[#A8C27A] bg-opacity-20 rounded-lg p-3 mb-2">
                        <div className="w-6 h-6 text-white mx-auto mb-1 text-xl">⚖️</div>
                        <div className="text-black font-semibold text-sm">{animal.weight}</div>
                      </div>
                      <div className="text-white text-xs">Peso</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-[#A8C27A] bg-opacity-20 rounded-lg p-3 mb-2">
                        <div className="w-6 h-6 text-white mx-auto mb-1 text-xl">📏</div>
                        <div className="text-black font-semibold text-sm">{animal.height}</div>
                      </div>
                      <div className="text-white text-xs">Altura</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-[#A8C27A] bg-opacity-20 rounded-lg p-3 mb-2">
                        <div className="w-6 h-6 text-white mx-auto mb-1 text-xl">🕐</div>
                        <div className="text-black font-semibold text-sm">{animal.lifespan}</div>
                      </div>
                      <div className="text-white text-xs">Expectativa de vida</div>
                    </div>
                  </div>
                </div>

                {/* Habitat Text */}
                <div className="mt-6 p-4 bg-[#A8C27A] bg-opacity-20 rounded-lg">
                  <p className="text-black text-sm">{animal.habitat}</p>
                </div>

                {/* Habitat Map */}
                <div className="mt-4">
                  <h3 className="text-white font-semibold mb-2">HABITAT</h3>
                  <div className="bg-white bg-opacity-20 rounded-lg p-2">
                    <div className="h-32 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 rounded opacity-80 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {animal.habitatRegions.length > 0 
                          ? animal.habitatRegions.join(', ') 
                          : 'Mapa do Habitat'
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Species Information */}
            <div className="bg-[#A8C27A] rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Detalhes</h2>

              <div className="space-y-6">
                {/* Nome Comum */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">NOME COMUM</h3>
                  <p className="text-gray-700 font-medium">{animal.commonNameSecondary}</p>
                </div>

                {/* Filo */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">FILO</h3>
                  <p className="text-gray-600">{animal.phylum}</p>
                </div>

                {/* Classe */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">CLASSE</h3>
                  <p className="text-gray-600">{animal.class}</p>
                </div>

                {/* Ordem */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">ORDEM</h3>
                  <p className="text-gray-600">{animal.order}</p>
                </div>

                {/* Família */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">FAMÍLIA</h3>
                  <p className="text-gray-600">{animal.family}</p>
                </div>

                {/* Grupo */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">GRUPO</h3>
                  <p className="text-gray-600">{animal.group}</p>
                </div>

                {/* Categoria Vigente */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">CATEGORIA VIGENTE</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">{animal.category}</span>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getCategoryColor(animal.categoryStatus)}`}>
                      {animal.categoryStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-6 bg-[#A8C27A] rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">SOBRE</h2>
            <p className="text-gray-700 leading-relaxed">{animal.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}