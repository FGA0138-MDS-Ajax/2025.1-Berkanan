type Especie = {
    id: number;
    tendenciaPopulacional: string;
    genero: string;
    epiteto_especifico: string;
    observacoes: string;
};

let especies: Especie[] = [
    { id: 1, tendenciaPopulacional: 'Crescimento', genero: 'Chrysocyon', epiteto_especifico: 'brachyurus', observacoes: 'Lobo-guará' },
    { id: 2, tendenciaPopulacional: 'Queda', genero: 'Panthera', epiteto_especifico: 'onca', observacoes: 'Onça-pintada' }
];

export const getAllEspecies = () => especies;