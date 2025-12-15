"use client";

import { useState, useCallback } from "react";

interface UseApiReturn {
  execute: <T>(
    apiCall: (...args: unknown[]) => Promise<T>,
    ...args: unknown[]
  ) => Promise<T>;
  isLoading: boolean;
  error: string | null;
}

/**
 * Custom hook for making API calls with loading and error states
 */
export function useApi(): UseApiReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Execute an API call with loading and error handling
   */
  const execute = useCallback(
    async <T>(
      apiCall: (...args: unknown[]) => Promise<T>,
      ...args: unknown[]
    ): Promise<T> => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await apiCall(...args);
        return result;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { execute, isLoading, error };
}
