function CoinLogo({ coin }) {
  console.log(coin.toLowerCase());
  const ticker = coin.toLowerCase();
  return (
    <div className="flex flex-col items-center justify-between">
      <img src={`/icons/svg/color/${ticker}.svg`} alt={coin} className="w-10" />
      <h1 className="font-medium">{coin}</h1>
    </div>
  );
}

export default CoinLogo;
