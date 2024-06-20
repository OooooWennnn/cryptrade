import { useState } from 'react';
import TradeListNavButton from './TradeListNavButton';

function TradeListNav() {
  const [selectedNav, setSelectedNav] = useState('');

  const handleClick = (value) => {
    setSelectedNav(value);
  };

  return (
    <ul className="flex">
      <TradeListNavButton onClick={handleClick} selectedNav={selectedNav}>
        Trending
      </TradeListNavButton>
      <TradeListNavButton onClick={handleClick} selectedNav={selectedNav}>
        Owned
      </TradeListNavButton>
      <TradeListNavButton onClick={handleClick} selectedNav={selectedNav}>
        Watchlist
      </TradeListNavButton>
      {/* <button
        onClick={() => handleClick('owned')}
        className={`py-4 w-full hover:bg-indigo-50 ${selectedNav === 'owned' && 'bg-indigo-50'}`}
      >
        owned
      </button>
      <button
        onClick={() => handleClick('watchlist')}
        className={`py-4 w-full hover:bg-indigo-50 ${selectedNav === 'watchlist' && 'bg-indigo-50'}`}
      >
        watchlist
      </button> */}
    </ul>
  );
}

export default TradeListNav;
