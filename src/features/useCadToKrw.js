const CURRENCY = 'CAD';

async function fetchCadToKrw() {
  try {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${CURRENCY}`,
    );
    if (!response.ok)
      throw new Error(`An error occurred: ${response.statusText}`);

    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error('Failed to fetch crypto', error);
  }
}

export async function getExchangeRates(exchangeInfo = {}) {
  let updatedExahngeInfo = { ...exchangeInfo };

  if (
    Object.keys(exchangeInfo).length === 0 ||
    Date.now() >= exchangeInfo.time_next_update_unix
  ) {
    updatedExahngeInfo = await fetchCadToKrw();
  }
  return updatedExahngeInfo;
}
