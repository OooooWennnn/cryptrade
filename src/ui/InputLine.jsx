function InputLine({ placeholder = '', type = 'text' }) {
  return (
    <input
      className="border-b border-gray-300 px-2 focus:outline-none focus:border-b-indigo-600"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default InputLine;
