import SubHeading from '../../ui/SubHeading';

function QuickBuySell() {
  return (
    <div className="">
      <SubHeading heading="QUICK BUY/SELL" />
      <div className="border">
        <div>dropdown for coin</div>
        <div className="flex">
          <div>
            <label>amount</label>
            <input type="text" />
          </div>
          <button>+</button>
        </div>
        <div className="flex">
          <div>
            <label>amount</label>
            <input type="text" />
          </div>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default QuickBuySell;
