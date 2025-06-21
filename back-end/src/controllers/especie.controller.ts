import { getAllEspecies, saveEspecie, type Especie } from '../models/especie.model';

export const getEspecies = async () => {
    return await getAllEspecies();
};

export const salvarEspecies = async (especie: Especie) => {
    return await saveEspecie(especie);
};