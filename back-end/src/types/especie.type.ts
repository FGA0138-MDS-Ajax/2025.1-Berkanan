/**
 * Tipo que representa uma espécie cadastrada.
 */
export type Especie = {
    id?: number;  // opcional no caso de inserção
    genero: string;
    epiteto_especifico: string;
    observacoes?: string;
    tendenciaPopulacional: string;
};
