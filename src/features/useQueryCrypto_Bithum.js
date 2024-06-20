import { useQuery } from '@tanstack/react-query';

export function useQueryCrypto_Bithum() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['crypto_Bithum'],
    queryFn: fetchCrypto_Bithum,
    refetchInterval: 30000,
  });

  return { isLoading, data, error };
}

async function fetchCrypto_Bithum() {
  try {
    const response = await fetch('http://localhost:3000/api/premium/Bithum');
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const result = await response.json();

    // let data = Object.entries(result.data).map(([key, value]) => {
    //   return { symbol: key, ...value };
    // });

    // let data = Object.entries(result.data);
    // data.splice(0, 2);

    return result.data;
  } catch (error) {
    console.log('Failed to fetch crypto', error);
  }
}
