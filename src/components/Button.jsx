const variants = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  secondary: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
  danger: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
};

function Button({ 
  children, 
  onClick, 
  variant = "primary", 
  className }) {
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
