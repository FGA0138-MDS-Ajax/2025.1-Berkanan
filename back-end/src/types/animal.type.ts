/**
 * Tipo que representa um animal cadastrado.
 */
export type Animal = {
    id_animal?: number;  // opcional no caso de inserção
    img_id: string;
    grupo: string;
    pop: string;
    risco: string;
    altura: string;
    peso: string;
    id_pesq: number;
    cient: string;
};