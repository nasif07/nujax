const Button = ({ children }) => {
  return (
    <button
      style={{
        background:
          "radial-gradient(400.52% 215.22% at -30.93% 148.46%, #373A42 6.7%, #000205 100%)",
      }}
      className="py-4 px-8 text-[#EC4845] text-base font-bold border-[#2B2E35] rounded-[30px] cursor-pointer">
      {children}
    </button>
  );
};

export default Button;