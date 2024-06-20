import { useCallback, useState } from 'react';
import TradeList from '../features/trade/TradeList';
import Heading from '../ui/Heading';
import CryptoChart from '../features/trade/Chart';
import BuySell from '../features/trade/BuySell';

function Trade() {
  // const { isLoading, data, error } = useQueryCrypto_Ndax();

  const [selectedCoin, setSelectedCoin] = useState('BTCCAD');

  const handleSelectCoin = useCallback((coin) => {
    setSelectedCoin(coin?.trading_pairs?.split('_').join(''));
  }, []);

  // useEffect(
  //   function () {
  //     setSelectedCoin(data?.[0].trading_pairs?.split('_').join(''));
  //   },
  //   [data],
  // );

  console.log(selectedCoin);

  // if (isLoading) return <Loading />;

  // if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="flex-grow mx-10 my-8 max-w-7xl">
        <div>
          <Heading>Trade</Heading>
        </div>
        <div className="flex gap-5">
          <TradeList
            setSelectedCoin={setSelectedCoin}
            onClick={handleSelectCoin}
          />
          <div className="flex flex-col flex-grow overflow-hidden gap-5">
            <CryptoChart selectedCoin={selectedCoin && selectedCoin} />
            <BuySell />
            {/* <div>{selectedCoin}</div> */}
            {/* <div>{selectedCoin?.last_price}</div>
            <div>{selectedCoin?.quote_volume}</div>
            <div>{selectedCoin?.price_change_percent_24h?.toFixed(2)}%</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Trade;
