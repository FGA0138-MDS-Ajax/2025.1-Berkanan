export interface SpeciesTag {
  label: string
  color: string
}

export interface Species {
  id?: string
  name: string
  conservationStatus?: string
  imageUrl?: string
  tags: SpeciesTag[]
  scientificName: string;
  commonName: string;
  commonNameSecondary: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  group: string;
  category: "mamifero" | "reptil" | "ave" | "peixe" | "invertebrado"
  categoryStatus: 'EN' | 'VU' | 'CR' | 'LC' | 'NT';
  weight: string;
  height: string;
  lifespan: string;
  habitat: string;
  habitatRegions: string[];
  description: string;
  image: string;
}