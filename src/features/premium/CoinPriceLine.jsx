function CoinPriceLine({ tag, amount }) {
  return (
    <div className="flex justify-between">
      <span className="font-semibold">{tag}:</span> <span>{amount}</span>
    </div>
  );
}

export default CoinPriceLine;
