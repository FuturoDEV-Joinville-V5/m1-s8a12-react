export default function Typografy({
  variant = "body",
  text,
  className = "",
  bold = false,
}) {
  const Tag = ["body", "caption"].includes(variant) ? "p" : variant;

  const variantClasses = {
    h1: "display-4",
    h2: "display-5",
    h3: "display-6",
    body: "",
    caption: "small text-muted",
  };

  return (
    <Tag
      className={`${variantClasses[variant]} ${
        bold ? "fw-bold" : ""
      } ${className}`}
    >
      {text}
    </Tag>
  );
}
