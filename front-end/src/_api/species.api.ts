import { ApiResponse } from "@/types/api.types";
import type { Especie } from "@/types/species.types"

const speciesData: Especie[] = [{
    id: "bugio-maos-ruivas",
    name: "Bugio-de-mãos-ruivas-do-Maranhão",
    filo: "CHORDATA",
    classe: "MAMMALIA",
    ordem: "PRIMATES",
    familia: "ATELIDAE",
    slug: "bugio-maos-ruivas",
    id_pesq: 1,
    descricao: "O Bugio-de-mãos-ruivas-do-Maranhão é um primata endêmico do Maranhão, conhecido por suas mãos avermelhadas e vocalizações distintas.",
  },
]

export const getSpecies = async (page: number): Promise<ApiResponse<Especie[]>> => {
    // Simula uma chamada de API
    const api_data: ApiResponse<Especie[]> = {
        status: "success",
        data: speciesData,
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
