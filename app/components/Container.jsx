export default function Container({ children, background, className = "" }) {
  return (
    <div className={background  ? background : "bg-[#010205]"}>
      <div className={`w-full max-w-[1500px] mx-auto px-5 py-12  ${className}`}>
        {children}
      </div>
    </div>
  );
}
