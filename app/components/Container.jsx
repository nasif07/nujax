export default function Container({ children, background, className = "" }) {
  return (
    <div className={background ? background : ""}>
      <div className={`w-full max-w-[1500px] mx-auto px-4 sm:px-5 py-8 sm:py-10 ${className}`}>
        {children}
      </div>
    </div>
  );
}
