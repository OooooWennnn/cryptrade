import { useQuery } from '@tanstack/react-query';

export function useQueryCryptoHistory() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['crypto_Ndax'],
    queryFn: fetchCrypto_Ndax,
    refetchInterval: 20000,
  });

  return { isLoading, data, error };
}

async function fetchCrypto_Ndax() {
  try {
    const response = await fetch('http://localhost:3000/api/trade');
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const result = await response.json();

    console.log(result);
    return result;
  } catch (error) {
    console.log('Failed to fetch crypto', error);
  }
}
