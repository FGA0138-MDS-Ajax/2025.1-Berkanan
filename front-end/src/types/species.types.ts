export interface SpeciesTag {
  label: string
  color: string
}

export interface ImageProps {
  id: string;
  slug?: string;  // opcional no caso de inserção
  codigo: string;
  pasta: string;
  alt: string;
  url: string;
};

export type Especie = {
    id: string;
    name: string;
    slug: string;  
    filo: string;
    ordem: string;
    classe: string;
    id_pesq: number;
    familia: string;
    descricao: string;
};

export type Animal = {
    id: number; 
    slug: string;
    peso: string;
    name: string;
    image: ImageProps;
    altura: string;
    id_pesq: number;
    habitat: string;
    lifespan: string;
    populacao: string;
    risco: 'EN' | 'VU' | 'CR' | 'LC' | 'NT';
    grupo: "Mamífero" | "Invertebrado" | "Réptil" | "Peixe";
};

export interface AnimalData {
  name: string;
  order: string;
  height: string;
  phylum: string;
  family: string;
  lifeExpectancy: string;
  class: string;
  weight: string;
  habitat: string;
  image?: File | null;
  risk: 'EN' | 'VU' | 'CR' | 'LC' | 'NT',
  group: "Mamífero" | "Invertebrado" | "Réptil" | "Peixe",
}