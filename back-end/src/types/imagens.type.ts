/**
 * Tipo que representa uma imagem cadastrada.
 */
export type Imagens = {
  slug?: string;  // opcional no caso de inserção
  codigo: string;
  pasta: string;
};
export interface ParsedImages extends Imagens {
  alt: string,
  url: string,
}