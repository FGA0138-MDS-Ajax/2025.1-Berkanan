import { ApiResponse } from "@/types/api.types";
import type { Animal } from "@/types/species.types"

const image = [{
        id: 1,
        url: "https://media.discordapp.net/attachments/1359563507640696834/1388160083204112454/cGc.png?ex=685ff852&is=685ea6d2&hm=cb017a7c6f6c136a819093e1cc24d16da8204464cf21c4688d11e04e2e250139&=&format=webp&quality=lossless",
        alt: "Bugio-de-mãos-ruivas-do-Maranhão",
        name: "Bugio-de-mãos-ruivas-do-Maranhão",
    },{
        id: 2,
        url: "https://media.discordapp.net/attachments/1359563507640696834/1388160083204112454/cGc.png?ex=685ff852&is=685ea6d2&hm=cb017a7c6f6c136a819093e1cc24d16da8204464cf21c4688d11e04e2e250139&=&format=webp&quality=lossless",
        alt: "Bugio-de-mãos-ruivas-do-Maranhão",
        name: "Bugio-de-mãos-ruivas-do-Maranhão",
    }]
    
const animalsData: Animal[] = [{
    id: 0,
    name: "ABugio-de-mãos-ruivas-do-Maranhão",
    slug: "bugio-maos-ruivas",
    peso: "6 - 10 kg",
    image: image,
    altura: "50 - 70 cm",
    id_pesq: 1,
    habitat: "Florestas tropicais e subtropicais do Maranhão.",
    populacao: "Menos de 250 indivíduos",
    lifespan: "20 - 30 anos",
    risco: "CR",
    grupo: "Mamífero",
    },{
    id: 1,
    name: "Bugio-de-mãos-ruivas-do-Maranhão",
    slug: "bugio-maos-ruivas",
    peso: "6 - 10 kg",
    image: image,
    altura: "50 - 70 cm",
    id_pesq: 1,
    habitat: "Florestas tropicais e subtropicais do Maranhão.",
    populacao: "Menos de 250 indivíduos",
    lifespan: "20 - 30 anos",
    risco: "EN",
    grupo: "Invertebrado",
    },{
    id: 2,
    name: "CBugio-de-mãos-ruivas-do-Maranhão",
    slug: "bugio-maos-ruivas",
    peso: "6 - 10 kg",
    image: image,
    altura: "50 - 70 cm",
    id_pesq: 1,
    habitat: "Florestas tropicais e subtropicais do Maranhão.",
    populacao: "Menos de 250 indivíduos",
    lifespan: "20 - 30 anos",
    risco: "CR",
    grupo: 'Peixe',
    },{
    id: 3,
    name: "DBugio-de-mãos-ruivas-do-Maranhão",
    slug: "bugio-maos-ruivas",
    peso: "6 - 10 kg",
    image: image,
    altura: "50 - 70 cm",
    id_pesq: 1,
    habitat: "Florestas tropicais e subtropicais do Maranhão.",
    populacao: "Menos de 250 indivíduos",
    lifespan: "20 - 30 anos",
    risco: "EN",
    grupo: "Réptil",
    },
]

export const getAnimals = async (page: number): Promise<ApiResponse<Animal[]>> => {
    // Simula uma chamada de API
    const api_data: ApiResponse<Animal[]> = {
        status: "success",
        data: animalsData,
        totalPages: 10,
        currentPage: 1,
        pageSize: 3,
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(api_data);
        }, 1000);
    });
};
