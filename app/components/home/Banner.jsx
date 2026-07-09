"use client";

import Image from "next/image";
import Container from "../Container";
import instragram from "./../../assets/home/instragram.svg";
import youtube from "./../../assets/home/youtube.svg";
import tiktok from "./../../assets/home/tiktok.svg";
import linkedin from "./../../assets/home/linkedin.svg";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username/30min";

  const handleScheduleCall = () => {
    if (typeof window !== "undefined") {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <Container>
      <section className="relative">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-[48px] md:text-[64px] lg:text-[88px] font-semibold text-white max-w-4xl leading-[1.1] tracking-[-2.64px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A670F8] to-[#765DE9]">Unlimited </span>video editing that goes Viral!
          </h1>
          <p className="text-[#878C91] text-sm sm:text-base font-medium text-center max-w-lg sm:max-w-2xl leading-7">
            Creating engaging content with Storytelling, Graphics, and Sound design. Focused on understanding you and bringing your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleScheduleCall}
              className="inline-flex gap-3 items-center py-4 px-8 bg-[#8955E2] text-base font-bold text-white rounded-full cursor-pointer shadow-lg shadow-[#8955E227] transition hover:bg-[#6d3acc]">
              Schedule Call <FaArrowRight />
            </button>
          </div>

          <div className="w-full max-w-[960px] aspect-video rounded-[36px] overflow-hidden shadow-2xl">
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
          className="absolute left-5 top-40 hidden md:block animate-float"
          src={instragram}
          alt="Instagram"
          width={200}
          height={200}
        />
        <Image
          className="absolute right-5 top-40 hidden md:block animate-float"
          src={youtube}
          alt="YouTube"
          width={200}
          height={200}
        />
        <Image
          className="absolute left-5 bottom-0 filter drop-shadow-[0px_4px_74px_rgba(255,255,255,0.5)] hidden md:block animate-float"
          src={tiktok}
          alt="TikTok"
          width={200}
          height={200}
        />
        <Image
          className="absolute right-5 bottom-40 hidden md:block animate-float"
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
