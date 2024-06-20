function TradeListRow({ coin, onClick }) {
  return (
    <div
      onClick={() => onClick(coin)}
      className="flex gap-16 border-t border-gray-300 px-2 py-1 hover:bg-indigo-50"
    >
      <div className="flex flex-col min-w-20">
        <span className="text-lg font-medium">
          {coin.trading_pairs.split('_')[0]}
        </span>
        <span className="text-xs">
          {coin.trading_pairs.split('_').join('/')}
        </span>
      </div>
      <div className="flex text-left items-center min-w-28">
        {coin.last_price > 1
          ? coin.last_price.toLocaleString('en-CA', {
              style: 'currency',
              currency: 'CAD',
            })
          : `$${coin.last_price}`}
      </div>
      <div
        className={`${coin.price_change_percent_24h < 0 ? `text-red-600` : `text-blue-600`} flex items-center justify-end flex-grow`}
      >
        {coin.price_change_percent_24h.toFixed(2)}%
      </div>
    </div>
  );
}

export default TradeListRow;
