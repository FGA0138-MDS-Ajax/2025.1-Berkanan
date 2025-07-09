'use client';

import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getSpecies } from "@/_api/species.api";
import { Especie } from '@/types/species.types';
import { Pagination, QueryParams } from '@/types/api.types';

interface SpeciesStore {
  species: Especie[];
  loading: boolean;
  error: string | null;
  pagination: Pagination;
  fetchSpecies: (page?: number, limit?: number, append?: boolean) => void;
  getSpecies: () => Especie[];
  getSpeciesById: (id: string) => Especie | undefined;
  getSpeciesBySlug: (slug: string) => Especie | undefined;
  clearError: () => void;
}

export const useSpeciesStore = create<SpeciesStore>()(
  persist(
    (set, get) => ({
      species: [],
      loading: false,
      error: null,
      pagination: {
        totalPages: 1,
        currentPage: 1,
        pageSize: 20
      },

      fetchSpecies: async (page = 1, limit = 20, append = false) => {
        const query: QueryParams = {
          page,
          limit
        }
        set({ loading: true, error: null });
        try {
          const response = await getSpecies(query);
          const { data, totalPages, currentPage, pageSize } = response;

          set(state => ({
            species: append ? [...state.species, ...data] : data,
            pagination: { totalPages, currentPage, pageSize },
            loading: false,
            error: null
          }));
        } catch (err) {
          set({
            species: [],
            loading: false,
            error: err instanceof Error ? err.message : 'Failed to fetch species'
          });
        }
      },

      getSpecies: () => get().species,

      getSpeciesById: (id: string) => {
        return get().species.find(spec => spec.id === id);
      },

      getSpeciesBySlug: (slug: string) => {
        return get().species.find(spec => spec.slug === slug);
      },

      clearError: () => set({ error: null })
    }),
    {
      name: 'species-storage',
      partialize: (state) => ({
        species: state.species,
        pagination: state.pagination
      })
    }
  )
);

export const useSpecies = () => {
  const store = useSpeciesStore();

  React.useEffect(() => {
    if (store.species.length === 0) {
      store.fetchSpecies(1);
    }
  }, []);

  return store;
};
