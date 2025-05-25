import { FaArrowRight } from "react-icons/fa";
import Container from "../Container";
import banner from "@/app/assets/solutions/solutionBanner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <Container>
      <section className="flex justify-center items-center gap-4">
        <div className="space-y-10 flex-1">
          <h1 className="text-[48px] md:text-[64px] lg:text-[68px] font-semibold text-white max-w-4xl leading-[1.1] tracking-[-2.64px]">
            Use your time on impact -{" "}
            <span className="text-[#EC4845]">
              not chasing content deadlines.
            </span>
          </h1>
          <p className="text-[#878C91] text-base font-medium max-w-2xl leading-[1.8]">
            Whether you're a coach, consultant, founder, or creator, you know
            that consistent, high-quality content is essential to build trust
            and drive growth. But between handling clients, growing your team,
            and staying afloat on social media—it’s exhausting.
          </p>
          <button
            type="button"
            className="inline-flex gap-8 items-center py-4 px-8 bg-[#EC4845] text-base font-bold text-white rounded-[30px] cursor-pointer">
            Learn more <FaArrowRight />
          </button>
        </div>
        <div className="flex-1">
          <Image
            src={banner}
            alt="youtube video and shorts"
            className="w-full"></Image>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
