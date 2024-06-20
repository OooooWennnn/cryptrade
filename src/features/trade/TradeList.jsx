import TradeListNav from "./TradeListNav";
import TradeListRow from "./TradeListRow";
import { useQueryCrypto_Ndax } from "../useQueryCrypto_Ndax";
import Loading from "../../ui/Loading";

function TradeList({ onClick }) {
  const { isLoading, data, error } = useQueryCrypto_Ndax();

  // const [selectedCoin, setSelectedCoin] = useState('');

  // const handleSelectCoin = useCallback((coin) => {
  //   setSelectedCoin(coin?.trading_pairs?.split('_').join(''));
  // }, []);

  // useEffect(
  //   function () {
  //     setSelectedCoin(data?.[0].trading_pairs?.split('_').join(''));
  //   },
  //   [data, setSelectedCoin],
  // );

  if (isLoading) return <Loading />;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col border border-gray-200 rounded-sm min-w-96 shadow-md">
      <TradeListNav />
      <div className="h-[36rem] overflow-auto hide-scrollbar">
        {data?.map((coin, index) => {
          return <TradeListRow key={index} coin={coin} onClick={onClick} />;
        })}
      </div>
    </div>
  );
}

export default TradeList;
