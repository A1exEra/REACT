/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const sendRequest = useCallback(
    async (
      requestConfig: {
        url: string;
        method?: string;
        headers?: any;
        body?: any;
      },
      applyData: (data: any) => void
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });
        if (!response.ok) {
          throw new Error('Request failed!');
        }
        const data = await response.json();
        applyData(data);
      } catch (error: Error | any) {
        setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    []
  );
  return { isLoading, error, sendRequest };
};
export default useHttp;
