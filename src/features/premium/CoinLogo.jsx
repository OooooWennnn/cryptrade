function CoinLogo({ coin }) {
  return (
    <div className="flex flex-col items-center justify-between">
      <img
        src={`./node_modules/cryptocurrency-icons/svg/color/${coin}.svg`}
        alt={coin}
        className="w-10"
      />
      <h1 className="font-medium">{coin}</h1>
    </div>
  );
}

export default CoinLogo;
