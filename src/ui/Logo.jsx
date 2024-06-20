function Logo({ theme = 'light' }) {
  return (
    <div
      className={`font-semibold ${theme === 'light' ? `text-indigo-50 font-mono` : theme === 'dark' ? 'text-gray-800 font-mono' : ''}`}
    >
      Cryptrade
    </div>
  );
}

export default Logo;
