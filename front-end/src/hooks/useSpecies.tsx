'use client';

import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { speciesData } from "@/_api/species.api";
import { Species } from '@/types/species.types';

// Define the store interface
interface SpeciesStore {
    species: Species[];
    loading: boolean;
    error: string | null;
    fetchSpecies: () => void;
    getSpecies: () => Species[];
    getSpeciesById: (id: string) => Species | undefined;
    clearError: () => void;
}

// Create the Zustand store with optional persistence
export const useSpeciesStore = create<SpeciesStore>()(
    persist(
        (set, get) => ({
            species: [],
            loading: false,
            error: null,

            // Method to fetch species
            fetchSpecies: () => {
                set({ loading: true, error: null });
                try {
                    // Simulating an async operation
                    const data = speciesData;
                    set({
                        species: data,
                        loading: false,
                        error: null
                    });
                } catch (err) {
                    set({
                        species: [],
                        loading: false,
                        error: err instanceof Error ? err.message : 'Failed to fetch species'
                    });
                }
            },

            // Get all species
            getSpecies: () => {
                const { species } = get();
                return species;
            },

            // Get species by ID
            getSpeciesById: (id: string) => {
                const { species } = get();
                return species.find(spec => spec.id === id);
            },

            // Clear error state
            clearError: () => {
                set({ error: null });
            }
        }),
        {
            name: 'species-storage', // unique name
            partialize: (state) => ({
                species: state.species // only persist species data
            })
        }
    )
);

// Hook for components to use the store with initial fetch
export const useSpecies = () => {
    const store = useSpeciesStore();

    React.useEffect(() => {
        // Only fetch if no species are loaded
        if (store.species.length === 0) {
            store.fetchSpecies();
        }
    }, []);

    return store;
};