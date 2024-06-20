function Button({ children, size = 'medium' }) {
  if (size === 'small')
    return (
      <button className="border rounded-2xl bg-indigo-600 text-indigo-50 w-32 h-8 hover:bg-indigo-900">
        {children}
      </button>
    );

  if (size === 'medium')
    return (
      <button className="border rounded-2xl bg-indigo-600 text-indigo-50 w-60 h-10 hover:bg-indigo-900">
        {children}
      </button>
    );
}

export default Button;
