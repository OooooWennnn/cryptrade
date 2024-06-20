function SearchBar({ value, onChange }) {
  return (
    <input
      className="border border-gray-400 rounded-sm px-2 py-0.5 focus:outline-gray-600"
      placeholder="Enter Coin"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
