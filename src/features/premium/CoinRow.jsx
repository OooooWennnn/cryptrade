import CoinLogo from './CoinLogo';
import CoinPriceLine from './CoinPriceLine';

function Row({ coin, ndaxPrice, bithumPrice, pricePremium }) {
  return (
    <div className="flex flex-col my-3 border px-6 py-4 rounded-lg">
      <div className="flex flex-row justify-between">
        <CoinLogo coin={coin} />
        <div className="flex flex-col w-60">
          <CoinPriceLine tag="Ndax" amount={`${ndaxPrice} CAD`} />
          <CoinPriceLine tag="Bithum" amount={`${bithumPrice} KRW`} />
          <CoinPriceLine
            tag="Premium"
            amount={`${pricePremium?.toFixed(2)}%`}
          />
        </div>
      </div>
    </div>
  );
}

export default Row;
