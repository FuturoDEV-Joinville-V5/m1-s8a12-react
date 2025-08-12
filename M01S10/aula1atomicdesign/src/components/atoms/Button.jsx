export default function Button({
  text,
  onClick = () => {},
  variant = "primary",
  size = "md",
  className = "",
}) {
  const variantStyles = {
    primary: { backgroundColor: "green" },
    secondary: { backgroundColor: "orange" },
    danger: { backgroundColor: "red" },
  };

  const sizeStyles = {
    sm: { padding: "2px" },
    md: { padding: "4px" },
    lg: { padding: "8px" },
  };

  return (
    <button
      className={`btn ${className}`}
      style={{ ...variantStyles[variant], ...sizeStyles[size] }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
