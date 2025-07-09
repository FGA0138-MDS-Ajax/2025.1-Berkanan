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

export const postAnimals = async (data: AnimalData): Promise<Animal> => {
  const reader = new FileReader();
  await reader.readAsDataURL(data.image!);
  const image: ImageProps = {
    id: 'a',
    codigo: 'n sei',
    pasta: 'n sei',
    alt: data.name,
    url: reader.result! as string
  }
  const result: Animal = {
    id: 0,
    slug: data.name,
    peso: data.weight,
    name: data.name,
    image: image,
    altura: data.height,
    id_pesq: 0,
    habitat: data.habitat,
    lifespan: data.lifeExpectancy,
    populacao: data.order,
    risco: data.risk,
    grupo: data.group   
  }
  return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}
