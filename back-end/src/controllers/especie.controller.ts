import { getAllEspecies } from '../models/especie.model';

export const getEspecies = async () => {
    return await getAllEspecies();
};
