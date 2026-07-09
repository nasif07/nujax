"use client";
import { LuArrowUpRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

const categories = [
  "All",
  "Beauty and Fashion",
  "Coaching & Education",
  "Ecommerce Ads",
  "Finance",
  "Fitness",
  "Health and wellness",
  "Podcasts",
  "Real Estate",
  "Tiktok and reel",
  "Youtube videos",
  "Wedding edits",
];

const videos = [
  {
    category: "Tiktok and reel",
    title: "Viral TikTok Ad",
    videoId: "dQw4w9WgXcQ",
  },
  {
    category: "Youtube videos",
    title: "YouTube Tutorial",
    videoId: "dQw4w9WgXcQ",
  },
  {
    category: "Wedding edits",
    title: "Wedding Highlight",
    videoId: "dQw4w9WgXcQ",
  },
  {
    category: "Wedding edits",
    title: "Wedding Highlight",
    videoId: "dQw4w9WgXcQ",
  },
];

const shorts = [
  {
    title: "Short 1",
    videoId: "y_NFD3N8Izo",
  },
  {
    title: "Short 2",
    videoId: "8RXeo5A-RK8",
  },
  {
    title: "Short 3",
    videoId: "CvV40-lVZYE",
  },
];

const DemoWorks = ({ showHeader = true }) => {
  return (
    <Container background={"bg-[#EBEBEB]"}>
      {showHeader && (
        <SectionHeader
          button={"Our Portfolio"}
          title={"Edits That Drive Results"}
          subTitle={
            "Check out our wide range of video projects, highlighting our skill in crafting impactful and engaging video."
          }
          titleColor="text-[#010205]"
        />
      )}

      {/* Category Labels */}
      <div className="my-8 max-w-5xl mx-auto px-4">
        <div className="hidden sm:flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-white text-[#010205] border border-[#D7D7D7] whitespace-nowrap">
              {category}
            </span>
          ))}
        </div>
        <div className="sm:hidden">
          <Swiper
            modules={[FreeMode]}
            slidesPerView="auto"
            spaceBetween={8}
            freeMode={true}
            className="py-2">
            {categories.map((category) => (
              <SwiperSlide key={category} className="!w-auto">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#010205] border border-[#D7D7D7] whitespace-nowrap inline-flex items-center justify-center">
                  {category}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Main Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full aspect-video rounded-[24px] overflow-hidden shadow-lg bg-black">
            <iframe
              loading="lazy"
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {shorts.map((short, index) => (
            <div
              key={index}
              className="aspect-[9/16] w-full rounded-[24px] overflow-hidden shadow-lg bg-black">
              <iframe
                loading="lazy"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${short.videoId}`}
                title={short.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          ))}
        </div>
        <div className="text-center py-12 px-4">
          <button className="w-full max-w-xs mx-auto py-4 px-7 bg-[#8955E2] text-base font-bold text-white rounded-full cursor-pointer inline-flex justify-center items-center gap-3 shadow-lg transition duration-300 hover:bg-[#6d3acc]">
            Explore Full Gallery <LuArrowUpRight />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DemoWorks;
