export function getCryptoPremiumArr(
  crypto_Ndax = [],
  crypto_Bithum = {},
  currencyInfo = 0
) {
  if (crypto_Ndax && crypto_Bithum) {
    return crypto_Ndax
      ?.map((coin) => {
        const ticker =
          coin.lowest_ask !== 0 && coin.trading_pairs.split("_")[0];
        const bithumCoin = crypto_Bithum[ticker] && crypto_Bithum[ticker];

        if (bithumCoin && ticker) {
          const ndaxPrice = coin?.lowest_ask;
          const bithumPrice = bithumCoin?.bids[0].price;
          const pricePremium =
            ((bithumCoin?.bids[0].price -
              coin?.lowest_ask * currencyInfo?.rates?.KRW) /
              (coin?.lowest_ask * currencyInfo?.rates?.KRW)) *
            100;
          return {
            ticker,
            ndaxPrice,
            bithumPrice,
            pricePremium,
          };
        }
      })
      .filter((el) => el);
  }
}
