import Image from "next/image";
import Container from "../Container";
import { GiRoundStar } from "react-icons/gi";
import fiverr from "@/app/assets/fiverr.svg";
import upwork from "@/app/assets/upwork.svg";
const MarketPlaces = () => {
  return (
    <Container className="flex flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center text-[#FF9243] text-[36px] sm:text-[40px] gap-4">
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
        <GiRoundStar />
      </div>
      <h4 className="text-white text-2xl sm:text-3xl max-w-2xl text-center px-4">
        Always rated five stars across international marketplaces by creators and businesses
      </h4>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
        <div className="w-32 sm:w-44">
          <Image src={fiverr} alt="fiverr logo" width={250} height={120} className="w-full h-auto" />
        </div>
        <div className="w-32 sm:w-44">
          <Image src={upwork} alt="upwork logo" width={250} height={120} className="w-full h-auto" />
        </div>
      </div>
    </Container>
  );
};

export default MarketPlaces;
