import type { ParsedImages } from "./imagens.type";

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

export interface ParsedAnimal {
  images: ParsedImages
}