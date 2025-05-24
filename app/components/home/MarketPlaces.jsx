import Image from "next/image";
import Container from "../Container";
import { GiRoundStar } from "react-icons/gi";
import fiverr from "@/app/assets/fiverr.svg";
import upwork from "@/app/assets/upwork.svg";
const MarketPlaces = () => {
  return (
    <Container className="flex flex-col items-center gap-8">
      <div className="flex text-[#FF9243] text-[40px] gap-8">
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
      </div>
      <h4 className="text-white text-2xl max-w-xl text-center">
        Always rated five stars across International marketplaces by creators
        and businesses
      </h4>
      <div className="flex gap-20 pt-2">
        <Image src={fiverr} alt="fiverr logo" width={200} height={100}></Image>
        <Image src={upwork} alt="upwork logo" width={200} height={100}></Image>
      </div>
    </Container>
  );
};

export default MarketPlaces;
