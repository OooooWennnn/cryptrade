import { useEffect, useState } from 'react';
import { useQueryCrypto_Ndax } from '../features/useQueryCrypto_Ndax';
import { useQueryCrypto_Bithum } from '../features/useQueryCrypto_Bithum';
import { getExchangeRates } from '../features/useCadToKrw';
import Heading from '../ui/Heading';
import CoinRow from '../features/premium/CoinRow';
import SearchBar from '../features/premium/SearchBar';
import { getCryptoPremiumArr } from '../features/utils';
import Loading from '../ui/Loading';

function Premium() {
  const [cryptoPremium, setCryptoPremium] = useState([]);
  const [currencyInfo, setCurrencyInfo] = useState({});
  const [searchString, setSearchString] = useState('');

  const {
    isLoading: loadingNdax,
    data: crypto_Ndax,
    error: error_Ndax,
  } = useQueryCrypto_Ndax();
  const {
    isLoading: loadingBithum,
    data: crypto_Bithum,
    error: error_Bithum,
  } = useQueryCrypto_Bithum();

  useEffect(() => {
    async function fetchRates() {
      if (
        currencyInfo.time_next_update_unix < Date.now() &&
        Object.keys(currencyInfo).length !== 0
      )
        return;
      try {
        const data = await getExchangeRates(currencyInfo);
        if (data !== currencyInfo) {
          setCurrencyInfo(data);
        }
      } catch (error) {
        console.log('Failed to fetch or update exchange rates:', error);
      }
    }
    fetchRates();
  }, [currencyInfo]);

  useEffect(() => {
    const arr = getCryptoPremiumArr(crypto_Ndax, crypto_Bithum, currencyInfo);
    setCryptoPremium(arr);

    // console.log(arr);
  }, [crypto_Ndax, crypto_Bithum, currencyInfo]);

  const filteredCrypto = cryptoPremium.filter((coin) =>
    coin.ticker.toLowerCase().includes(searchString.toLowerCase().trim()),
  );

  console.log(filteredCrypto);

  if (loadingNdax || loadingBithum) return <Loading />;

  if (error_Ndax || error_Bithum)
    return <div>{error_Ndax.message || error_Bithum.message}</div>;

  return (
    <>
      <div className="flex-grow mx-10 my-8 max-w-7xl md:px-20 lg:px-40">
        <div className="flex flex-row justify-between items-end">
          <Heading>Real Time Price Premium</Heading>
          <SearchBar value={searchString} onChange={setSearchString} />
        </div>
        <div className="flex flex-col">
          {filteredCrypto.map((coin, index) => {
            return (
              <CoinRow
                key={index}
                coin={coin.ticker}
                ndaxPrice={coin.ndaxPrice}
                bithumPrice={coin.bithumPrice}
                pricePremium={coin.pricePremium}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Premium;
