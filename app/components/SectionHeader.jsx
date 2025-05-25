import Button from "./Button";

const SectionHeader = ({ title, subTitle, button, rootClasses, titleColor = "text-white" }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-8 mx-auto text-center ${rootClasses}`}>
      {button && <Button>{button}</Button>}
      <h1
        style={{ lineHeight: "130%", letterSpacing: "-1.44px" }}
        className={`font-semibold text-4xl md:text-5xl ${titleColor}`}>
        {title}
      </h1>
      <p
        style={{ lineHeight: "130%", letterSpacing: "-0.03em" }}
        className="text-[#878C91] text-base font-semibold max-w-[410px]">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;