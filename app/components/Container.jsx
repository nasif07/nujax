export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1500px] mx-auto px-5 py-12 ${className}`}>
      {children}
    </div>
  );
}