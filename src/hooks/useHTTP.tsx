/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';
import { TASK } from '../types';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sendRequest = useCallback(
    async (
      requestConfig: {
        URL: string;
        method?: string;
        headers?: any;
        body?: string | null | { text: string };
      },
      applyData: (tasks: TASK[]) => void
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.URL, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();
        applyData(data);
      } catch (err: Error | any) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    []
  );
  return { isLoading, error, sendRequest };
};
export default useHttp;
