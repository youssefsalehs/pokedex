function Button({ onclick, children }) {
  return (
    <button onClick={onclick} className="btn">
      {children}
    </button>
  );
}

export default Button;
