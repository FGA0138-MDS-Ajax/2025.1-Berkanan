'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useSpecies } from '@/hooks/useSpecies';
import Header from '@/components/layout/Navigation';
import Loading from '@/components/utils/Loading';
import SpeciesError from '@/components/species/Error';
import { colorMap, getCategoryName } from '@/utils/utils';
import { useAnimals } from '@/hooks/useAnimals';

export default function AnimalInfo() {
  const router = useRouter();
  const params = useParams();

  const { getSpeciesBySlug, loading: speciesLoading, error: speciesError } = useSpecies();
  const { getAnimalsBySlug, loading: animalLoading, error: animalError } = useAnimals();

  const specie = getSpeciesBySlug(params.SLUG as string);
  const animal = getAnimalsBySlug(params.SLUG as string);

  if (speciesLoading || animalLoading) return <Loading />;
  if (speciesError || animalError || !animal || !specie) return <SpeciesError error={speciesError || animalError!} router={router} />;

  return (
    <div className="min-h-screen font-[var(--magra-font)]">
      <Header />
      <main className="bg-offwhite min-h-[calc(100vh-4rem)] p-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {animal.name}
            </h1>
          </div>

          <div className="grid grid-cols-1 bg-medium-green lg:grid-cols-2 gap-2 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="bg-medium-green rounded-lg p-4">
                <button
                  onClick={router.back}
                  className="flex items-center text-white mb-4 hover:text-gray-200 transition-colors"
                >
                  <span className="mr-2">←</span>
                  Voltar para {animal.name}
                </button>
                <div className="relative mb-4">
                  <Image
                    src={animal.image[0].url}
                    alt={animal.image[0].alt}
                    width={600}
                    height={400}
                    className="w-full h-auto shadow-lg object-cover"
                  />
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-red-500 text-lg">♡</span>
                  </button>
                </div>
                <div className="bg-light-green bg-opacity-20 rounded-lg p-4">
                  <div className="flex gap-2 mb-4 flex-wrap justify-center mt-10">
                    <span className={`${colorMap[animal.grupo]} px-3 py-1 rounded-full text-sm font-medium`}>
                      {animal.grupo}
                    </span>
                    <span className={`${colorMap[animal.risco]} px-3 py-1 rounded-full text-sm font-medium`}>
                      {animal.risco}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-3">MEDIDAS</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="rounded-lg p-3 mb-2">
                          <div className="text-foreground font-semibold text-sm"> {animal.peso}</div>
                        </div>
                        <div className="text-white text-xs">Peso</div>
                      </div>
                      <div className="text-center">
                        <div className="rounded-lg p-3 mb-2">
                          <div className="text-foreground font-semibold text-sm">{animal.altura}</div>
                        </div>
                        <div className="text-white text-xs">Altura</div>
                      </div>
                      <div className="text-center">
                        <div className="rounded-lg p-3 mb-2">
                          <div className="text-foreground font-semibold text-sm">{animal.lifespan}</div>
                        </div>
                        <div className="text-white text-xs">Expectativa de vida</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-lg">
                    <p className="text-foreground text-sm">{animal.habitat}</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-white font-semibold mb-2">HABITAT</h3>
                    <div className="bg-white bg-opacity-20 rounded-lg p-2">
                      <div className="h-32 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 rounded opacity-80 flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {animal.habitat || 'Habitat desconhecido'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light-green p-6 ">
              <h2 className="text-2xl font-bold text-dark-green mb-6 font-bebas-neue">Detalhes</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-dark-green mb-2">NOME COMUM</h3>
                  <p className="text-medium-green font-medium">{animal.name}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-green mb-2">FILO</h3>
                  <p className="text-medium-green font-medium">{specie.filo}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-green mb-2">CLASSE</h3>
                  <p className="text-medium-green font-medium">{specie.classe}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-green mb-2">ORDEM</h3>
                  <p className="text-medium-green font-medium">{specie.ordem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-green mb-2">FAMÍLIA</h3>
                  <p className="text-medium-green font-medium">{specie.familia}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-green mb-2">GRUPO</h3>
                  <p className="text-medium-green font-medium">{animal.grupo}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-green mb-2">CATEGORIA VIGENTE</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-medium-green">{getCategoryName(animal.risco)}</span>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${colorMap[animal.risco]}`}>
                      {animal.risco}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-light-green rounded-lg p-6">
            <h2 className="text-2xl font-bold text-dark-green mb-4">SOBRE</h2>
            <p className="text-medium-green leading-relaxed">{specie.descricao}</p>
          </div>
        </div>
      </main>
    </div>
  );
}