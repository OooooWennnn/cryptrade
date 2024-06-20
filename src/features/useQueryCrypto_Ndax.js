import { useQuery } from "@tanstack/react-query";
import config from "../config";

export function useQueryCrypto_Ndax() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["crypto_Ndax"],
    queryFn: fetchCrypto_Ndax,
    refetchInterval: 20000,
  });

  return { isLoading, data, error };
}

async function fetchCrypto_Ndax() {
  try {
    const response = await fetch(`${config.BACKEND_URL}/api/trade`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const result = await response.json();

    console.log(result);
    return result;
  } catch (error) {
    console.log("Failed to fetch crypto", error);
  }
}
