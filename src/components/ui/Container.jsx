export default function Container({ children, size = "md" }) {
  const sizes = {
    sm: "max-w-5xl",
    md: "max-w-7xl",
  };
  return <div className={`mx-auto px-4 ${sizes[size]}`}>{children}</div>;
}
