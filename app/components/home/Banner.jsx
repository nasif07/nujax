import Image from "next/image";
import Container from "../Container";
import instragram from "./../../assets/home/instragram.svg";
import youtube from "./../../assets/home/youtube.svg";
import tiktok from "./../../assets/home/tiktok.svg";
import linkedin from "./../../assets/home/linkedin.svg";
const Banner = () => {
  return (
    <Container>
      <section className="relative">
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-center text-[48px] md:text-[64px] lg:text-[88px] font-semibold text-white max-w-4xl leading-[1.1] tracking-[-2.64px]">
            <span className="text-[#EC4845]">Unlimited </span>video editing that
            goes Viral!
          </h1>
          <p className="text-[#878C91] text-base font-medium text-center max-w-2xl leading-[1.8]">
            Creating engaging content with Storytelling, Graphics, and Sound
            design. Focused on understanding you and bringing your vision to
            life.
          </p>
          <div className="space-x-5">
            <button
              type="button"
              className="px-7 py-3 border text-white rounded-[50px] font-bold text-base">
              Schedule Call
            </button>
            <button type="button" className="underline text-white">
              View previous works
            </button>
          </div>

          <div className="w-full max-w-[960px] aspect-video rounded-4xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3vF88LhkU7M"
              title="Client Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>

        {/* Floating Icons */}
        <Image
          className="absolute left-5 top-40 hidden md:block"
          src={instragram}
          alt="Instagram"
          width={200}
          height={200}
        />
        <Image
          className="absolute right-5 top-40 hidden md:block"
          src={youtube}
          alt="YouTube"
          width={200}
          height={200}
        />
        <Image
          className="absolute left-5 bottom-0 filter drop-shadow-[0px_4px_74px_rgba(255,255,255,0.5)] hidden md:block"
          src={tiktok}
          alt="TikTok"
          width={200}
          height={200}
        />
        <Image
          className="absolute right-5 bottom-40 hidden md:block"
          src={linkedin}
          alt="LinkedIn"
          width={200}
          height={200}
        />
      </section>
    </Container>
  );
};

export default Banner;

{
  /* <iframe width="1431" height="716" src="https://www.youtube.com/embed/3vF88LhkU7M" title="কম্পিউটেক্সে Thermalright এর Mini PC, Cooler, Case লাইন-আপ | Computex 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}
