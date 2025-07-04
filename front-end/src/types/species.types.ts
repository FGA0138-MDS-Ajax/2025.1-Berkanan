export interface SpeciesTag {
  label: string
  color: string
}

export interface ImageProps {
    id: number
    url: string
    alt: string
    name: string
}

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
    image: ImageProps[];
    altura: string;
    id_pesq: number;
    habitat: string;
    lifespan: string;
    populacao: string;
    risco: 'EN' | 'VU' | 'CR' | 'LC' | 'NT';
    grupo: "mamifero" | "reptil" | "ave" | "peixe" | "invertebrado";
};