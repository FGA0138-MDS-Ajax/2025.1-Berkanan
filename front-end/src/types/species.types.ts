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
  category?: "mamifero" | "reptil" | "ave" | "peixe" | "invertebrado"
}