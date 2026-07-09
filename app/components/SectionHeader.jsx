import Image from "next/image";
import Button from "./Button";

const SectionHeader = ({
  title,
  subTitle,
  button,
  rootClasses,
  batch,
  titleColor = "text-white",
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-6 mx-auto text-center px-4 sm:px-0 ${rootClasses}`}>
      {button && <Button>{button}</Button>}
      <h1
        style={{ lineHeight: "130%", letterSpacing: "-1.44px" }}
        className={`font-semibold text-3xl sm:text-4xl md:text-5xl ${titleColor} max-w-xl sm:max-w-2xl`}>
        {title}
      </h1>
      {batch && <Image src={batch} alt="Engagement batch"></Image>}
      <p
        style={{ lineHeight: "150%", letterSpacing: "-0.03em" }}
        className="text-[#878C91] text-sm sm:text-base font-semibold max-w-md sm:max-w-[410px]">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;
