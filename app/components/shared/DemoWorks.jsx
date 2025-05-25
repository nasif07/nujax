"use client";
import { LuArrowUpRight } from "react-icons/lu";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import React, { useState } from "react";

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

const DemoWorks = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredVideos = videos.filter(
    (video) => activeTab === "All" || video.category === activeTab
  );

  return (
    <Container background={"bg-[#EBEBEB]"}>
      <SectionHeader
        button={"Our Portfolio"}
        title={"Edits That Drive Results"}
        subTitle={
          "Check out our wide range of video projects, highlighting our skill in crafting impactful and engaging video."
        }
        titleColor="text-[#010205]"
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 justify-center my-10 max-w-5xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-8 py-3 rounded-full text-base border transition-all duration-300 ${
              activeTab === category
                ? "bg-[#EC4845] text-white border-[#EC4845]"
                : "bg-white text-[#010205] border-[#D7D7D7] hover:border-[#EC4845] cursor-pointer"
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* Main Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
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
              className="aspect-[9/16] w-full rounded-xl overflow-hidden shadow-md">
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
        <div className="text-center py-20">
          <button className="py-4 px-8 bg-[#EC4845] text-base font-bold  text-white rounded-[30px] cursor-pointer inline-flex items-center gap-5">
            Explore Full Gallery <LuArrowUpRight />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DemoWorks;
