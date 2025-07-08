/**
 * Tipo que representa uma espécie cadastrada.
 */
export type Especie = {
    slug: string;
    id: string;
    name: string;
    filo: string;
    classe: string;
    familia: string;
    ordem: string;
    id_pesq: number;
    descricao: string;
};
