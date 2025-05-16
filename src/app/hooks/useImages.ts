import { useEffect, useState } from "react";

export interface Photo {
    id: number;
    alt: string;
    src: {
        large: string;
    };
}

interface PexelsResponse {
    photos: Photo[];
}

const API_KEY = "VQpcg42i20WRvxqGLTHTf4uFHYZ2D1FqgttW0nE6g2kl4LBBGXrGNXeg";

export function usePexels(query: string, perPage: number = 6) {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`,
                    {
                        headers: {
                            'Authorization': API_KEY,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                if (!res.ok) throw new Error("Erro ao buscar imagens.");
                const data: PexelsResponse = await res.json();
                setPhotos(data.photos);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error("Ocorreu um erro desconhecido."));
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [query, perPage]);

    return { photos, loading, error };
}
