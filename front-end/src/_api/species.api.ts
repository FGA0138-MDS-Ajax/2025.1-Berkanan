import { ApiResponse, QueryParams } from "@/types/api.types";
import type { Especie } from "@/types/species.types"
import { baseConfig, handleHttpResponse } from "@/utils/api.utils";

const url_base = process.env.NEXT_PUBLIC_URL!;

/**
 * Busca todos as espécies.
 * @returns {Promise<ApiResponse<Especie[]>>} Lista de espécies
 */
export const getSpecies = async (query: QueryParams ): Promise<ApiResponse<Especie[]>> => {
    const url = `${url_base}/especies?limit=${query.limit}?page=${query.page}`;
    try {
        const response = await fetch(url, {
            ...baseConfig,
            method: 'GET',
        } as RequestInit);

        return await handleHttpResponse(response);
    } catch (error: any) {
        console.error('Erro ao buscar espécies:', error);
        throw error;
    }
}
