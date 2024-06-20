function TradeListNavButton({ onClick, children, selectedNav }) {
  return (
    <button
      onClick={() => onClick(children)}
      className={`py-4 w-full hover:bg-gray-100 ${selectedNav === children && 'bg-gray-100'}`}
    >
      {children}
    </button>
  );
}

export default TradeListNavButton;
