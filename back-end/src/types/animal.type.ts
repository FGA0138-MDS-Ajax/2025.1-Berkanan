/**
 * Tipo que representa um animal cadastrado.
 */
export type Animal = {
  id: number;  
  slug: string;
  id_pesq: string;
  image: string;
  name: string;
  grupo: string;
  risco: string;
  altura: string;
  populacap: number;
  peso: string;
};

export interface ParsedAnimal extends Animal {
  images: [{
    id: string,
    alt: string,
    url: string,
    path: string,
    created_at: string
  }],
}