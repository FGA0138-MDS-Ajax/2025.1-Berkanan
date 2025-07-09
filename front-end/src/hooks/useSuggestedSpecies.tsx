'use client';

import { useEffect, useState } from "react";
import type { Especie } from "@/types/species.types";

export function useSuggestedSpecies() {
    const [data, setData] = useState<Especie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:3003/species/sugestoes')
            .then(res => res.json())
            .then(setData)
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}