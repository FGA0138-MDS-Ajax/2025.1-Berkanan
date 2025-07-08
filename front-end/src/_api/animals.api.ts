import { ApiResponse, QueryParams } from "@/types/api.types";
import type { Animal } from "@/types/species.types"
import { baseConfig, handleHttpResponse } from "@/utils/api.utils";

const url_base = process.env.NEXT_PUBLIC_URL!;

/**
 * Busca todos os animais.
 * @returns {Promise<ApiResponse<Animal[]>>} Lista de animais
 */
export const getAnimals = async (query: QueryParams ): Promise<ApiResponse<Animal[]>> => {
    const url = `${url_base}/animais?limit=${query.limit}?page=${query.page}`;
    try {
        const response = await fetch(url, {
            ...baseConfig,
            method: 'GET',
        } as RequestInit);

        return await handleHttpResponse(response);
    } catch (error: any) {
        console.error('Erro ao buscar animais:', error);
        throw error;
    }
}
