import { getAllEspecies, inserir, alterar, type Especie } from '../models/especie.model';

export const getEspecies = async () => {
    return await getAllEspecies();
};

export const inserirEspecie = async (especie: Especie) => {
    return await inserir(especie);
};

export const alterarEspecie = async (especie: Especie) => {
    return await alterar(especie);
};