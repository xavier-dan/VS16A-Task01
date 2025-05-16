import { useState, useCallback } from "react";

interface UseApiState<T> {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
}

export interface UseApiReturnType<T> extends UseApiState<T> {
    fetchData: () => Promise<void>;
}

const useApi = <T>(url: string, options?: RequestInit): UseApiReturnType<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await fetch(url, options);

            if(!response.ok) {
                throw new Error(`Erro na API: ${response.status} ${response.statusText}`)
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error ("Ocorreu um erro desconhecido."));
            }
            console.error("Falha ao buscar dados da API: ", err);
        } finally {
            setIsLoading(false);
        }
    }, [url, JSON.stringify(options)]);

    return { data, isLoading, error, fetchData };
};

export default useApi;