function BuySell() {
  return (
    <div className="flex flex-grow rounded-sm shadow-2xl px-44 py-12">
      <div
        className="flex flex-grow justify-center items-center bg-green-400 text-slate-50"
        onClick={() => console.log('buy')}
      >
        BUY
      </div>
      <div
        className="flex flex-grow justify-center items-center bg-red-400 text-slate-50"
        onClick={() => console.log('sell')}
      >
        SELL
      </div>
    </div>
  );
}

export default BuySell;
