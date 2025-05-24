import Button from "./Button";

const SectionHeader = ({ title, subTitle, button, rootClasses }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-8 mx-auto text-center ${rootClasses}`}>
      {button && <Button>{button}</Button>}
      <h1
        style={{ lineHeight: "130%", letterSpacing: "-1.44px" }}
        className="text-white font-semibold text-5xl">
        {title}
      </h1>
      <p
        style={{ lineHeight: "130%", letterSpacing: "-0.03em" }}
        className="text-[#878C91] text-base font-semibold max-w-[350px]">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;