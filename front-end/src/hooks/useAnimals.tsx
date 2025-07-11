'use client';

import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getAnimals, getAnimalBySlug } from "@/_api/animals.api";
import { Animal } from '@/types/species.types';
import { PaginationProps, QueryParams } from '@/types/api.types';

interface AnimalsStore {
    animals: Animal[];
    loading: boolean;
    error: string | null;
    pagination: PaginationProps;
    fetchAnimals: (page?: number,limit?: number, append?: boolean) => void;
    getAnimals: () => Animal[];
    getAnimalsBySlug: (slug: string) => Promise<Animal>;
    getAnimalsById: (id: number) => Animal | undefined;
    clearError: () => void;
}

export const useAnimalsStore = create<AnimalsStore>()(
  persist(
    (set, get) => ({
      animals: [],
      loading: false,
      error: null,
      pagination: {
        totalPages: 1,
        currentPage: 1,
        pageSize: 10
      },

      fetchAnimals: async (page = 1, limit = 10, append = false) => {
        const query: QueryParams = {
          page,
          limit
        }
        set({ loading: true, error: null });
        try {
          const response = await getAnimals(query);
          const { data, totalPages, currentPage, pageSize } = response;

          set(state => ({
            animals: append ? [...state.animals, ...data] : data,
            pagination: { totalPages, currentPage, pageSize },
            loading: false,
            error: null
          }));
        } catch (err) {
          set({
            animals: [],
            loading: false,
            error: err instanceof Error ? err.message : 'Failed to fetch animals'
          });
        }
      },

      getAnimals: () => {
        return get().animals;
      },

      getAnimalsById: (id: number) => {
        return get().animals.find(animal => animal.id === id);
      },

      getAnimalsBySlug: async (slug: string) => {
        const response = await getAnimalBySlug(slug);
        console.log(response)
        return response
      },

      clearError: () => {
        set({ error: null });
      }
    }),
    {
      name: 'species-storage',
      partialize: (state) => ({
        animals: state.animals,
        pagination: state.pagination
      })
    }
  )
);

// Hook para usar em componentes
export const useAnimals = () => {
  const store = useAnimalsStore();

  React.useEffect(() => {
    if (store.animals.length === 0) {
      store.fetchAnimals(1);
    }
  }, []);

  return store;
};
