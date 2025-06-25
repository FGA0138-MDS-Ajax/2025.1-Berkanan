/**
 * Tipo que representa uma espécie cadastrada.
 */
export type Especie = {
    cient?: string;  // opcional no caso de inserção
    obs: string;
    filo: string;
    classe: string;
    familia: string;
    ordem: string;
    id_pesq: number;
};
