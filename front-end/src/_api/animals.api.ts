import { ApiResponse, QueryParams } from "@/types/api.types";
import type { Animal, AnimalData, ImageProps } from "@/types/species.types"
import { baseConfig, handleHttpResponse } from "@/utils/api.utils";


const url_base = process.env.NEXT_PUBLIC_URL! + '/animais';

/**
 * Busca todos os animais.
 * @returns {Promise<ApiResponse<Animal[]>>} Lista de animais
 */
export const getAnimals = async (query: QueryParams ): Promise<ApiResponse<Animal[]>> => {
    const url = `${url_base}?limit=${query.limit}?page=${query.page}`;
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
/**
 * Busca um animal pelo slug.
 * @returns {Promise<Animal>} 
 */
export const getAnimalBySlug = async (slug:string): Promise<Animal> => {
    const url = `${url_base}/slug?slug=${slug}`;
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
    images: image,
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
