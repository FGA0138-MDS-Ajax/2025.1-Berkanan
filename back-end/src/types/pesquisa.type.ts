/**
 * Tipo que representa uma pesquisa cadastrada.
 */
export type Pesquisa = {
    id_pesq?: number;  // opcional no caso de inserção
    risco: string;
    peso: string;
    altura: string;
    grupo: string;
};
